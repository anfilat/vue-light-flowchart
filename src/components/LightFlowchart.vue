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
      v-for="node in scene.nodes"
      :key="node.id"
      :options="nodeOptions"
      @linkingStart="linkingStart(node.id)"
      @linkingStop="linkingStop(node.id)"
      @tryLinking="tryAddNodeToLink(node.id)"
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
      rootDivOffset: {
        top: 0,
        left: 0
      },
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
      const lines = this.scene.links.map(({nodes, id, color}) => {
        return {
          segments: this.getSegments(nodes),
          id,
          color,
        };
      });
      if (this.draggingLink) {
        const segments = [];
        const lastNode = this.findNode(this.draggingLink.lastNodeId);

        const nodes = this.draggingLink.nodes;
        if (nodes.length > 0) {
          segments.push(...this.getSegments(nodes));
          const fromNode = this.findNode(nodes[nodes.length - 1]);
          const [sx, sy] = this.getPortPosition(fromNode, 'output');
          const [ex, ey] = this.getPortPosition(lastNode, 'input');
          segments.push([sx, sy, ex, ey]);
        }

        const [sx, sy] = this.getPortPosition(lastNode, 'output');
        segments.push([sx, sy, this.draggingLink.mx, this.draggingLink.my]);
        lines.push({
          segments,
        })
      }
      return lines;
    }
  },
  mounted() {
    this.rootDivOffset.top = this.$el ? this.$el.offsetTop : 0;
    this.rootDivOffset.left = this.$el ? this.$el.offsetLeft : 0;
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
      this.scene.nodes.forEach(node => this.nodes[node.id] = node);
    },
    findNode(id) {
      return this.nodes[id];
    },
    getSegments(nodes) {
      const segments = [];
      let fromNode = this.findNode(nodes[0]);
      for (let i = 1; i < nodes.length; i++) {
        const toNode = this.findNode(nodes[i]);
        const [sx, sy] = this.getPortPosition(fromNode, 'output');
        const [ex, ey] = this.getPortPosition(toNode, 'input');
        segments.push([sx, sy, ex, ey]);
        fromNode = toNode;
      }
      return segments;
    },
    getPortPosition(node, type) {
      const orientation = this.orientation;
      const scale = this.scale;
      const x = this.scene.centerX + node.x * scale;
      const y = this.scene.centerY + node.y * scale;

      const width = this.styles.nodeWidth;
      const height = this.styles.nodeHeight;
      if (orientation === 'vert') {
        const left = x + (width / 2) * scale;
        if (type === 'input') {
          return [left, y];
        }
        return [left, y + height * scale];
      }

      const top = y + (height / 2) * scale;
      if (type === 'input') {
        return [x, top];
      }
      return [x + width * scale, top];
    },
    linkingStart(id) {
      const node = this.findNode(id);
      const [mx, my] = this.getPortPosition(node, 'output');
      this.action.linking = true;
      this.draggingLink = {
        nodes: [],
        lastNodeId: id,
        mx,
        my,
      };
    },
    tryAddNodeToLink(id) {
      const draggingLink = this.draggingLink;
      if (!draggingLink) {
        return;
      }
      if (draggingLink.lastNodeId === id || this.isLinkIntersections(draggingLink, id)) {
        return;
      }

      draggingLink.nodes.push(draggingLink.lastNodeId);
      draggingLink.lastNodeId = id;
    },
    linkingStop(id) {
      const draggingLink = this.draggingLink;
      if (!draggingLink) {
        return;
      }
      this.draggingLink = null;

      if (id !== draggingLink.lastNodeId) {
        return;
      }
      if (this.isLinkIntersections(draggingLink, id)) {
        return;
      }

      draggingLink.nodes.push(id);
      if (this.isLinkExists(draggingLink)) {
        return;
      }

      const maxID = Math.max(0, ...this.scene.links.map(link => link.id));
      const newLink = {
        id: maxID + 1,
        nodes: draggingLink.nodes,
      };
      this.scene.links.push(newLink);
      this.$emit('linkAdded', newLink)
    },
    isLinkIntersections(link, id) {
      return link.nodes.some(node => node === id);
    },
    isLinkExists(link) {
      return this.scene.links.some(({nodes}) => {
        return link.nodes.length === nodes.length &&
          link.nodes.every((nodeId, index) => nodeId === nodes[index]);
      });
    },
    linkClick(id) {
      this.$emit('linkClick', this.findLink(id));
    },
    linkDelete(id) {
      const link = this.findLink(id);
      if (link) {
        this.scene.links = this.scene.links.filter(item => item.id !== id);
        this.$emit('linkBreak', link);
      }
    },
    linkMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseEnter', this.findLink(id));
      }
    },
    linkMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseLeave', this.findLink(id));
      }
    },
    findLink(id) {
      return this.scene.links.find(item => item.id === id);
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
        if (typeof target.className !== 'string' || target.className.indexOf('node-input') < 0) {
          this.draggingLink = null;
        }
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
    nodeDelete(id) {
      this.scene.nodes = this.scene.nodes.filter(node => node.id !== id);
      this.scene.links = this.scene.links.filter(link => !link.nodes.some(nodeId => nodeId === id));
      this.$emit('nodeDelete', id);
    },
    nodeMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseEnter', id);
      }
    },
    nodeMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseLeave', id);
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
