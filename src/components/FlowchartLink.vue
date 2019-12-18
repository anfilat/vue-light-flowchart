<template>
  <g
    @mousedown="handleClick"
    @mouseenter="handleMouseEnter"
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
    handleMouseEnter() {
      if (this.id) {
        this.show.delete = true;
        this.$emit('linkMouseEnter');
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
      const [x, y] = this.bezierDots();
      const xTangent = 0.75 * (x[1] - x[0]) + 1.5 * (x[2] - x[1]) + 0.75 * (x[3] - x[2]);
      const yTangent = 0.75 * (y[1] - y[0]) + 1.5 * (y[2] - y[1]) + 0.75 * (y[3] - y[2]);
      const angle = -Math.atan2(xTangent, yTangent);
      const degree = angle * 180 / Math.PI;
      return degree < 0 ? degree + 360 : degree;
    },
    bezierDots() {
      const x0 = this.start[0];
      const y0 = this.start[1];
      const x3 = this.end[0];
      const y3 = this.end[1];
      const x1 = x0;
      const y1 = y0 + 50;
      const x2 = x3;
      const y2 = y3 - 50;
      return [[x0, x1, x2, x3], [y0, y1, y2, y3]];
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
      const [x, y] = this.bezierDots();
      return `M ${x[0]}, ${y[0]} C ${x[1]}, ${y[1]}, ${x[2]}, ${y[2]}, ${x[3]}, ${y[3]}`;
    }
  }
}
</script>

<style scoped lang="scss">
g {
  cursor: pointer;
}
</style>
