<template>
  <div class="flowchart-node"
    :class="[{selected: isSelected}, options.orientation]"
    :style="nodeStyle"
    @mousedown.prevent="handleMouseDown"
    @mouseup.prevent="handleMouseUp"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="node-main">
      <div v-text="type" class="node-type"></div>
      <div v-text="label" class="node-label"></div>
    </div>
    <div
      v-for="output in outputs"
      :key="output.key"
      class="node-port"
      :style="output.style"
      @mousedown.prevent="outputMouseDown(output.parentLinkId)"
    >
    </div>
    <div v-show="show.delete" class="node-delete">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'FlowchartNode',
  props: {
    id: {
      default: 1000
    },
    x: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    y: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    type: {
      type: String,
      default: 'Default'
    },
    label: {
      type: String,
      default: 'input name'
    },
    borderColor: String,
    incomings: {
      type: Array,
    },
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          centerY: 140,
          scale: 1,
          selected: [],
          orientation: 'vert',
          width: 80,
          height: 80,
          themeColor: '',
          nodeBgColor: '',
          typeColor: '',
          labelColor: '',
          canDelete: true,
        }
      }
    }
  },
  data() {
    return {
      show: {
        delete: false,
      }
    }
  },
  computed: {
    isSelected() {
      return this.options.selected.includes(this.id);
    },
    nodeStyle() {
      const style = {
        top: this.options.centerY + this.y * this.options.scale + 'px',
        left: this.options.centerX + this.x * this.options.scale + 'px',
        transform: `scale(${this.options.scale})`,
        width: this.options.width + 'px',
        height: this.options.height + 'px',
        '--theme-color': this.options.themeColor,
        '--node-bgcolor': this.options.nodeBgColor,
        '--type-color': this.options.typeColor,
        '--label-color': this.options.labelColor,
      };
      if (this.borderColor && !this.isSelected) {
        style['box-shadow'] = `0 0 0 2px ${this.borderColor}`;
      }
      return style;
    },
    outputs() {
      const result = [];
      const incomingLen = this.incomings == null ? 0 : this.incomings.length;
      if (this.incomings != null) {
        this.incomings.forEach((linkId, linkPosition) => {
          const pos = Math.round((linkPosition + 1) / (incomingLen + 2) * 100);
          const style = this.options.orientation === 'vert'
            ? {left: `${pos}%`}
            : {top: `${pos}%`};
          result.push({
            key: linkId,
            parentLinkId: linkId,
            style,
          });
        });
      }
      const pos = Math.round((incomingLen + 1) / (incomingLen + 2) * 100);
      const style = this.options.orientation === 'vert'
        ? {left: `${pos}%`}
        : {top: `${pos}%`};
      result.push({
        key: 'free',
        parentLinkId: null,
        style,
      });

      return result;
    }
  },
  methods: {
    handleMouseDown(e) {
      const target = e.target || e.srcElement;
      if (target.className.indexOf('node-port') < 0) {
        this.$emit('nodeSelected', e);
      }
    },
    handleMouseUp() {
      this.$emit('linkingStop');
    },
    handleMouseEnter() {
      if (this.options.canDelete) {
        this.show.delete = true;
      }
      this.$emit('nodeMouseEnter');
    },
    handleMouseLeave() {
      if (this.options.canDelete) {
        this.show.delete = false;
      }
      this.$emit('nodeMouseLeave');
    },
    outputMouseDown(parentLinkId) {
      this.$emit('linkingStart', this.id, parentLinkId);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$portSize: 12;

.flowchart-node {
  margin: 0;
  position: absolute;
  box-sizing: border-box;
  border: none;
  background: var(--node-bgcolor);
  color: var(--label-color);
  z-index: 1;
  opacity: .9;
  cursor: move;
  transform-origin: top left;

  .node-main {
    text-align: center;

    .node-type {
      background: var(--theme-color);
      color: var(--type-color);
      font-size: 13px;
      padding: 6px;
    }

    .node-label {
      font-size: 13px;
    }
  }

  .node-port {
    position: absolute;
    width: #{$portSize}px;
    height: #{$portSize}px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background: var(--node-bgcolor);

    &:hover {
      background: var(--theme-color);
      border: 1px solid var(--theme-color);
    }
  }

  &.vert {
    .node-port {
      transform: translateX(-50%);
      bottom: #{-2+$portSize/-2}px;
    }
  }

  &.hor {
    .node-port {
      transform: translateY(-50%);
      right: #{-2+$portSize/-2}px;
    }
  }

  .node-delete {
    position: absolute;
    right: -6px;
    top: -6px;
    font-size: 12px;
    width: 12px;
    height: 12px;
    color: var(--theme-color);
    cursor: pointer;
    background: var(--node-bgcolor);
    border: 1px solid var(--theme-color);
    border-radius: 100px;
    text-align: center;

    &:hover{
      background: var(--theme-color);
      color: white;
    }
  }
}

.selected {
  box-shadow: 0 0 0 2px var(--theme-color);
  z-index: 2;
}
</style>
