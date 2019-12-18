<template>
  <div class="flowchart-node"
    :class="[{selected: isSelected}, orientation]"
    :style="nodeStyle"
    @mousedown.prevent="handleMousedown"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="node-port node-input"
       @mousedown="inputMouseDown"
       @mouseup.prevent="inputMouseUp">
    </div>
    <div class="node-main">
      <div v-text="type" class="node-type"></div>
      <div v-text="label" class="node-label"></div>
    </div>
    <div class="node-port node-output"
      @mousedown.prevent="outputMouseDown">
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
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          centerY: 140,
          scale: 1,
          selected: null,
          orientation: 'vert',
          width: 80,
          height: 80,
          themeColor: '',
          nodeBgColor: '',
          typeColor: '',
          labelColor: '',
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
      return this.options.selected === this.id;
    },
    orientation() {
      return this.options.orientation === 'vert' ? 'vert' : 'hor';
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
    }
  },
  methods: {
    handleMousedown(e) {
      const target = e.target || e.srcElement;
      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
    },
    handleMouseEnter() {
      this.show.delete = true;
      this.$emit('nodeMouseEnter');
    },
    handleMouseLeave() {
      this.show.delete = false;
      this.$emit('nodeMouseLeave');
    },
    outputMouseDown() {
      this.$emit('linkingStart');
    },
    inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp() {
      this.$emit('linkingStop');
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
      left: 50%;
      transform: translateX(-50%);
    }

    .node-input {
      top: #{-2+$portSize/-2}px;
    }

    .node-output {
      bottom: #{-2+$portSize/-2}px;
    }
  }

  &.hor {
    .node-port {
      top: 50%;
      transform: translateY(-50%);
    }

    .node-input {
      left: #{-2+$portSize/-2}px;
    }

    .node-output {
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
