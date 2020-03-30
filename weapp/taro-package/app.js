require("./runtime"),require("./common"),require("./vendors"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[3],[,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=r(0),i=_interopRequireDefault(o),u=r(9),a=_interopRequireDefault(r(18));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(25);var c=(0,a.default)();(0,u.setStore)(c),u.ReduxContext.Provider&&(u.ReduxContext.Provider({"store":c}),u.ReduxContext.Provider({"store":c}));var f=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_App,o.Component),n(_App,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"_createData","value":function _createData(){}}]),_App);function _App(){var e,t,r;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_App);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=_possibleConstructorReturn(this,(e=_App.__proto__||Object.getPrototypeOf(_App)).call.apply(e,[this].concat(o)))).config={"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}},_possibleConstructorReturn(r,t)}t.default=f,App(r(0).default.createApp(f)),i.default.initPxTransform({"designWidth":750,"deviceRatio":{"640":1.17,"750":1,"828":.905}})},,,function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t.default=o.a},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.createStore=t.compose=t.combineReducers=t.bindActionCreators=t.applyMiddleware=t.__DO_NOT_USE__ActionTypes=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(19));function U(){return Math.random().toString(36).substring(7).split("").join(".")}var d={"INIT":"@@redux/INIT"+U(),"REPLACE":"@@redux/REPLACE"+U(),"PROBE_UNKNOWN_ACTION":function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+U()}};function isPlainObject(e){if("object"===(void 0===e?"undefined":f(e))&&null!==e){for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}}function bindActionCreator(e,t){return function(){return t(e.apply(this,arguments))}}function ownKeys(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function _objectSpread2(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(i,!0).forEach(function(e){var t,r,n;t=o,n=i[r=e],r in t?Object.defineProperty(t,r,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):ownKeys(i).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function compose(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.__DO_NOT_USE__ActionTypes=d,t.applyMiddleware=function applyMiddleware(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(o){return function(){var e=o.apply(void 0,arguments),t=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={"getState":e.getState,"dispatch":function dispatch(){return t.apply(void 0,arguments)}},n=i.map(function(e){return e(r)});return _objectSpread2({},e,{"dispatch":t=compose.apply(void 0,n)(e.dispatch)})}}},t.bindActionCreators=function bindActionCreators(e,t){if("function"==typeof e)return bindActionCreator(e,t);if("object"!==(void 0===e?"undefined":f(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":f(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=bindActionCreator(o,t))}return r},t.combineReducers=function combineReducers(e){for(var t=Object.keys(e),p={},r=0;r<t.length;r++){var n=t[r];0,"function"==typeof e[n]&&(p[n]=e[n])}var b,y=Object.keys(p);try{!function assertReducerShape(r){Object.keys(r).forEach(function(e){var t=r[e];if(void 0===t(void 0,{"type":d.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{"type":d.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+d.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(p)}catch(e){b=e}return function combination(e,t){if(void 0===e&&(e={}),b)throw b;for(var r,n,o,i=!1,u={},a=0;a<y.length;a++){var c=y[a],f=p[c],s=e[c],d=f(s,t);if(void 0===d){var l=(r=c,"Given "+((o=(n=t)&&n.type)&&'action "'+String(o)+'"'||"an action")+', reducer "'+r+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');throw new Error(l)}u[c]=d,i=i||d!==s}return(i=i||y.length!==Object.keys(e).length)?u:e}},t.compose=compose,t.createStore=function createStore(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(createStore)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,u=[],a=u,c=!1;function ensureCanMutateNextListeners(){a===u&&(a=u.slice())}function getState(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function subscribe(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var r=!0;return ensureCanMutateNextListeners(),a.push(t),function unsubscribe(){if(r){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");r=!1,ensureCanMutateNextListeners();var e=a.indexOf(t);a.splice(e,1),u=null}}}function dispatch(e){if(!isPlainObject(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,i=o(i,e)}finally{c=!1}for(var t=u=a,r=0;r<t.length;r++)(0,t[r])();return e}return dispatch({"type":d.INIT}),(n={"dispatch":dispatch,"subscribe":subscribe,"getState":getState,"replaceReducer":function replaceReducer(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,dispatch({"type":d.REPLACE})}})[s.default]=function observable(){var e,t=subscribe;return(e={"subscribe":function subscribe(e){if("object"!==(void 0===e?"undefined":f(e))||null===e)throw new TypeError("Expected the observer to be an object.");function observeState(){e.next&&e.next(getState())}return observeState(),{"unsubscribe":t(observeState)}}})[s.default]=function(){return this},e},n}},,,,function(e,t,r){"use strict";r.r(t);var n=r(5);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o)},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function configStore(){return(0,o.createStore)(u.default,f)};var o=r(10),i=_interopRequireDefault(r(22)),u=_interopRequireDefault(r(23));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a="object"===("undefined"==typeof window?"undefined":n(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.compose,c=[i.default];var f=a(o.applyMiddleware.apply(void 0,c))},function(e,i,u){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{"value":!0});var r,n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(u(21));r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:t;var o=(0,n.default)(r);i.default=o}).call(this,u(1),u(20)(e))},function(e,t,r){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{"enumerable":!0,"get":function get(){return e.l}}),Object.defineProperty(e,"id",{"enumerable":!0,"get":function get(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function symbolObservablePonyfill(e){var t,r=e.Symbol;"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable";return t}},function(e,t,r){"use strict";function createThunkMiddleware(o){return function(e){var r=e.dispatch,n=e.getState;return function(t){return function(e){return"function"==typeof e?e(r,n,o):t(e)}}}}Object.defineProperty(t,"__esModule",{"value":!0});var n=createThunkMiddleware();n.withExtraArgument=createThunkMiddleware,t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=r(10),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(24));t.default=(0,n.combineReducers)({"counter":o.default})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function counter(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case o.ADD:return n({},e,{"num":e.num+1});case o.MINUS:return n({},e,{"num":e.num-1});default:return e}};var o=r(11),i={"num":0}},function(e,t,r){}],[[14,0,1,2]]]);