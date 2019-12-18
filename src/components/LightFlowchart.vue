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
        v-bind.sync="link"
        v-for="link in lines"
        :key="link.id"
        :options="linkOptions"
        @deleteLink="linkDelete(link.id)">
      </flowchart-link>
    </svg>
    <flowchart-node
      v-bind.sync="node"
      v-for="node in scene.nodes"
      :key="node.id"
      :options="nodeOptions"
      @linkingStart="linkingStart(node.id)"
      @linkingStop="linkingStop(node.id)"
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
          scale: 1,
          centerY: 140,
          nodes: [],
          links: [],
          orientation: 'vert',
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
        selected: 0,
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
      }
    },
    linkOptions() {
      return {
        scale: this.scale,
        themeColor: this.styles.themeColor,
        labelColor: this.styles.labelColor,
        linkWidth: this.styles.linkWidth,
      }
    },
    lines() {
      const lines = this.scene.links.map((link) => {
        const fromNode = this.findNodeWithID(link.from);
        const toNode = this.findNodeWithID(link.to);
        const [sx, sy] = this.getPortPosition(fromNode, 'output');
        const [ex, ey] = this.getPortPosition(toNode, 'input');
        return {
          start: [sx, sy],
          end: [ex, ey],
          id: link.id,
          color: link.color,
        };
      });
      if (this.draggingLink) {
        const fromNode = this.findNodeWithID(this.draggingLink.from);
        const [sx, sy] = this.getPortPosition(fromNode, 'output');
        lines.push({
          start: [sx, sy],
          end: [this.draggingLink.mx, this.draggingLink.my],
        })
      }
      return lines;
    }
  },
  mounted() {
    this.rootDivOffset.top = this.$el ? this.$el.offsetTop : 0;
    this.rootDivOffset.left = this.$el ? this.$el.offsetLeft : 0;
  },
  methods: {
    findNodeWithID(id) {
      return this.scene.nodes.find(item => id === item.id)
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
    linkingStart(index) {
      const fromNode = this.findNodeWithID(index);
      const [mx, my] = this.getPortPosition(fromNode, 'output');
      this.action.linking = true;
      this.draggingLink = {
        from: index,
        mx,
        my,
      };
    },
    linkingStop(index) {
      // add new Link
      if (this.draggingLink && this.draggingLink.from !== index) {
        // check link existence
        const existed = this.scene.links.find((link) => {
          return link.from === this.draggingLink.from && link.to === index;
        });
        if (!existed) {
          const maxID = Math.max(0, ...this.scene.links.map(link => link.id));
          const newLink = {
            id: maxID + 1,
            from: this.draggingLink.from,
            to: index,
          };
          this.scene.links.push(newLink);
          this.$emit('linkAdded', newLink)
        }
      }
      this.draggingLink = null;
    },
    linkDelete(id) {
      const deletedLink = this.scene.links.find(item => item.id === id);
      if (deletedLink) {
        this.scene.links = this.scene.links.filter(item => item.id !== id);
        this.$emit('linkBreak', deletedLink);
      }
    },
    nodeSelected(id, e) {
      this.action.dragging = id;
      this.action.selected = id;
      this.$emit('nodeClick', id);
      [this.mouse.lastX, this.mouse.lastY] = getMousePosition(this.$el, e);
    },
    handleMove(e) {
      if (this.action.linking) {
        [this.draggingLink.mx, this.draggingLink.my] = getMousePosition(this.$el, e);
      } else if (this.action.dragging) {
        const [mouseX, mouseY] = getMousePosition(this.$el, e);
        const diffX = mouseX - this.mouse.lastX;
        const diffY = mouseY - this.mouse.lastY;

        this.mouse.lastX = mouseX;
        this.mouse.lastY = mouseY;
        this.mouse.lastEvent = e;

        this.moveSelectedNode(diffX, diffY);
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
    handleUp(e) {
      const target = e.target || e.srcElement;
      if (this.$el.contains(target)) {
        if (typeof target.className !== 'string' || target.className.indexOf('node-input') < 0) {
          this.draggingLink = null;
        }
        if (typeof target.className === 'string' && target.className.indexOf('node-delete') > -1) {
          this.nodeDelete(this.action.dragging);
        }
      }
      this.action.linking = false;
      this.action.dragging = null;
      this.action.scrolling = false;
      this.stopAutoScroll();
    },
    handleDown(e) {
      const target = e.target || e.srcElement;
      if ((target === this.$el || target.matches('svg, svg *')) && e.which === 1) {
        this.action.scrolling = true;
        [this.mouse.lastX, this.mouse.lastY] = getMousePosition(this.$el, e);
        this.action.selected = null; // deselectAll
      }
      this.$emit('canvasClick', e);
    },
    moveSelectedNode(dx, dy) {
      const index = this.scene.nodes.findIndex(item => item.id === this.action.dragging);
      const node = this.scene.nodes[index];
      const left = node.x + dx / this.scale;
      const top = node.y + dy / this.scale;
      this.$set(this.scene.nodes, index, Object.assign(node, {
        x: left,
        y: top,
      }));
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
        this.moveSelectedNode(diffX, diffY);
        this.scene.centerX -= diffX;
        this.scene.centerY -= diffY;
      }
    },
    nodeDelete(id) {
      this.scene.nodes = this.scene.nodes.filter(node => node.id !== id);
      this.scene.links = this.scene.links.filter(link => link.from !== id && link.to !== id);
      this.$emit('nodeDelete', id);
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
