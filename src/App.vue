<template>
  <div id="app">
    <h1>light flowchart</h1>
    <div class="tool-wrapper">
      <div>
        <select v-model="newNodeType">
          <option v-for="(item, index) in nodeCategory" :key="index" :value="index">{{item}}</option>
        </select>
        <input type="text" v-model="newNodeLabel" placeholder="Input node label">
        <button @click="addNode">ADD</button>
      </div>
      <div>
        <label for="scale">Scale</label>
        <input id="scale" type="number" min="0.1" step="0.1" v-model.number="scene.scale"/>
        <label for="orientation">Orientation</label>
        <select id="orientation" v-model="scene.orientation">
          <option value="vert">Vertical</option>
          <option value="hor">Horizontal</option>
        </select>
      </div>
    </div>

    <light-flowchart :scene.sync="scene"
      @nodeClick="nodeClick"
      @nodeDelete="nodeDelete"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @canvasClick="canvasClick"
      :height="800"/>
  </div>
</template>

<script>
  /* eslint-disable */
import LightFlowchart from './components/LightFlowchart.vue'

export default {
  name: 'app',
  components: {
    LightFlowchart
  },
  data() {
    return {
      scene: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 'test1',
            x: -700,
            y: -69,
            type: 'Action',
            label: 'test1',
          },
          {
            id: 4,
            x: -357,
            y: 80,
            type: 'Script',
            label: 'test2',
          },
          {
            id: 'test3',
            x: -557,
            y: 80,
            type: 'Rule',
            label: 'test3',
          }
        ],
        links: [
          {
            id: 3,
            from: 'test1', // node id the link start
            to: 4,  // node id the link end
          }
        ],
        orientation: 'vert',
      },
      newNodeType: 0,
      newNodeLabel: '',
      nodeCategory:[
        'rule',
        'action',
        'script',
        'decision',
        'fork',
        'join',
      ],
    }
  },
  methods: {
    canvasClick(e) {
      console.log('canvas Click, event:', e);
    },
    addNode() {
      const maxID = Math.max(0, ...this.scene.nodes.map(link => link.id));
      this.scene.nodes.push({
        id: maxID + 1,
        x: -400,
        y: 50,
        type: this.nodeCategory[this.newNodeType],
        label: this.newNodeLabel ? this.newNodeLabel: `test${maxID + 1}`,
      });
    },
    nodeClick(id) {
      console.log('node click', id);
    },
    nodeDelete(id) {
      console.log('node delete', id);
    },
    linkBreak(id) {
      console.log('link break', id);
    },
    linkAdded(link) {
      console.log('new link added:', link);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 800px;
}

.tool-wrapper {
  position: relative;

  > div {
    margin: 10px 0;
  }

  label {
    margin-right: 20px;
  }
}
</style>
