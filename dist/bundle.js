webpackJsonp([4],[,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){for(var t="",n=[],r=[],a=void 0,u=0,i=/:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;a=i.exec(e);)a.index!==u&&(r.push(e.slice(u,a.index)),t+=o(e.slice(u,a.index))),a[1]?(t+="([^/]+)",n.push(a[1])):"**"===a[0]?(t+="(.*)",n.push("splat")):"*"===a[0]?(t+="(.*?)",n.push("splat")):"("===a[0]?t+="(?:":")"===a[0]?t+=")?":"\\("===a[0]?t+="\\(":"\\)"===a[0]&&(t+="\\)"),r.push(a[0]),u=i.lastIndex;return u!==e.length&&(r.push(e.slice(u,e.length)),t+=o(e.slice(u,e.length))),{pattern:e,regexpSource:t,paramNames:n,tokens:r}}function u(e){return p[e]||(p[e]=a(e)),p[e]}function i(e,t){"/"!==e.charAt(0)&&(e="/"+e);var n=u(e),r=n.regexpSource,o=n.paramNames,a=n.tokens;"/"!==e.charAt(e.length-1)&&(r+="/?"),"*"===a[a.length-1]&&(r+="$");var i=t.match(new RegExp("^"+r,"i"));if(null==i)return null;var l=i[0],c=t.substr(l.length);if(c){if("/"!==l.charAt(l.length-1))return null;c="/"+c}return{remainingPathname:c,paramNames:o,paramValues:i.slice(1).map(function(e){return e&&decodeURIComponent(e)})}}function l(e){return u(e).paramNames}function c(e,t){var n=i(e,t);if(!n)return null;var r=n.paramNames,o=n.paramValues,a={};return r.forEach(function(e,t){a[e]=o[t]}),a}function s(e,t){t=t||{};for(var n=u(e),r=n.tokens,o=0,a="",i=0,l=[],c=void 0,s=void 0,f=void 0,p=0,h=r.length;p<h;++p)if("*"===(c=r[p])||"**"===c)f=Array.isArray(t.splat)?t.splat[i++]:t.splat,null!=f||o>0||(0,d.default)(!1),null!=f&&(a+=encodeURI(f));else if("("===c)l[o]="",o+=1;else if(")"===c){var m=l.pop();o-=1,o?l[o-1]+=m:a+=m}else if("\\("===c)a+="(";else if("\\)"===c)a+=")";else if(":"===c.charAt(0))if(s=c.substring(1),f=t[s],null!=f||o>0||(0,d.default)(!1),null==f){if(o){l[o-1]="";for(var v=r.indexOf(c),y=r.slice(v,r.length),g=-1,b=0;b<y.length;b++)if(")"==y[b]){g=b;break}g>0||(0,d.default)(!1),p=v+g-1}}else o?l[o-1]+=encodeURIComponent(f):a+=encodeURIComponent(f);else o?l[o-1]+=c:a+=c;return o<=0||(0,d.default)(!1),a.replace(/\/+/g,"/")}t.__esModule=!0,t.compilePattern=u,t.matchPattern=i,t.getParamNames=l,t.getParams=c,t.formatPattern=s;var f=n(1),d=r(f),p=Object.create(null)},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t="";t+=Number(e)<=50?"You only need ":"You will nead at least ",t+=e+"% on your final to get a "+this.state.requiredGrade+"% overall.";var n=Number(e);return n>100&&(t+=" May the force be with you!"),n<=100&&n>=90&&(t+=" You can do it!"),n<90&&n>=70&&(t+=" You got this in the bag!"),n<70&&n>=0&&(t+=" What's the point of studying honestly?"),n<0&&(t+=" Just stay in bed at this point!"),t}function c(){(0,g.default)("Ugh Oh!",this.errorStringBuilder(),"warning")}function s(){(0,g.default)("You can do it!",this.calculatorStringBuilder(this.calculateGrade()),null)}function f(){var e=this;return h.default.createElement("div",{className:"container col-md-12",style:{marginTop:"15vh",paddingLeft:"0",paddingRight:"0"}},h.default.createElement(v.default,{title:"Bare Minimum | Final Grade Calculator",meta:[{name:"description",content:"Final grade calculator to help you pass your classes!"}]}),h.default.createElement("div",{className:"well infobox"},h.default.createElement("div",{style:{marginTop:10}},h.default.createElement("h3",{className:"text-center",style:{marginTop:15,marginBottom:15,fontSize:"5vw 5h",color:"#2e2d2d"}},"Final Grade Calculator"),h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},h.default.createElement("label",{htmlFor:"currentGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",paddingLeft:0,fontSize:"1.3vw 2vh",lineHeight:"2.2vh",paddingTop:".8vh",fontWeight:400}},"Your current grade:"),h.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},h.default.createElement("input",{className:"form-control",type:"number",value:this.state.currentGrade,onChange:function(t){return e.onInputChange(t,"currentGrade")},placeholder:"92.4",id:"currentGrade"})),h.default.createElement("label",{className:"col-md-2",htmlFor:"currentGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"%.")),h.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},h.default.createElement("label",{htmlFor:"requiredGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh",fontWeight:400}},"You want a:"),h.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},h.default.createElement("input",{className:"form-control",type:"number",value:this.state.requiredGrade,onChange:function(t){return e.onInputChange(t,"requiredGrade")},placeholder:"90",id:"requiredGrade"})),h.default.createElement("label",{htmlFor:"requiredGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"% in the class.")),h.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:"10px"}},h.default.createElement("label",{htmlFor:"final",className:"col-xs-5 col-form-label semi-bold text-left",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh",fontWeight:400}},"Final's worth:"),h.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},h.default.createElement("input",{className:"form-control",type:"number",value:this.state.finalWeight,onChange:function(t){return e.onInputChange(t,"finalWeight")},placeholder:"10",id:"final"})),h.default.createElement("label",{htmlFor:"final",style:{paddingTop:"10px",paddingLeft:4,fontWeight:400}},"% of your grade.")),h.default.createElement("div",{className:"row",style:{marginLeft:"4%",marginRight:"4%",textAlign:"center"}},h.default.createElement("a",{className:"btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3",onClick:this.onCalculate,style:{backgroundColor:"#009688"}},"Calculate"))))))}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(0),h=r(p),m=n(16),v=r(m),y=n(56),g=r(y),b=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputChange=function(e,t){n.setState(o({},t,e.target.value))},n.onCalculate=function(){var e=n.state,t=e.currentGrade,r=e.finalWeight,o=e.requiredGrade;""===t||""===r||""===o||Number(r)>100?n.missingFormElements():n.noMissingElements()},n.calculateGrade=function(){var e=Number(n.state.requiredGrade)/100,t=Number(n.state.finalWeight)/100;return((e-(1-t)*(Number(n.state.currentGrade)/100))/t*100).toFixed(2)},n.errorStringBuilder=function(){var e=n.state,t=e.currentGrade,r=e.finalWeight,o=e.requiredGrade;return""===t&&""!==r&&""!==o?"Please input your current grade.":""!==t&&""===r&&""!==o?"Please input your final percentage.":""!==t&&""!==r&&""===o?"Please input your target goal grade.":""===t&&""===o&&""!==r?"Please input your current grade and target goal grade.":""===t&&""!==o&&""===r?"Please input your current grade and final percentage.":""!==t&&""===o&&""===r?"Please input your target goal grade and final percentage":""===t&&""===r&&""===o?"Please input your current grade, target goal grade, and final percentage.":Number(r)>100?"Your final percentage can't be more than 100%":""},n.state={currentGrade:"",finalWeight:"",requiredGrade:""},n}return i(t,e),d(t,[{key:"calculatorStringBuilder",value:l},{key:"missingFormElements",value:c},{key:"noMissingElements",value:s},{key:"render",value:f}]),t}(h.default.Component);t.default=b},,,,,function(e,t,n){"use strict";function r(e,t,n){function r(){if(u=!0,i)return void(c=[].concat(Array.prototype.slice.call(arguments)));n.apply(this,arguments)}function o(){if(!u&&(l=!0,!i)){for(i=!0;!u&&a<e&&l;)l=!1,t.call(this,a++,o,r);if(i=!1,u)return void n.apply(this,c);a>=e&&l&&(u=!0,n())}}var a=0,u=!1,i=!1,l=!1,c=void 0;o()}function o(e,t,n){function r(e,t,r){u||(t?(u=!0,n(t)):(a[e]=r,(u=++i===o)&&n(null,a)))}var o=e.length,a=[];if(0===o)return n(null,a);var u=!1,i=0;e.forEach(function(e,n){t(e,n,function(e,t){r(n,e,t)})})}t.__esModule=!0,t.loopAsync=r,t.mapAsync=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return null==e||d.default.isValidElement(e)}function a(e){return o(e)||Array.isArray(e)&&e.every(o)}function u(e,t){return s({},e,t)}function i(e){var t=e.type,n=u(t.defaultProps,e.props);if(n.children){var r=l(n.children,n);r.length&&(n.childRoutes=r),delete n.children}return n}function l(e,t){var n=[];return d.default.Children.forEach(e,function(e){if(d.default.isValidElement(e))if(e.type.createRouteFromReactElement){var r=e.type.createRouteFromReactElement(e,t);r&&n.push(r)}else n.push(i(e))}),n}function c(e){return a(e)?e=l(e):e&&!Array.isArray(e)&&(e=[e]),e}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.isReactChildren=a,t.createRouteFromReactElement=i,t.createRoutesFromReactChildren=l,t.createRoutes=c;var f=n(0),d=r(f)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(t.indexOf("deprecated")!==-1){if(l[t])return;l[t]=!0}t="[react-router] "+t;for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.default.apply(void 0,[e,t].concat(r))}function a(){l={}}t.__esModule=!0,t.default=o,t._resetWarned=a;var u=n(2),i=r(u),l={}},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return"@@contextSubscriber/"+e}function o(e){var t,n,o=r(e),a=o+"/listeners",u=o+"/eventIndex",l=o+"/subscribe";return n={childContextTypes:(t={},t[o]=i.isRequired,t),getChildContext:function(){var e;return e={},e[o]={eventIndex:this[u],subscribe:this[l]},e},componentWillMount:function(){this[a]=[],this[u]=0},componentWillReceiveProps:function(){this[u]++},componentDidUpdate:function(){var e=this;this[a].forEach(function(t){return t(e[u])})}},n[l]=function(e){var t=this;return this[a].push(e),function(){t[a]=t[a].filter(function(t){return t!==e})}},n}function a(e){var t,n,o=r(e),a=o+"/lastRenderedEventIndex",u=o+"/handleContextUpdate",l=o+"/unsubscribe";return n={contextTypes:(t={},t[o]=i,t),getInitialState:function(){var e;return this.context[o]?(e={},e[a]=this.context[o].eventIndex,e):{}},componentDidMount:function(){this.context[o]&&(this[l]=this.context[o].subscribe(this[u]))},componentWillReceiveProps:function(){var e;this.context[o]&&this.setState((e={},e[a]=this.context[o].eventIndex,e))},componentWillUnmount:function(){this[l]&&(this[l](),this[l]=null)}},n[u]=function(e){if(e!==this.state[a]){var t;this.setState((t={},t[a]=e,t))}},n}t.__esModule=!0,t.ContextProvider=o,t.ContextSubscriber=a;var u=n(0),i=u.PropTypes.shape({subscribe:u.PropTypes.func.isRequired,eventIndex:u.PropTypes.number.isRequired})},function(e,t,n){"use strict";function r(e){return e&&"function"==typeof e.then}t.__esModule=!0,t.isPromise=r},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={path:"about",getComponents:function(e,t){n.e(0).then(function(e){t(null,n(57).default)}.bind(null,n)).catch(n.oe)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={path:"grade-calculator",getComponents:function(e,t){Promise.resolve().then(function(e){t(null,n(17).default)}.bind(null,n)).catch(n.oe)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={path:"/gpa-calculator",getComponents:function(e,t){n.e(3).then(function(e){t(null,n(58).default)}.bind(null,n)).catch(n.oe)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={path:"*",getComponents:function(e,t){n.e(2).then(function(e){t(null,n(59).default)}.bind(null,n)).catch(n.oe)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={path:"weighted-grade-calculator",getComponents:function(e,t){n.e(1).then(function(e){t(null,n(60).default)}.bind(null,n)).catch(n.oe)}};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){return s.default.createElement("div",{id:"globalWrapper",className:"globalWrapper"},s.default.createElement(h.default,{path:this.props.location.pathname}),s.default.createElement("div",{className:"container",style:{paddingTop:"2%",width:"100%",margin:"0 auto",paddingLeft:0,paddingRight:0,overflow:"scroll"}},this.props.children||m))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(17),d=r(f);n(66);var p=n(62),h=r(p),m=s.default.createElement(d.default,null),v=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:i}]),t}(c.Component);t.default=v},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),l=n(0),c=r(l),s=n(96),f=r(s),d=n(89),p=n(91),h=r(p),m=n(23),v=n(92),y=n(24),g=(r(y),c.default.PropTypes),b=g.func,_=g.object,E=c.default.createClass({displayName:"Router",propTypes:{history:_,children:d.routes,routes:d.routes,render:b,createElement:b,onError:b,onUpdate:b,matchContext:_},getDefaultProps:function(){return{render:function(e){return c.default.createElement(h.default,e)}}},getInitialState:function(){return{location:null,routes:null,params:null,components:null}},handleError:function(e){if(!this.props.onError)throw e;this.props.onError.call(this,e)},createRouterObject:function(e){var t=this.props.matchContext;if(t)return t.router;var n=this.props.history;return(0,v.createRouterObject)(n,this.transitionManager,e)},createTransitionManager:function(){var e=this.props.matchContext;if(e)return e.transitionManager;var t=this.props.history,n=this.props,r=n.routes,o=n.children;return t.getCurrentLocation||(0,i.default)(!1),(0,f.default)(t,(0,m.createRoutes)(r||o))},componentWillMount:function(){var e=this;this.transitionManager=this.createTransitionManager(),this.router=this.createRouterObject(this.state),this._unlisten=this.transitionManager.listen(function(t,n){t?e.handleError(t):((0,v.assignRouterState)(e.router,n),e.setState(n,e.props.onUpdate))})},componentWillReceiveProps:function(e){},componentWillUnmount:function(){this._unlisten&&this._unlisten()},render:function e(){var t=this.state,n=t.location,r=t.routes,u=t.params,i=t.components,l=this.props,c=l.createElement,e=l.render,s=o(l,["createElement","render"]);return null==n?null:(Object.keys(E.propTypes).forEach(function(e){return delete s[e]}),e(a({},s,{router:this.router,location:n,routes:r,params:u,components:i,createElement:c})))}});t.default=E,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(44),a=r(o),u=n(95),i=r(u);t.default=(0,i.default)(a.default),e.exports=t.default},function(e,t){e.exports={name:"Bare Minimum",short_name:"Bare Minimum",icons:[{src:"./assets/Bm144.png",type:"image/png",sizes:"144x144"},{src:"./assets/Bm192.png",type:"image/png",sizes:"192x192"}],start_url:"/",scope:"/",display:"standalone",orientation:"portrait",background_color:"#009688",theme_color:"#009688"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){(0,u.default)({title:e,text:t,confirmButtonColor:"#009688",confirmButtonClass:"btn btn-danger",animation:"slide-from-top",type:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(31),u=r(a)},,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){return 0===e.button}function u(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function l(e,t){return"function"==typeof e?e(t.location):e}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(0),f=r(s),d=n(1),p=r(d),h=n(90),m=n(41),v=f.default.PropTypes,y=v.bool,g=v.object,b=v.string,_=v.func,E=v.oneOfType,R=f.default.createClass({displayName:"Link",mixins:[(0,m.ContextSubscriber)("router")],contextTypes:{router:h.routerShape},propTypes:{to:E([b,g,_]),query:g,hash:b,state:g,activeStyle:g,activeClassName:b,onlyActiveOnIndex:y.isRequired,onClick:_,target:b},getDefaultProps:function(){return{onlyActiveOnIndex:!1,style:{}}},handleClick:function(e){if(this.props.onClick&&this.props.onClick(e),!e.defaultPrevented){var t=this.context.router;t||(0,p.default)(!1),!u(e)&&a(e)&&(this.props.target||(e.preventDefault(),t.push(l(this.props.to,t))))}},render:function(){var e=this.props,t=e.to,n=e.activeClassName,r=e.activeStyle,a=e.onlyActiveOnIndex,u=o(e,["to","activeClassName","activeStyle","onlyActiveOnIndex"]),s=this.context.router;if(s){if(!t)return f.default.createElement("a",u);var d=l(t,s);u.href=s.createHref(d),(n||null!=r&&!i(r))&&s.isActive(d,a)&&(n&&(u.className?u.className+=" "+n:u.className=n),r&&(u.style=c({},u.style,r)))}return f.default.createElement("a",c({},u,{onClick:this.handleClick}))}});t.default=R,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){var e=this.props.path;return s.default.createElement("nav",{className:"navbar navbar-inverse navbar-static-top"},s.default.createElement("div",{className:"container"},p,s.default.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},s.default.createElement("ul",{className:"nav navbar-nav"},s.default.createElement("li",{className:"grade-calculator"===e||"/grade-calculator"===e?"active":""},h),s.default.createElement("li",{className:"weighted-grade-calculator"===e||"/weighted-grade-calculator"===e?"active":""},m),s.default.createElement("li",{className:"gpa-calculator"===e||"/gpa-calculator"===e?"active":""},v),s.default.createElement("li",{className:"about"===e||"/about"===e?"active":""},y)))))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(61),d=r(f),p=s.default.createElement("div",{className:"navbar-header"},s.default.createElement("div",{className:"navbar-brand"},"Bare Minimum")),h=s.default.createElement(d.default,{to:"grade-calculator"},"Grade Calculator"),m=s.default.createElement(d.default,{to:"weighted-grade-calculator"},"Weighted Grade Calculator"),v=s.default.createElement(d.default,{to:"gpa-calculator"},"GPA Calculator"),y=s.default.createElement(d.default,{to:"about"},"About"),g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:i}]),t}(s.default.Component);t.default=g},,,,function(e,t){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e,t,n){if(e[t])return new Error("<"+n+'> should not have a "'+t+'" prop')}t.__esModule=!0,t.routes=t.route=t.components=t.component=t.history=void 0,t.falsy=r;var o=n(0),a=o.PropTypes.func,u=o.PropTypes.object,i=o.PropTypes.arrayOf,l=o.PropTypes.oneOfType,c=o.PropTypes.element,s=o.PropTypes.shape,f=o.PropTypes.string,d=(t.history=s({listen:a.isRequired,push:a.isRequired,replace:a.isRequired,go:a.isRequired,goBack:a.isRequired,goForward:a.isRequired}),t.component=l([a,f])),p=(t.components=l([d,u]),t.route=l([u,c]));t.routes=l([p,i(p)])},function(e,t,n){"use strict";t.__esModule=!0,t.locationShape=t.routerShape=void 0;var r=n(0),o=r.PropTypes.func,a=r.PropTypes.object,u=r.PropTypes.shape,i=r.PropTypes.string;t.routerShape=u({push:o.isRequired,replace:o.isRequired,go:o.isRequired,goBack:o.isRequired,goForward:o.isRequired,setRouteLeaveHook:o.isRequired,isActive:o.isRequired}),t.locationShape=u({pathname:i.isRequired,search:i.isRequired,state:a,action:i.isRequired,key:i})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(1),i=r(u),l=n(0),c=r(l),s=n(98),f=r(s),d=n(41),p=n(23),h=c.default.PropTypes,m=h.array,v=h.func,y=h.object,g=c.default.createClass({displayName:"RouterContext",mixins:[(0,d.ContextProvider)("router")],propTypes:{router:y.isRequired,location:y.isRequired,routes:m.isRequired,params:y.isRequired,components:m.isRequired,createElement:v.isRequired},getDefaultProps:function(){return{createElement:c.default.createElement}},childContextTypes:{router:y.isRequired},getChildContext:function(){return{router:this.props.router}},createElement:function(e,t){return null==e?null:this.props.createElement(e,t)},render:function(){var e=this,t=this.props,n=t.location,r=t.routes,u=t.params,l=t.components,s=t.router,d=null;return l&&(d=l.reduceRight(function(t,i,l){if(null==i)return t;var c=r[l],d=(0,f.default)(c,u),h={location:n,params:u,route:c,router:s,routeParams:d,routes:r};if((0,p.isReactChildren)(t))h.children=t;else if(t)for(var m in t)Object.prototype.hasOwnProperty.call(t,m)&&(h[m]=t[m]);if("object"===(void 0===i?"undefined":a(i))){var v={};for(var y in i)Object.prototype.hasOwnProperty.call(i,y)&&(v[y]=e.createElement(i[y],o({key:y},h)));return v}return e.createElement(i,h)},d)),null===d||d===!1||c.default.isValidElement(d)||(0,i.default)(!1),d}});t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){return o(a({},e,{setRouteLeaveHook:t.listenBeforeLeavingRoute,isActive:t.isActive}),n)}function o(e,t){var n=t.location,r=t.params,o=t.routes;return e.location=n,e.params=r,e.routes=o,e}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.createRouterObject=r,t.assignRouterState=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n,r){var o=e.length<n,a=function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];if(e.apply(t,r),o){(0,r[r.length-1])()}};return r.add(a),a}function a(e){return e.reduce(function(e,t){return t.onEnter&&e.push(o(t.onEnter,t,3,p)),e},[])}function u(e){return e.reduce(function(e,t){return t.onChange&&e.push(o(t.onChange,t,4,h)),e},[])}function i(e,t,n){function r(e){o=e}if(!e)return void n();var o=void 0;(0,f.loopAsync)(e,function(e,n,a){t(e,r,function(e){e||o?a(e,o):n()})},n)}function l(e,t,n){p.clear();var r=a(e);return i(r.length,function(e,n,o){var a=function(){p.has(r[e])&&(o.apply(void 0,arguments),p.remove(r[e]))};r[e](t,n,a)},n)}function c(e,t,n,r){h.clear();var o=u(e);return i(o.length,function(e,r,a){var u=function(){h.has(o[e])&&(a.apply(void 0,arguments),h.remove(o[e]))};o[e](t,n,r,u)},r)}function s(e,t){for(var n=0,r=e.length;n<r;++n)e[n].onLeave&&e[n].onLeave.call(e[n],t)}t.__esModule=!0,t.runEnterHooks=l,t.runChangeHooks=c,t.runLeaveHooks=s;var f=n(22),d=function e(){var t=this;r(this,e),this.hooks=[],this.add=function(e){return t.hooks.push(e)},this.remove=function(e){return t.hooks=t.hooks.filter(function(t){return t!==e})},this.has=function(e){return t.hooks.indexOf(e)!==-1},this.clear=function(){return t.hooks=[]}},p=new d,h=new d},function(e,t,n){"use strict";function r(e,t,n){return!!e.path&&(0,a.getParamNames)(e.path).some(function(e){return t.params[e]!==n.params[e]})}function o(e,t){var n=e&&e.routes,o=t.routes,a=void 0,u=void 0,i=void 0;return n?function(){var l=!1;a=n.filter(function(n){if(l)return!0;var a=o.indexOf(n)===-1||r(n,e,t);return a&&(l=!0),a}),a.reverse(),i=[],u=[],o.forEach(function(e){var t=n.indexOf(e)===-1,r=a.indexOf(e)!==-1;t||r?i.push(e):u.push(e)})}():(a=[],u=[],i=o),{leaveRoutes:a,changeRoutes:u,enterRoutes:i}}t.__esModule=!0;var a=n(11);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=function(e){var t=void 0;return u&&(t=(0,a.default)(e)()),t};var o=n(101),a=r(o),u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}function a(e,t){function n(t,n){return t=e.createLocation(t),(0,d.default)(t,n,b.location,b.routes,b.params)}function r(e,n){_&&_.location===e?a(_,n):(0,v.default)(t,e,function(t,r){t?n(t):r?a(u({},r,{location:e}),n):n()})}function a(e,t){function n(n,o){if(n||o)return r(n,o);(0,h.default)(e,function(n,r){n?t(n):t(null,null,b=u({},e,{components:r}))})}function r(e,n){e?t(e):t(null,n)}var o=(0,c.default)(b,e),a=o.leaveRoutes,i=o.changeRoutes,l=o.enterRoutes;(0,s.runLeaveHooks)(a,b),a.filter(function(e){return l.indexOf(e)===-1}).forEach(m),(0,s.runChangeHooks)(i,b,e,function(t,o){if(t||o)return r(t,o);(0,s.runEnterHooks)(l,e,n)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.__id__||t&&(e.__id__=E++)}function l(e){return e.map(function(e){return R[i(e)]}).filter(function(e){return e})}function f(e,n){(0,v.default)(t,e,function(t,r){if(null==r)return void n();_=u({},r,{location:e});for(var o=l((0,c.default)(b,_).leaveRoutes),a=void 0,i=0,s=o.length;null==a&&i<s;++i)a=o[i](e);n(a)})}function p(){if(b.routes){for(var e=l(b.routes),t=void 0,n=0,r=e.length;"string"!=typeof t&&n<r;++n)t=e[n]();return t}}function m(e){var t=i(e);t&&(delete R[t],o(R)||(x&&(x(),x=null),O&&(O(),O=null)))}function y(t,n){var r=!o(R);return R[i(t,!0)]=n,r&&(x=e.listenBefore(f),e.listenBeforeUnload&&(O=e.listenBeforeUnload(p))),function(){m(t)}}function g(t){function n(n){b.location===n?t(null,b):r(n,function(n,r,o){n?t(n):r?e.replace(r):o&&t(null,o)})}var o=e.listen(n);return b.location?t(null,b):n(e.getCurrentLocation()),o}var b={},_=void 0,E=1,R=Object.create(null),x=void 0,O=void 0;return{isActive:n,match:r,listenBeforeLeavingRoute:y,listen:g}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a;var i=n(24),l=(r(i),n(94)),c=r(l),s=n(93),f=n(99),d=r(f),p=n(97),h=r(p),m=n(100),v=r(m);e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){if(t.component||t.components)return void n(null,t.component||t.components);var r=t.getComponent||t.getComponents;if(r){var o=r.call(t,e,n);(0,u.isPromise)(o)&&o.then(function(e){return n(null,e)},n)}else n()}function o(e,t){(0,a.mapAsync)(e.routes,function(t,n,o){r(e,t,o)},t)}t.__esModule=!0;var a=n(22),u=n(42);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){var n={};return e.path?((0,o.getParamNames)(e.path).forEach(function(e){Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}),n):n}t.__esModule=!0;var o=n(11);t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(e==t)return!0;if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(function(e,n){return r(e,t[n])});if("object"===(void 0===e?"undefined":l(e))){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))if(void 0===e[n]){if(void 0!==t[n])return!1}else{if(!Object.prototype.hasOwnProperty.call(t,n))return!1;if(!r(e[n],t[n]))return!1}return!0}return String(e)===String(t)}function o(e,t){return"/"!==t.charAt(0)&&(t="/"+t),"/"!==e.charAt(e.length-1)&&(e+="/"),"/"!==t.charAt(t.length-1)&&(t+="/"),t===e}function a(e,t,n){for(var r=e,o=[],a=[],u=0,i=t.length;u<i;++u){var l=t[u],s=l.path||"";if("/"===s.charAt(0)&&(r=e,o=[],a=[]),null!==r&&s){var f=(0,c.matchPattern)(s,r);if(f?(r=f.remainingPathname,o=[].concat(o,f.paramNames),a=[].concat(a,f.paramValues)):r=null,""===r)return o.every(function(e,t){return String(a[t])===String(n[e])})}}return!1}function u(e,t){return null==t?null==e:null==e||r(e,t)}function i(e,t,n,r,i){var l=e.pathname,c=e.query;return null!=n&&("/"!==l.charAt(0)&&(l="/"+l),!!(o(l,n.pathname)||!t&&a(l,r,i))&&u(c,n.query))}t.__esModule=!0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var c=n(11);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,o){if(e.childRoutes)return[null,e.childRoutes];if(!e.getChildRoutes)return[];var a=!0,u=void 0,l={location:t,params:i(n,r)},c=e.getChildRoutes(l,function(e,t){if(t=!e&&(0,v.createRoutes)(t),a)return void(u=[e,t]);o(e,t)});return(0,p.isPromise)(c)&&c.then(function(e){return o(null,(0,v.createRoutes)(e))},o),a=!1,u}function a(e,t,n,r,u){if(e.indexRoute)u(null,e.indexRoute);else if(e.getIndexRoute){var l={location:t,params:i(n,r)},c=e.getIndexRoute(l,function(e,t){u(e,!e&&(0,v.createRoutes)(t)[0])});(0,p.isPromise)(c)&&c.then(function(e){return u(null,(0,v.createRoutes)(e)[0])},u)}else if(e.childRoutes||e.getChildRoutes){var s=function(e,o){if(e)return void u(e);var i=o.filter(function(e){return!e.path});(0,d.loopAsync)(i.length,function(e,o,u){a(i[e],t,n,r,function(t,n){if(t||n){u(t,[i[e]].concat(Array.isArray(n)?n:[n]))}else o()})},function(e,t){u(null,t)})},f=o(e,t,n,r,s);f&&s.apply(void 0,f)}else u()}function u(e,t,n){return t.reduce(function(e,t,r){var o=n&&n[r];return Array.isArray(e[t])?e[t].push(o):e[t]=t in e?[e[t],o]:o,e},e)}function i(e,t){return u({},e,t)}function l(e,t,n,r,u,l){var s=e.path||"";if("/"===s.charAt(0)&&(n=t.pathname,r=[],u=[]),null!==n&&s){try{var d=(0,h.matchPattern)(s,n);d?(n=d.remainingPathname,r=[].concat(r,d.paramNames),u=[].concat(u,d.paramValues)):n=null}catch(e){l(e)}if(""===n){var p=function(){var n={routes:[e],params:i(r,u)};return a(e,t,r,u,function(e,t){if(e)l(e);else{if(Array.isArray(t)){var r;(r=n.routes).push.apply(r,t)}else t&&n.routes.push(t);l(null,n)}}),{v:void 0}}();if("object"===(void 0===p?"undefined":f(p)))return p.v}}if(null!=n||e.childRoutes){var m=function(o,a){o?l(o):a?c(a,t,function(t,n){t?l(t):n?(n.routes.unshift(e),l(null,n)):l()},n,r,u):l()},v=o(e,t,r,u,m);v&&m.apply(void 0,v)}else l()}function c(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];void 0===r&&("/"!==t.pathname.charAt(0)&&(t=s({},t,{pathname:"/"+t.pathname})),r=t.pathname),(0,d.loopAsync)(e.length,function(n,u,i){l(e[n],t,r,o,a,function(e,t){e||t?i(e,t):u()})},n)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=c;var d=n(22),p=n(42),h=n(11),m=n(24),v=(r(m),n(23));e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t){return(0,u.default)((0,l.default)(e))(t)}}t.__esModule=!0,t.default=o;var a=n(30),u=r(a),i=n(29),l=r(i);e.exports=t.default},,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),u=n(0),i=r(u),l=n(53),c=r(l),s=n(54),f=r(s);n(55);var d=n(51),p=r(d),h=n(47),m=r(h),v=n(50),y=r(v),g=n(48),b=r(g),_=n(46),E=r(_),R=n(49),x=r(R);!function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/bareminimumSW.js")}();var O={path:"/",component:p.default,indexRoute:{onEnter:function(e,t){return t("/grade-calculator")}},childRoutes:[m.default,y.default,E.default,b.default,x.default]};i.default.render(a.default.createElement(c.default,{history:f.default,routes:O}),document.getElementById("app"))}],[112]);