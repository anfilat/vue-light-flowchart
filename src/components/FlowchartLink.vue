<template>
  <g
    @mousedown="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <g v-for="section in sections" :key="section.key">
      <path :d="section.path" :style="pathStyle"/>
      <a
        v-if="show.delete"
        @click="deleteLink">
        <circle cx="0" cy="0" r="8"
          fill-opacity="0"
          :transform="section.transform">
        </circle>
        <path
          d="M -4 -4 L 4 4 M 4 -4 L -4 4"
          :style="deleteStyle"
          :transform="section.transform">
        </path>
      </a>
      <path v-else
        d="M -1 -1 L 0 1 L 1 -1 z"
        :style="arrowStyle"
        :transform="section.transform"/>
    </g>
  </g>
</template>

<script>
export default {
  name: 'FlowchartLink',
  props: {
    id: Number,
    color: String,
    // [[segment1startX, segment1startY, segment1endX, segment1endY], ...]
    segments: Array,
    options: {
      type: Object,
      default() {
        return {
          scale: 1,
          themeColor: '',
          labelColor: '',
          linkWidth: 2.73205,
          canDelete: true,
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
        if (this.options.canDelete) {
          this.show.delete = true;
        }
        this.$emit('linkMouseEnter');
      }
    },
    handleMouseLeave() {
      if (this.id) {
        if (this.options.canDelete) {
          this.show.delete = false;
        }
        this.$emit('linkMouseLeave');
      }
    },
    deleteLink() {
      this.$emit('deleteLink');
    }
  },
  computed: {
    sections() {
      return this.segments.map(([x0, y0, x3, y3], index) => {
        const centerX = (x3 + x0) / 2;
        const centerY = (y3 + y0) / 2;
        const x1 = x0;
        const y1 = y0 + 50;
        const x2 = x3;
        const y2 = y3 - 50;
        let degree = -Math.atan2(x3 + x2 - x1 - x0, y3 + y2 - y1 - y0) * 180 / Math.PI;
        if (degree < 0) {
          degree += 360;
        }

        const path = `M ${x0}, ${y0} C ${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`;
        const transform = `translate(${centerX}, ${centerY}) rotate(${degree}) scale(${this.options.scale})`;

        return {
          key: index,
          path,
          transform
        };
      });
    },
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
    }
  }
}
</script>

<style scoped lang="scss">
g {
  cursor: pointer;
}
</style>
