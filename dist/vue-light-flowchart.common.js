module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2aee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_7f444b57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4217");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_7f444b57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_7f444b57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightFlowchart_vue_vue_type_style_index_0_id_7f444b57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4217":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4b28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7b97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_796da41e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b28");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_796da41e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_796da41e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartLink_vue_vue_type_style_index_0_id_796da41e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9226":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f579":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_16321d16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9226");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_16321d16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_16321d16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowchartNode_vue_vue_type_style_index_0_id_16321d16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightFlowchart.vue?vue&type=template&id=7f444b57&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowchart-container",on:{"mousemove":_vm.handleMove,"mouseup":_vm.handleUp,"mousedown":_vm.handleDown}},[_c('svg',{attrs:{"width":"100%","height":(_vm.height + "px")}},_vm._l((_vm.lines),function(link){return _c('flowchart-link',_vm._b({key:link.id,attrs:{"options":_vm.linkOptions},on:{"linkMouseEnter":function($event){return _vm.linkMouseEnter(link.id)},"linkMouseLeave":function($event){return _vm.linkMouseLeave(link.id)},"linkClick":function($event){return _vm.linkClick(link.id)},"deleteLink":function($event){return _vm.linkDelete(link.id)}}},'flowchart-link',link,false))}),1),_vm._l((_vm.scene.nodes),function(node){return _c('flowchart-node',_vm._b({key:node.id,attrs:{"options":_vm.nodeOptions},on:{"linkingStart":function($event){return _vm.linkingStart(node.id)},"linkingStop":function($event){return _vm.linkingStop(node.id)},"tryLinking":function($event){return _vm.tryAddNodeToLink(node.id)},"nodeMouseEnter":function($event){return _vm.nodeMouseEnter(node.id)},"nodeMouseLeave":function($event){return _vm.nodeMouseLeave(node.id)},"nodeSelected":function($event){return _vm.nodeSelected(node.id, $event)}}},'flowchart-node',node,false))})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LightFlowchart.vue?vue&type=template&id=7f444b57&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartLink.vue?vue&type=template&id=796da41e&scoped=true&
var FlowchartLinkvue_type_template_id_796da41e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{on:{"mousedown":_vm.handleClick,"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},_vm._l((_vm.sections),function(section){return _c('g',{key:section.key},[_c('path',{style:(_vm.pathStyle),attrs:{"d":section.path}}),(_vm.show.delete)?_c('a',{on:{"click":_vm.deleteLink}},[_c('circle',{attrs:{"cx":"0","cy":"0","r":"8","fill-opacity":"0","transform":section.transform}}),_c('path',{style:(_vm.deleteStyle),attrs:{"d":"M -4 -4 L 4 4 M 4 -4 L -4 4","transform":section.transform}})]):_c('path',{style:(_vm.arrowStyle),attrs:{"d":"M -1 -1 L 0 1 L 1 -1 z","transform":section.transform}})])}),0)}
var FlowchartLinkvue_type_template_id_796da41e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowchartLink.vue?vue&type=template&id=796da41e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartLink.vue?vue&type=script&lang=js&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FlowchartLinkvue_type_script_lang_js_ = ({
  name: 'FlowchartLink',
  props: {
    id: Number,
    color: String,
    // [[segment1startX, segment1startY, segment1endX, segment1endY], ...]
    segments: Array,
    options: {
      type: Object,
      default: function _default() {
        return {
          scale: 1,
          themeColor: '',
          labelColor: '',
          linkWidth: 2.73205,
          canDelete: true
        };
      }
    }
  },
  data: function data() {
    return {
      show: {
        delete: false
      }
    };
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('linkClick');
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.id) {
        if (this.options.canDelete) {
          this.show.delete = true;
        }

        this.$emit('linkMouseEnter');
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.id) {
        if (this.options.canDelete) {
          this.show.delete = false;
        }

        this.$emit('linkMouseLeave');
      }
    },
    deleteLink: function deleteLink() {
      this.$emit('deleteLink');
    }
  },
  computed: {
    sections: function sections() {
      var _this = this;

      return this.segments.map(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 4),
            x0 = _ref2[0],
            y0 = _ref2[1],
            x3 = _ref2[2],
            y3 = _ref2[3];

        var centerX = (x3 + x0) / 2;
        var centerY = (y3 + y0) / 2;
        var x1 = x0;
        var y1 = y0 + 50;
        var x2 = x3;
        var y2 = y3 - 50;
        var degree = -Math.atan2(x3 + x2 - x1 - x0, y3 + y2 - y1 - y0) * 180 / Math.PI;

        if (degree < 0) {
          degree += 360;
        }

        var path = "M ".concat(x0, ", ").concat(y0, " C ").concat(x1, ", ").concat(y1, ", ").concat(x2, ", ").concat(y2, ", ").concat(x3, ", ").concat(y3);
        var transform = "translate(".concat(centerX, ", ").concat(centerY, ") rotate(").concat(degree, ") scale(").concat(_this.options.scale, ")");
        return {
          key: index,
          path: path,
          transform: transform
        };
      });
    },
    pathStyle: function pathStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: this.options.linkWidth * this.options.scale,
        fill: 'none'
      };
    },
    deleteStyle: function deleteStyle() {
      return {
        stroke: this.options.labelColor,
        strokeWidth: 0.8 * this.options.linkWidth,
        fill: 'none'
      };
    },
    arrowStyle: function arrowStyle() {
      return {
        stroke: this.color || this.options.themeColor,
        strokeWidth: 2 * this.options.linkWidth,
        fill: 'none'
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/FlowchartLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowchartLinkvue_type_script_lang_js_ = (FlowchartLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FlowchartLink.vue?vue&type=style&index=0&id=796da41e&scoped=true&lang=scss&
var FlowchartLinkvue_type_style_index_0_id_796da41e_scoped_true_lang_scss_ = __webpack_require__("7b97");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/FlowchartLink.vue






/* normalize component */

var component = normalizeComponent(
  components_FlowchartLinkvue_type_script_lang_js_,
  FlowchartLinkvue_type_template_id_796da41e_scoped_true_render,
  FlowchartLinkvue_type_template_id_796da41e_scoped_true_staticRenderFns,
  false,
  null,
  "796da41e",
  null
  
)

/* harmony default export */ var FlowchartLink = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"322ea0ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartNode.vue?vue&type=template&id=16321d16&scoped=true&
var FlowchartNodevue_type_template_id_16321d16_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowchart-node",class:[{selected: _vm.isSelected}, _vm.options.orientation],style:(_vm.nodeStyle),on:{"mousedown":function($event){$event.preventDefault();return _vm.handleMousedown($event)},"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave}},[_c('div',{staticClass:"node-port node-input",on:{"mousedown":_vm.inputMouseDown,"mouseup":function($event){$event.preventDefault();return _vm.inputMouseUp($event)},"mousemove":_vm.inputMouseMove}}),_c('div',{staticClass:"node-main"},[_c('div',{staticClass:"node-type",domProps:{"textContent":_vm._s(_vm.type)}}),_c('div',{staticClass:"node-label",domProps:{"textContent":_vm._s(_vm.label)}})]),_c('div',{staticClass:"node-port node-output",on:{"mousedown":function($event){$event.preventDefault();return _vm.outputMouseDown($event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show.delete),expression:"show.delete"}],staticClass:"node-delete"},[_vm._v("×")])])}
var FlowchartNodevue_type_template_id_16321d16_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowchartNode.vue?vue&type=template&id=16321d16&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowchartNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FlowchartNodevue_type_script_lang_js_ = ({
  name: 'FlowchartNode',
  props: {
    id: {
      default: 1000
    },
    x: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return typeof val === 'number';
      }
    },
    y: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return typeof val === 'number';
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
      default: function _default() {
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
          canDelete: true
        };
      }
    }
  },
  data: function data() {
    return {
      show: {
        delete: false
      }
    };
  },
  computed: {
    isSelected: function isSelected() {
      return this.options.selected.includes(this.id);
    },
    nodeStyle: function nodeStyle() {
      var style = {
        top: this.options.centerY + this.y * this.options.scale + 'px',
        left: this.options.centerX + this.x * this.options.scale + 'px',
        transform: "scale(".concat(this.options.scale, ")"),
        width: this.options.width + 'px',
        height: this.options.height + 'px',
        '--theme-color': this.options.themeColor,
        '--node-bgcolor': this.options.nodeBgColor,
        '--type-color': this.options.typeColor,
        '--label-color': this.options.labelColor
      };

      if (this.borderColor && !this.isSelected) {
        style['box-shadow'] = "0 0 0 2px ".concat(this.borderColor);
      }

      return style;
    }
  },
  methods: {
    handleMousedown: function handleMousedown(e) {
      var target = e.target || e.srcElement;

      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.options.canDelete) {
        this.show.delete = true;
      }

      this.$emit('nodeMouseEnter');
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.options.canDelete) {
        this.show.delete = false;
      }

      this.$emit('nodeMouseLeave');
    },
    outputMouseDown: function outputMouseDown() {
      this.$emit('linkingStart');
    },
    inputMouseDown: function inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp: function inputMouseUp() {
      this.$emit('linkingStop');
    },
    inputMouseMove: function inputMouseMove() {
      this.$emit('tryLinking');
    }
  }
});
// CONCATENATED MODULE: ./src/components/FlowchartNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlowchartNodevue_type_script_lang_js_ = (FlowchartNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FlowchartNode.vue?vue&type=style&index=0&id=16321d16&scoped=true&lang=scss&
var FlowchartNodevue_type_style_index_0_id_16321d16_scoped_true_lang_scss_ = __webpack_require__("f579");

// CONCATENATED MODULE: ./src/components/FlowchartNode.vue






/* normalize component */

var FlowchartNode_component = normalizeComponent(
  components_FlowchartNodevue_type_script_lang_js_,
  FlowchartNodevue_type_template_id_16321d16_scoped_true_render,
  FlowchartNodevue_type_template_id_16321d16_scoped_true_staticRenderFns,
  false,
  null,
  "16321d16",
  null
  
)

/* harmony default export */ var FlowchartNode = (FlowchartNode_component.exports);
// CONCATENATED MODULE: ./src/assets/utilty/position.js
/**
 * @param element {HTMLElement}
 * @return {{top: number, left: number}}
 */
function getOffsetRect(element) {
  var box = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset;
  var scrollLeft = window.pageXOffset;
  var top = box.top + scrollTop;
  var left = box.left + scrollLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}
/**
 * @param event {MouseEvent}
 * @param element {HTMLElement}
 * @return {[number, number]}
 */


function getMousePosition(element, event) {
  var mouseX = event.pageX || event.clientX + document.documentElement.scrollLeft;
  var mouseY = event.pageY || event.clientY + document.documentElement.scrollTop;
  var offset = getOffsetRect(element);
  var x = mouseX - offset.left;
  var y = mouseY - offset.top;
  return [x, y];
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightFlowchart.vue?vue&type=script&lang=js&
function LightFlowchartvue_type_script_lang_js_slicedToArray(arr, i) { return LightFlowchartvue_type_script_lang_js_arrayWithHoles(arr) || LightFlowchartvue_type_script_lang_js_iterableToArrayLimit(arr, i) || LightFlowchartvue_type_script_lang_js_nonIterableRest(); }

function LightFlowchartvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function LightFlowchartvue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LightFlowchartvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var defaultWidth = 80;
var defaultHeight = 80;
var defaultThemeColor = '#ff8855';
var defaultNodeBgColor = '#fff';
var defaultTypeColor = '#fff';
var defaultLabelColor = '#2c3e50';
var defaultLinkWidth = 2.73205;
var autoScrollStep = 8;
var autoScrollTimeout = 100;
/* harmony default export */ var LightFlowchartvue_type_script_lang_js_ = ({
  name: 'VueLightFlowchart',
  props: {
    scene: {
      type: Object,
      default: function _default() {
        return {
          centerX: 1024,
          centerY: 140,
          scale: 1,
          nodes: [],
          links: [],
          orientation: 'vert',
          showDeleteNode: true,
          showDeleteLink: true,
          styles: {
            nodeWidth: defaultWidth,
            nodeHeight: defaultHeight,
            themeColor: defaultThemeColor,
            nodeBgColor: defaultNodeBgColor,
            typeColor: defaultTypeColor,
            labelColor: defaultLabelColor,
            linkWidth: defaultLinkWidth
          }
        };
      }
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data: function data() {
    return {
      action: {
        linking: false,
        dragging: false,
        scrolling: false,
        selected: []
      },
      mouse: {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0
      },
      draggingLink: null,
      rootDivOffset: {
        top: 0,
        left: 0
      }
    };
  },
  components: {
    FlowchartLink: FlowchartLink,
    FlowchartNode: FlowchartNode
  },
  watch: {
    'scene.nodes': {
      handler: 'setNodes',
      immediate: true
    }
  },
  computed: {
    scale: function scale() {
      return this.scene.scale || 1;
    },
    orientation: function orientation() {
      return this.scene.orientation || 'vert';
    },
    styles: function styles() {
      return _objectSpread({}, {
        nodeWidth: defaultWidth,
        nodeHeight: defaultHeight,
        themeColor: defaultThemeColor,
        nodeBgColor: defaultNodeBgColor,
        typeColor: defaultTypeColor,
        labelColor: defaultLabelColor,
        linkWidth: defaultLinkWidth
      }, {}, this.scene.styles);
    },
    nodeOptions: function nodeOptions() {
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
        canDelete: this.scene.showDeleteNode
      };
    },
    linkOptions: function linkOptions() {
      return {
        scale: this.scale,
        themeColor: this.styles.themeColor,
        labelColor: this.styles.labelColor,
        linkWidth: this.styles.linkWidth,
        canDelete: this.scene.showDeleteLink
      };
    },
    lines: function lines() {
      var _this = this;

      var lines = this.scene.links.map(function (_ref) {
        var nodes = _ref.nodes,
            id = _ref.id,
            color = _ref.color;
        return {
          segments: _this.getSegments(nodes),
          id: id,
          color: color
        };
      });

      if (this.draggingLink) {
        var segments = [];
        var lastNode = this.findNode(this.draggingLink.lastNodeId);
        var nodes = this.draggingLink.nodes;

        if (nodes.length > 0) {
          segments.push.apply(segments, _toConsumableArray(this.getSegments(nodes)));
          var fromNode = this.findNode(nodes[nodes.length - 1]);

          var _this$getPortPosition = this.getPortPosition(fromNode, 'output'),
              _this$getPortPosition2 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition, 2),
              _sx = _this$getPortPosition2[0],
              _sy = _this$getPortPosition2[1];

          var _this$getPortPosition3 = this.getPortPosition(lastNode, 'input'),
              _this$getPortPosition4 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition3, 2),
              ex = _this$getPortPosition4[0],
              ey = _this$getPortPosition4[1];

          segments.push([_sx, _sy, ex, ey]);
        }

        var _this$getPortPosition5 = this.getPortPosition(lastNode, 'output'),
            _this$getPortPosition6 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition5, 2),
            sx = _this$getPortPosition6[0],
            sy = _this$getPortPosition6[1];

        segments.push([sx, sy, this.draggingLink.mx, this.draggingLink.my]);
        lines.push({
          segments: segments
        });
      }

      return lines;
    }
  },
  mounted: function mounted() {
    this.rootDivOffset.top = this.$el ? this.$el.offsetTop : 0;
    this.rootDivOffset.left = this.$el ? this.$el.offsetLeft : 0;
    this.select = {
      lastClickedId: null,
      isCtrlClick: false,
      isClickedSelected: false,
      wasDragging: false
    };
  },
  methods: {
    setNodes: function setNodes() {
      var _this2 = this;

      this.nodes = new Map();
      this.scene.nodes.forEach(function (node) {
        return _this2.nodes[node.id] = node;
      });
    },
    findNode: function findNode(id) {
      return this.nodes[id];
    },
    getSegments: function getSegments(nodes) {
      var segments = [];
      var fromNode = this.findNode(nodes[0]);

      for (var i = 1; i < nodes.length; i++) {
        var toNode = this.findNode(nodes[i]);

        var _this$getPortPosition7 = this.getPortPosition(fromNode, 'output'),
            _this$getPortPosition8 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition7, 2),
            sx = _this$getPortPosition8[0],
            sy = _this$getPortPosition8[1];

        var _this$getPortPosition9 = this.getPortPosition(toNode, 'input'),
            _this$getPortPosition10 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition9, 2),
            ex = _this$getPortPosition10[0],
            ey = _this$getPortPosition10[1];

        segments.push([sx, sy, ex, ey]);
        fromNode = toNode;
      }

      return segments;
    },
    getPortPosition: function getPortPosition(node, type) {
      var orientation = this.orientation;
      var scale = this.scale;
      var x = this.scene.centerX + node.x * scale;
      var y = this.scene.centerY + node.y * scale;
      var width = this.styles.nodeWidth;
      var height = this.styles.nodeHeight;

      if (orientation === 'vert') {
        var left = x + width / 2 * scale;

        if (type === 'input') {
          return [left, y];
        }

        return [left, y + height * scale];
      }

      var top = y + height / 2 * scale;

      if (type === 'input') {
        return [x, top];
      }

      return [x + width * scale, top];
    },
    linkingStart: function linkingStart(id) {
      var node = this.findNode(id);

      var _this$getPortPosition11 = this.getPortPosition(node, 'output'),
          _this$getPortPosition12 = LightFlowchartvue_type_script_lang_js_slicedToArray(_this$getPortPosition11, 2),
          mx = _this$getPortPosition12[0],
          my = _this$getPortPosition12[1];

      this.action.linking = true;
      this.draggingLink = {
        nodes: [],
        lastNodeId: id,
        mx: mx,
        my: my
      };
    },
    tryAddNodeToLink: function tryAddNodeToLink(id) {
      var draggingLink = this.draggingLink;

      if (!draggingLink) {
        return;
      }

      if (draggingLink.lastNodeId === id || this.isLinkIntersections(draggingLink, id)) {
        return;
      }

      draggingLink.nodes.push(draggingLink.lastNodeId);
      draggingLink.lastNodeId = id;
    },
    linkingStop: function linkingStop(id) {
      var draggingLink = this.draggingLink;

      if (!draggingLink) {
        return;
      }

      this.draggingLink = null;

      if (id !== draggingLink.lastNodeId) {
        return;
      }

      if (this.isLinkIntersections(draggingLink, id)) {
        return;
      }

      draggingLink.nodes.push(id);

      if (this.isLinkExists(draggingLink)) {
        return;
      }

      var maxID = Math.max.apply(Math, [0].concat(_toConsumableArray(this.scene.links.map(function (link) {
        return link.id;
      }))));
      var newLink = {
        id: maxID + 1,
        nodes: draggingLink.nodes
      };
      this.scene.links.push(newLink);
      this.$emit('linkAdded', newLink);
    },
    isLinkIntersections: function isLinkIntersections(link, id) {
      return link.nodes.some(function (node) {
        return node === id;
      });
    },
    isLinkExists: function isLinkExists(link) {
      return this.scene.links.some(function (_ref2) {
        var nodes = _ref2.nodes;
        return link.nodes.length === nodes.length && link.nodes.every(function (nodeId, index) {
          return nodeId === nodes[index];
        });
      });
    },
    linkClick: function linkClick(id) {
      this.$emit('linkClick', this.findLink(id));
    },
    linkDelete: function linkDelete(id) {
      var link = this.findLink(id);

      if (link) {
        this.scene.links = this.scene.links.filter(function (item) {
          return item.id !== id;
        });
        this.$emit('linkBreak', link);
      }
    },
    linkMouseEnter: function linkMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseEnter', this.findLink(id));
      }
    },
    linkMouseLeave: function linkMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('linkMouseLeave', this.findLink(id));
      }
    },
    findLink: function findLink(id) {
      return this.scene.links.find(function (item) {
        return item.id === id;
      });
    },
    nodeSelected: function nodeSelected(id, e) {
      this.select = {
        lastClickedId: id,
        isCtrlClick: e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey,
        isClickedSelected: this.action.selected.includes(id),
        wasDragging: false
      };
      this.action.dragging = true;
      this.selectNodeOnDown(id);
      this.$emit('nodeClick', id);

      var _getMousePosition = getMousePosition(this.$el, e);

      var _getMousePosition2 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition, 2);

      this.mouse.lastX = _getMousePosition2[0];
      this.mouse.lastY = _getMousePosition2[1];
    },
    handleMove: function handleMove(e) {
      if (this.action.linking) {
        var _getMousePosition3 = getMousePosition(this.$el, e);

        var _getMousePosition4 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition3, 2);

        this.draggingLink.mx = _getMousePosition4[0];
        this.draggingLink.my = _getMousePosition4[1];
        this.mouse.lastEvent = e;
        this.startAutoScroll();
      } else if (this.action.dragging) {
        var _getMousePosition5 = getMousePosition(this.$el, e),
            _getMousePosition6 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition5, 2),
            mouseX = _getMousePosition6[0],
            mouseY = _getMousePosition6[1];

        var diffX = mouseX - this.mouse.lastX;
        var diffY = mouseY - this.mouse.lastY;
        this.mouse.lastX = mouseX;
        this.mouse.lastY = mouseY;
        this.mouse.lastEvent = e;
        this.moveSelectedNodes(diffX, diffY);
        this.select.wasDragging = true;
        this.startAutoScroll();
      } else if (this.action.scrolling) {
        var _getMousePosition7 = getMousePosition(this.$el, e),
            _getMousePosition8 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition7, 2),
            _mouseX = _getMousePosition8[0],
            _mouseY = _getMousePosition8[1];

        var _diffX = _mouseX - this.mouse.lastX;

        var _diffY = _mouseY - this.mouse.lastY;

        this.mouse.lastX = _mouseX;
        this.mouse.lastY = _mouseY;
        this.scene.centerX += _diffX;
        this.scene.centerY += _diffY;
      }
    },
    handleDown: function handleDown(e) {
      var target = e.target || e.srcElement;

      if ((target === this.$el || target.matches('svg, svg *')) && e.which === 1) {
        this.action.scrolling = true;

        var _getMousePosition9 = getMousePosition(this.$el, e);

        var _getMousePosition10 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition9, 2);

        this.mouse.lastX = _getMousePosition10[0];
        this.mouse.lastY = _getMousePosition10[1];
        this.action.selected = [];
      }

      this.$emit('canvasClick', e);
    },
    handleUp: function handleUp(e) {
      var target = e.target || e.srcElement;

      if (this.$el.contains(target)) {
        if (typeof target.className !== 'string' || target.className.indexOf('node-input') < 0) {
          this.draggingLink = null;
        }

        if (this.scene.showDeleteNode && typeof target.className === 'string' && target.className.indexOf('node-delete') > -1) {
          this.nodeDelete(this.select.lastClickedId);
        }
      }

      this.selectNodeOnUp();
      this.action.linking = false;
      this.action.dragging = false;
      this.action.scrolling = false;
      this.stopAutoScroll();
    },
    selectNodeOnDown: function selectNodeOnDown(id) {
      var _this$select = this.select,
          isClickedSelected = _this$select.isClickedSelected,
          isCtrlClick = _this$select.isCtrlClick;

      if (isClickedSelected) {
        return;
      }

      if (isCtrlClick) {
        this.action.selected.push(id);
      } else {
        this.action.selected = [id];
      }
    },
    selectNodeOnUp: function selectNodeOnUp() {
      var _this$select2 = this.select,
          wasDragging = _this$select2.wasDragging,
          isClickedSelected = _this$select2.isClickedSelected,
          isCtrlClick = _this$select2.isCtrlClick,
          lastClickedId = _this$select2.lastClickedId;

      if (wasDragging) {
        return;
      }

      if (isClickedSelected) {
        if (isCtrlClick) {
          this.action.selected = this.action.selected.filter(function (item) {
            return item !== lastClickedId;
          });
        } else {
          this.action.selected = [lastClickedId];
        }
      }
    },
    moveSelectedNodes: function moveSelectedNodes(dx, dy) {
      var _this3 = this;

      this.scene.nodes.forEach(function (node, index) {
        if (!_this3.action.selected.includes(node.id)) {
          return;
        }

        var left = node.x + dx / _this3.scale;
        var top = node.y + dy / _this3.scale;

        _this3.$set(_this3.scene.nodes, index, Object.assign(node, {
          x: left,
          y: top
        }));
      });
    },
    startAutoScroll: function startAutoScroll() {
      if (!this.autoScrollId) {
        this.autoScrollId = setInterval(this.autoScroll.bind(this), autoScrollTimeout);
      }
    },
    stopAutoScroll: function stopAutoScroll() {
      if (this.autoScrollId) {
        clearInterval(this.autoScrollId);
        this.autoScrollId = null;
      }
    },
    autoScroll: function autoScroll() {
      var _getMousePosition11 = getMousePosition(this.$el, this.mouse.lastEvent),
          _getMousePosition12 = LightFlowchartvue_type_script_lang_js_slicedToArray(_getMousePosition11, 2),
          mouseX = _getMousePosition12[0],
          mouseY = _getMousePosition12[1];

      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          width = _this$$el$getBounding.width,
          height = _this$$el$getBounding.height;

      var widthThreshold = this.styles.nodeWidth / 2;
      var heightThreshold = this.styles.nodeHeight / 2;
      var diffX = 0;
      var diffY = 0;

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
        this.moveSelectedNodes(diffX, diffY);
        this.scene.centerX -= diffX;
        this.scene.centerY -= diffY;
      }
    },
    nodeDelete: function nodeDelete(id) {
      this.scene.nodes = this.scene.nodes.filter(function (node) {
        return node.id !== id;
      });
      this.scene.links = this.scene.links.filter(function (link) {
        return !link.nodes.some(function (nodeId) {
          return nodeId === id;
        });
      });
      this.$emit('nodeDelete', id);
    },
    nodeMouseEnter: function nodeMouseEnter(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseEnter', id);
      }
    },
    nodeMouseLeave: function nodeMouseLeave(id) {
      if (!this.action.dragging) {
        this.$emit('nodeMouseLeave', id);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/LightFlowchart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LightFlowchartvue_type_script_lang_js_ = (LightFlowchartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LightFlowchart.vue?vue&type=style&index=0&id=7f444b57&scoped=true&lang=scss&
var LightFlowchartvue_type_style_index_0_id_7f444b57_scoped_true_lang_scss_ = __webpack_require__("2aee");

// CONCATENATED MODULE: ./src/components/LightFlowchart.vue






/* normalize component */

var LightFlowchart_component = normalizeComponent(
  components_LightFlowchartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7f444b57",
  null
  
)

/* harmony default export */ var LightFlowchart = (LightFlowchart_component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (LightFlowchart);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=vue-light-flowchart.common.js.map