<template>
  <div class="flowchart-node"
    :class="[{selected: options.selected === id}, options.orientation === 'vert' ? 'vert' : 'hor']"
    :style="nodeStyle"
    @mousedown.prevent="handleMousedown"
    @mouseover="handleMouseOver"
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
      type: Number,
      default: 1000,
      validator(val) {
        return typeof val === 'number'
      }
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
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
          orientation: 'vert',
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
    nodeStyle() {
      return {
        top: this.options.centerY + this.y * this.options.scale + 'px',
        left: this.options.centerX + this.x * this.options.scale + 'px',
        transform: `scale(${this.options.scale})`,
      }
    }
  },
  methods: {
    handleMousedown(e) {
      const target = e.target || e.srcElement;
      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
    },
    handleMouseOver() {
      this.show.delete = true;
    },
    handleMouseLeave() {
      this.show.delete = false;
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
$themeColor: rgb(255, 136, 85);
$portSize: 12;

.flowchart-node {
  margin: 0;
  width: 80px;
  height: 80px;
  position: absolute;
  box-sizing: border-box;
  border: none;
  background: white;
  z-index: 1;
  opacity: .9;
  cursor: move;
  transform-origin: top left;

  .node-main {
    text-align: center;

    .node-type {
      background: $themeColor;
      color: white;
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
    background: white;

    &:hover {
      background: $themeColor;
      border: 1px solid $themeColor;
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
    color: $themeColor;
    cursor: pointer;
    background: white;
    border: 1px solid $themeColor;
    border-radius: 100px;
    text-align: center;

    &:hover{
      background: $themeColor;
      color: white;
    }
  }
}

.selected {
  box-shadow: 0 0 0 2px $themeColor;
}
</style>
