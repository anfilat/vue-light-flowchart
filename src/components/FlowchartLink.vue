<template>
  <g
    @mousedown="handleClick"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave">
    <path :d="dAttr" :style="pathStyle"/>
    <a
      v-if="show.delete"
      @click="deleteLink">
      <circle cx="0" cy="0" r="8"
        fill-opacity="0"
        :transform="arrowTransform">
      </circle>
      <path
        d="M -4 -4 L 4 4 M 4 -4 L -4 4"
        :style="deleteStyle"
        :transform="arrowTransform">
      </path>
    </a>
    <path v-else
      d="M -1 -1 L 0 1 L 1 -1 z"
      :style="arrowStyle"
      :transform="arrowTransform"/>
  </g>
</template>

<script>
export default {
  name: 'FlowchartLink',
  props: {
    id: Number,
    color: String,
    // start point position [x, y]
    start: {
      type: Array,
      default() {
        return [0, 0]
      }
    },
    // end point position [x, y]
    end: {
      type: Array,
      default() {
        return [0, 0]
      }
    },
    options: {
      type: Object,
      default() {
        return {
          scale: 1,
          themeColor: '',
          labelColor: '',
          linkWidth: 2.73205,
        }
      }
    },
  },
  data() {
    return {
      show: {
        delete: false,
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('linkClick');
    },
    handleMouseOver() {
      if (this.id) {
        this.show.delete = true;
        this.$emit('linkMouseOver');
      }
    },
    handleMouseLeave() {
      this.show.delete = false;
      this.$emit('linkMouseLeave');
    },
    calculateCenterPoint() {
      // calculate arrow position: the center point between start and end
      const dx = (this.end[0] - this.start[0]) / 2;
      const dy = (this.end[1] - this.start[1]) / 2;
      return [this.start[0] + dx, this.start[1] + dy];
    },
    calculateRotation() {
      // calculate arrow rotation
      const angle = -Math.atan2(this.end[0] - this.start[0], this.end[1] - this.start[1]);
      const degree = angle * 180 / Math.PI;
      return degree < 0 ? degree + 360 : degree;
    },
    deleteLink() {
      this.$emit('deleteLink');
    }
  },
  computed: {
    pathStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: this.options.linkWidth * this.options.scale,
        fill: 'none',
      }
    },
    deleteStyle() {
      return {
        stroke: this.options.labelColor,
        strokeWidth: 0.8 * this.options.linkWidth,
        fill: 'none',
      }
    },
    arrowStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: 2 * this.options.linkWidth,
        fill: 'none',
      }
    },
    arrowTransform() {
      const [arrowX, arrowY] = this.calculateCenterPoint();
      const degree = this.calculateRotation();
      return `translate(${arrowX}, ${arrowY}) rotate(${degree}) scale(${this.options.scale})`;
    },
    dAttr() {
      const sx = this.start[0];
      const sy = this.start[1];
      const ex = this.end[0];
      const ey = this.end[1];
      const x1 = sx;
      const y1 = sy + 50;
      const x2 = ex;
      const y2 = ey - 50;
      return `M ${sx}, ${sy} C ${x1}, ${y1}, ${x2}, ${y2}, ${ex}, ${ey}`;
    }
  }
}
</script>

<style scoped lang="scss">
g {
  cursor: pointer;
}
</style>
