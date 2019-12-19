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
      @canvasClick="canvasClick"
      @nodeClick="nodeClick"
      @nodeDelete="nodeDelete"
      @nodeMouseEnter="nodeMouseEnter"
      @nodeMouseLeave="nodeMouseLeave"
      @linkClick="linkClick"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @linkMouseEnter="linkMouseEnter"
      @linkMouseLeave="linkMouseLeave"
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
            x: -550,
            y: -69,
            type: 'Action',
            label: 'do it',
          }, {
            id: 3,
            x: -200,
            y: -69,
            type: 'Action',
            label: 'run it',
          }, {
            id: 'test3',
            x: -680,
            y: 80,
            type: 'Rule',
            label: 'test',
          }, {
            id: 4,
            x: -457,
            y: 80,
            type: 'Rule',
            label: 'Another test',
          }, {
            id: 5,
            x: -357,
            y: 80,
            type: 'Rule',
            label: 'test2',
            borderColor: '#aa1111',
          }, {
            id: 7,
            x: -240,
            y: 80,
            type: 'Rule',
            label: 'something',
          }, {
            id: 100,
            x: -557,
            y: 230,
            type: 'Script',
            label: 'Step out',
          }, {
            id: 102,
            x: -357,
            y: 230,
            type: 'Script',
            label: 'Step in',
            borderColor: '#11aa11',
          }, {
            id: 110,
            x: -200,
            y: 230,
            type: 'Script',
            label: 'Work',
          }
        ],
        links: [
          {
            id: 1,
            from: 'test1', // node id the link start
            to: 'test3',  // node id the link end
          }, {
            id: 3,
            color: '#FFF457',
            from: 'test1',
            to: 5,
          }, {
            id: 10,
            color: '#69fcff',
            from: 'test1',
            to: 4,
          }, {
            id: 20,
            color: '#69fcff',
            from: 4,
            to: 100,
          }, {
            id: 21,
            color: '#FFF457',
            from: 5,
            to: 102,
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
    addNode() {
      const maxID = Math.max(0,
        ...this.scene.nodes
          .filter(link => Number.isFinite(link.id))
          .map(link => link.id)
      );
      console.log('addNode', maxID);
      this.scene.nodes.push({
        id: maxID + 1,
        x: -400,
        y: 50,
        type: this.nodeCategory[this.newNodeType],
        label: this.newNodeLabel ? this.newNodeLabel: `test${maxID + 1}`,
      });
    },
    canvasClick(e) {
      console.log('canvas Click, event:', e);
    },
    nodeClick(id) {
      console.log('node click', id);
    },
    nodeDelete(id) {
      console.log('node delete', id);
    },
    nodeMouseEnter(id) {
      console.log('node mouse enter', id);
    },
    nodeMouseLeave(id) {
      console.log('node mouse leave', id);
    },
    linkClick(link) {
      console.log('link click', link);
    },
    linkBreak(link) {
      console.log('link break', link);
    },
    linkAdded(link) {
      console.log('new link added:', link);
    },
    linkMouseEnter(link) {
      console.log('link mouse enter', link);
    },
    linkMouseLeave(link) {
      console.log('link mouse leave', link);
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
