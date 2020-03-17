<template>
  <div
    class="flowchart-container"
    @mousemove="handleMove"
    @mouseup="handleUp"
    @mousedown="handleDown">
    <svg
      width="100%"
      :height="`${height}px`">
      <flowchart-link
        v-bind="link"
        v-for="link in lines"
        :key="link.id"
        :options="linkOptions"
        @linkMouseEnter="linkMouseEnter(link.id)"
        @linkMouseLeave="linkMouseLeave(link.id)"
        @linkClick="linkClick(link.id)"
        @deleteLink="linkDelete(link.id)">
      </flowchart-link>
    </svg>
    <flowchart-node
      v-bind="node"
      :incomings="getIncoming(node.id)"
      v-for="node in scene.nodes"
      :key="node.id"
      :options="nodeOptions"
      @linkingStart="linkingStart"
      @linkingStop="linkingStop(node.id)"
      @nodeMouseEnter="nodeMouseEnter(node.id)"
      @nodeMouseLeave="nodeMouseLeave(node.id)"
      @nodeSelected="nodeSelected(node.id, $event)">
    </flowchart-node>
  </div>
</template>

<script>
import FlowchartLink from './FlowchartLink.vue';
import FlowchartNode from './FlowchartNode.vue';
import { getMousePosition } from '../assets/utilty/position';

const defaultWidth = 80;
const defaultHeight = 80;
const defaultThemeColor = '#ff8855';
const defaultNodeBgColor = '#fff';
const defaultTypeColor = '#fff';
const defaultLabelColor = '#2c3e50';
const defaultLinkWidth = 2.73205;
const autoScrollStep = 8;
const autoScrollTimeout = 100;

export default {
  name: 'VueLightFlowchart',
  props: {
    scene: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          centerY: 140,
          scale: 1,
          nodes: [],
          links: [],
          orientation: 'vert',
          showDeleteNode: true,
          showDeleteLink: true,
          styles: {
            nodeWidth: defaultWidth,
            nodeHeight: defaultHeight,
            themeColor: defaultThemeColor,
            nodeBgColor: defaultNodeBgColor,
            typeColor: defaultTypeColor,
            labelColor: defaultLabelColor,
            linkWidth: defaultLinkWidth,
          }
        }
      }
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      action: {
        linking: false,
        dragging: false,
        scrolling: false,
        selected: [],
      },
      mouse: {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
      },
      draggingLink: null,
    };
  },
  components: {
    FlowchartLink,
    FlowchartNode,
  },
  watch: {
    'scene.nodes': {
      handler: 'setNodes',
      immediate: true,
    },
    'scene.links': {
      handler: 'setLinks',
      immediate: true,
    }
  },
  computed: {
    scale() {
      return this.scene.scale || 1;
    },
    orientation() {
      return this.scene.orientation || 'vert';
    },
    styles() {
      return {
        ...{
          nodeWidth: defaultWidth,
          nodeHeight: defaultHeight,
          themeColor: defaultThemeColor,
          nodeBgColor: defaultNodeBgColor,
          typeColor: defaultTypeColor,
          labelColor: defaultLabelColor,
          linkWidth: defaultLinkWidth,
        },
        ...this.scene.styles
      };
    },
    nodeOptions() {
      return {
        centerY: this.scene.centerY,
        centerX: this.scene.centerX,
        scale: this.scale,
        selected: this.action.selected,
        orientation: this.orientation,
        width: this.styles.nodeWidth,
        height: this.styles.nodeHeight,
        themeColor: this.styles.themeColor,
        nodeBgColor: this.styles.nodeBgColor,
        typeColor: this.styles.typeColor,
        labelColor: this.styles.labelColor,
        canDelete: this.scene.showDeleteNode,
      }
    },
    linkOptions() {
      return {
        scale: this.scale,
        themeColor: this.styles.themeColor,
        labelColor: this.styles.labelColor,
        linkWidth: this.styles.linkWidth,
        canDelete: this.scene.showDeleteLink,
      }
    },
    lines() {
      const lines = this.scene.links.map(link => {
        return {
          id: link.id,
          color: link.color,
          fromTo: this.getPath(link),
        };
      });
      if (this.draggingLink) {
        const from = this.findNode(this.draggingLink.from);
        const [sx, sy] = this.getPortPosition(from, this.draggingLink.parentLinkId, 'output');
        lines.push({
          fromTo: [sx, sy, this.draggingLink.mx, this.draggingLink.my],
        })
      }
      return lines;
    }
  },
  mounted() {
    this.select = {
      lastClickedId: null,
      isCtrlClick: false,
      isClickedSelected: false,
      wasDragging: false,
    };
  },
  methods: {
    setNodes() {
      this.nodes = new Map();
      this.scene.nodes.forEach(node => this.nodes.set(node.id, node));
    },
    setLinks() {
      this.links = new Map();
      this.incomings = new Map();

      this.scene.links.forEach(link => {
        this.links.set(link.id, link);

        const inLinks = this.incomings.get(link.to);
        if (inLinks === undefined) {
          this.incomings.set(link.to, [link.id]);
        } else {
          inLinks.push(link.id);
        }
      });
    },
    findNode(nodeId) {
      return this.nodes.get(nodeId);
    },
    findLink(linkId) {
      return this.links.get(linkId);
    },
    getIncoming(nodeId) {
      return this.incomings.get(nodeId);
    },
    getPath(link) {
      const fromNode = this.findNode(link.from);
      const toNode = this.findNode(link.to);
      const [sx, sy] = this.getPortPosition(fromNode, link.parentLinkId, 'output');
      const [ex, ey] = this.getPortPosition(toNode, link.id, 'input');
      return [sx, sy, ex, ey];
    },
    getPortPosition(node, linkId, type) {
      const incoming = this.getIncoming(node.id);
      const incomingLen = incoming == null ? 0 : incoming.length;
      const linkPosition = linkId == null || incomingLen === 0
        ? incomingLen
        : incoming.indexOf(linkId);
      const orientation = this.orientation;
      const scale = this.scale;
      const x = this.scene.centerX + node.x * scale;
      const y = this.scene.centerY + node.y * scale;

      const width = this.styles.nodeWidth;
      const height = this.styles.nodeHeight;
      if (orientation === 'vert') {
        const left = Math.round(x + (linkPosition + 1) / (incomingLen + 2) * width * scale);
        if (type === 'input') {
          return [left, y];
        }
        return [left, y + height * scale];
      }

      const top = Math.round(y + (linkPosition + 1) / (incomingLen + 2) * height * scale);
      if (type === 'input') {
        return [x, top];
      }
      return [x + width * scale, top];
    },
    linkingStart(nodeId, parentLinkId) {
      const node = this.findNode(nodeId);
      const [mx, my] = this.getPortPosition(node, parentLinkId, 'output');
      this.action.linking = true;
      this.draggingLink = {
        from: nodeId,
        to: null,
        parentLinkId,
        mx,
        my,
      };
    },
    linkingStop(nodeId) {
      if (!this.draggingLink) {
        return;
      }

      const draggingLink = this.draggingLink;
      draggingLink.to = nodeId;
      this.draggingLink = null;

      if (draggingLink.from === draggingLink.to) {
        return;
      }
      if (this.isLinkExists(draggingLink)) {
        return;
      }

      const maxID = Math.max(0, ...this.scene.links.map(link => link.id));
      const newId = maxID + 1;
      const newLink = {
        id: newId,
        parentLinkId: draggingLink.parentLinkId,
        from: draggingLink.from,
        to: draggingLink.to,
      };
      this.scene.links.push(newLink);

      if (draggingLink.parentLinkId) {
        const parent = this.findLink(draggingLink.parentLinkId);
        if (parent.follow) {
          parent.follow.push(newId);
        } else {
          parent.follow = [newId];
        }
      }

      this.$emit('linkAdded', newLink)
    },
    isLinkExists(link) {
      return this.scene.links.some(({from, to, parentLinkId}) => {
        return link.from === from && link.to === to && link.parentLinkId == parentLinkId;
      });
    },
    linkClick(linkId) {
      this.$emit('linkClick', this.findLink(linkId));
    },
    linkDelete(linkId) {
      const link = this.findLink(linkId);
      if (link) {
        this.scene.links.forEach(item => {
          if (item.follow) {
            item.follow = item.follow.filter(id => id !== linkId);
          }
        });
        this.scene.links = this.scene.links.filter(item => item.id !== linkId);
        this.$emit('linkBreak', link);
      }
    },
    linkMouseEnter(linkId) {
      if (!this.action.dragging) {
        this.$emit('linkMouseEnter', this.findLink(linkId));
      }
    },
    linkMouseLeave(linkId) {
      if (!this.action.dragging) {
        this.$emit('linkMouseLeave', this.findLink(linkId));
      }
    },
    nodeSelected(id, e) {
      this.select = {
        lastClickedId: id,
        isCtrlClick: e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey,
        isClickedSelected: this.action.selected.includes(id),
        wasDragging: false,
      };
      this.action.dragging = true;
      this.selectNodeOnDown(id);
      this.$emit('nodeClick', id);
      [this.mouse.lastX, this.mouse.lastY] = getMousePosition(this.$el, e);
    },
    handleMove(e) {
      if (this.action.linking) {
        [this.draggingLink.mx, this.draggingLink.my] = getMousePosition(this.$el, e);

        this.mouse.lastEvent = e;
        this.startAutoScroll();
      } else if (this.action.dragging) {
        const [mouseX, mouseY] = getMousePosition(this.$el, e);
        const diffX = mouseX - this.mouse.lastX;
        const diffY = mouseY - this.mouse.lastY;

        this.mouse.lastX = mouseX;
        this.mouse.lastY = mouseY;
        this.mouse.lastEvent = e;

        this.moveSelectedNodes(diffX, diffY);
        this.select.wasDragging = true;
        this.startAutoScroll();
      } else if (this.action.scrolling) {
        const [mouseX, mouseY] = getMousePosition(this.$el, e);
        const diffX = mouseX - this.mouse.lastX;
        const diffY = mouseY - this.mouse.lastY;

        this.mouse.lastX = mouseX;
        this.mouse.lastY = mouseY;

        this.scene.centerX += diffX;
        this.scene.centerY += diffY;
      }
    },
    handleDown(e) {
      const target = e.target || e.srcElement;
      if ((target === this.$el || target.matches('svg, svg *')) && e.which === 1) {
        this.action.scrolling = true;
        [this.mouse.lastX, this.mouse.lastY] = getMousePosition(this.$el, e);
        this.action.selected = [];
      }
      this.$emit('canvasClick', e);
    },
    handleUp(e) {
      const target = e.target || e.srcElement;
      if (this.$el.contains(target)) {
        this.draggingLink = null;
        if (this.scene.showDeleteNode &&
          typeof target.className === 'string' && target.className.indexOf('node-delete') > -1) {
          this.nodeDelete(this.select.lastClickedId);
        }
      }
      this.selectNodeOnUp();
      this.action.linking = false;
      this.action.dragging = false;
      this.action.scrolling = false;
      this.stopAutoScroll();
    },
    selectNodeOnDown(id) {
      const {isClickedSelected, isCtrlClick} = this.select;
      if (isClickedSelected) {
        return;
      }
      if (isCtrlClick) {
        this.action.selected.push(id);
      } else {
        this.action.selected = [id];
      }
    },
    selectNodeOnUp() {
      const {wasDragging, isClickedSelected, isCtrlClick, lastClickedId} = this.select;
      if (wasDragging) {
        return;
      }
      if (isClickedSelected) {
        if (isCtrlClick) {
          this.action.selected = this.action.selected.filter(item => item !== lastClickedId);
        } else {
          this.action.selected = [lastClickedId];
        }
      }
    },
    moveSelectedNodes(dx, dy) {
      this.scene.nodes.forEach((node, index) => {
        if (!this.action.selected.includes(node.id)) {
          return;
        }

        const left = node.x + dx / this.scale;
        const top = node.y + dy / this.scale;
        this.$set(this.scene.nodes, index, Object.assign(node, {
          x: left,
          y: top,
        }));
      });
    },
    startAutoScroll() {
      if (!this.autoScrollId) {
        this.autoScrollId = setInterval(this.autoScroll.bind(this), autoScrollTimeout);
      }
    },
    stopAutoScroll() {
      if (this.autoScrollId) {
        clearInterval(this.autoScrollId);
        this.autoScrollId = null;
      }
    },
    autoScroll() {
      const [mouseX, mouseY] = getMousePosition(this.$el, this.mouse.lastEvent);
      const {width, height} = this.$el.getBoundingClientRect();
      const widthThreshold = this.styles.nodeWidth / 2;
      const heightThreshold = this.styles.nodeHeight / 2;
      let diffX = 0;
      let diffY = 0;

      if (mouseX < widthThreshold) {
        diffX = -autoScrollStep;
      } else if (width - mouseX < widthThreshold) {
        diffX = autoScrollStep;
      }
      if (mouseY < heightThreshold) {
        diffY = -autoScrollStep;
      } else if (height - mouseY < heightThreshold) {
        diffY = autoScrollStep;
      }
      if (diffX !== 0 || diffY !== 0) {
        this.moveSelectedNodes(diffX, diffY);
        this.scene.centerX -= diffX;
        this.scene.centerY -= diffY;
      }
    },
    nodeDelete(nodeId) {
      this.scene.nodes = this.scene.nodes.filter(node => node.id !== nodeId);

      const deleteLinks = new Set();
      this.scene.links.forEach(link => {
        if (link.to === nodeId) {
          deleteLinks.add(link.id);

          if (link.parentLinkId) {
            const parentLink = this.findLink(link.parentLinkId);
            parentLink.follow = parentLink.follow.filter(id => id !== link.id);
          }
        }
        if (link.from === nodeId) {
          // delete all follow links
          const ids = [link.id];
          while (ids.length > 0) {
            const linkId = ids.pop();
            deleteLinks.add(linkId);

            const item = this.findLink(linkId);
            if (item.follow) {
              item.follow.forEach(id => ids.push(id));
            }
          }
        }
      });
      this.scene.links = this.scene.links.filter(link => !deleteLinks.has(link.id));
      this.$emit('nodeDelete', nodeId);
    },
    nodeMouseEnter(nodeId) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseEnter', nodeId);
      }
    },
    nodeMouseLeave(nodeId) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseLeave', nodeId);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flowchart-container {
  margin: 0;
  background: #ddd;
  position: relative;
  overflow: hidden;

  svg {
    cursor: grab;
  }
}
</style>
