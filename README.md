# vue-light-flowchart

## Introduction

A lightweight flowchart editor for Vue.js, code with vanillaJS.
Based on [vue-simple-flowchart](https://github.com/Jeffreyrn/vue-simple-flowchart)

## Demo

[https://anfilat.github.io/vue-light-flowchart/](https://anfilat.github.io/vue-light-flowchart/)

### Feature

- drag to connent two node, click to delete link
- support add, delete node
- reactive flowchart data
  
### Usage

install via npm/yarn

```
npm install --save vue-light-flowchart
```

import in script

```js
import LightFlowchart from 'vue-light-flowchart';
import 'vue-light-flowchart/dist/vue-light-flowchart.css';
```
register the component, and add below to html:
```html
<light-flowchart :scene.sync="data"></light-flowchart>
```
then set data for flowchart component, for example:
```js
data() {
    return {
        data: {
            centerX: 1024,
            centerY: 140,
            scale: 1,
            nodes: [
                {
                    id: 'id2',
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
                    borderColor: '#aa1111',
                },
                {
                    id: 6,
                    x: -557,
                    y: 80,
                    type: 'Rule',
                    label: 'test3',
                }
            ],
            links: [
                {
                    id: 3,
                    color: '#FFF457',
                    from: 'id2', // node id the link start
                    to: 4,  // node id the link end
                }
            ]
        },
    };
}
```

### Component

#### Attributes

- height, type: Number, default: 400

#### Events

- nodeClick, emit when node click, event = nodeID
- nodeDelete: emit when node deleted, event = nodeID
- nodeMouseEnter: emit when mouse enters node, event = nodeID
- nodeMouseLeave: emit when mouse has left node, event = nodeID
- linkClick, emit when link click, event = {id, from, to} (link Object)
- linkBreak: emit when the selected link deleted, event = {id, from, to} (deleted link Object)
- linkAdded: emit when new link added, event = {id, from, to} (new link Object)
- linkMouseEnter: emit when mouse enters link, event = {id, from, to} (link Object)
- linkMouseLeave: emit when mouse has left link, event = {id, from, to} (link Object)
- canvasClick: emit when canvas click, event = { (Event Object) }

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
