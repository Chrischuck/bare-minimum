webpackJsonp([0],Array(75).concat([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=this.state,e=t.isModalOpen,n=t.title,r=t.message,o=t.type;return v.default.createElement("div",{className:"container"},e&&v.default.createElement(O.default,{closeModal:this.closeModal,title:n,message:r,type:o}),v.default.createElement(_.default,{title:"Bare Minimum | Damage Calculator",meta:[{name:"description",content:"See how an assignment will affect your grade!"}]}),v.default.createElement("div",{className:"well infobox"},v.default.createElement("div",{style:{marginTop:10}},v.default.createElement("h3",{className:"text-center",style:{marginTop:15,marginBottom:15,fontSize:"5vw 5h",color:"#2e2d2d"}},"Damage Calculator"),v.default.createElement("p",{className:"text-center",style:{marginBottom:8,marginTop:0,fontSize:"13px",color:"#5d5d5d"}},"Find out how an assignment will affect your grade."),v.default.createElement("div",{className:"row"},v.default.createElement("div",{className:"row form-group has-success is-empty",style:{marginLeft:"0px",marginRight:"0px",marginTop:"10px",marginBottom:"10px"}},v.default.createElement("label",{htmlFor:"currentGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",lineHeight:"2.2vh",paddingTop:".8vh",fontWeight:400}},"Your current grade:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",name:"currentGrade",value:this.state.currentGrade,onChange:this.onInputChange,placeholder:"92",id:"currentGrade",style:{fontSize:"16px",fontWeight:"450",color:"#000000"}})),v.default.createElement("label",{className:"col-md-2",htmlFor:"currentGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"%.")),v.default.createElement("div",{className:"row form-group has-success is-empty",style:{marginLeft:"0px",marginRight:"0px",marginTop:"10px",marginBottom:"10px"}},v.default.createElement("label",{htmlFor:"requiredGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",lineHeight:"2.2vh",paddingTop:".8vh",fontWeight:400}},"Assignment's grade:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",name:"assignmentGrade",value:this.state.assignmentGrade,onChange:this.onInputChange,placeholder:"90",id:"requiredGrade",style:{fontSize:"16px",fontWeight:"450",color:"#000000"}})),v.default.createElement("label",{htmlFor:"requiredGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"%.")),v.default.createElement("div",{className:"row form-group has-success is-empty",style:{marginLeft:"0px",marginRight:"0px",marginTop:"10px",marginBottom:"10px"}},v.default.createElement("label",{htmlFor:"final",className:"col-xs-5 col-form-label semi-bold text-left",style:{paddingRight:".8vw",textAlign:"right",lineHeight:"2.2vh",paddingTop:".8vh",fontWeight:400}},"Assignment's worth:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",value:this.state.assignmentWeight,name:"assignmentWeight",onChange:this.onInputChange,placeholder:"10",id:"final",style:{fontSize:"16px",fontWeight:"450",color:"#000000"}})),v.default.createElement("label",{htmlFor:"final",style:{paddingTop:"10px",paddingLeft:4,fontWeight:400}},"% of your grade.")),v.default.createElement("div",{className:"row",style:{marginLeft:"4%",marginRight:"4%",textAlign:"center"}},v.default.createElement("a",{className:"btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3",onClick:this.onCalculate},"Calculate"))))))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(175),a=r(i),u=n(169),l=r(u),s=n(173),c=r(s),f=n(174),d=r(f),p=n(177),m=r(p),g=n(176),h=r(g),y=n(0),v=r(y),b=n(15),_=r(b),x=n(67),O=r(x),w=n(66),S=function(t){function e(t){(0,c.default)(this,e);var n=(0,m.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.onInputChange=function(t){n.setState((0,a.default)({},t.target.name,t.target.value))},n.onCalculate=function(){var t=n.state,e=t.currentGrade,r=t.assignmentWeight,o=t.assignmentGrade;""===e||""===r||""===o?n.openModal("Ugh Oh!",n.errorStringBuilder(),"warning"):n.openModal("After consulting the magic 8 ball...","It has been revealed your grade is now "+n.calculateGrade()+"%.",null)},n.openModal=function(t,e,r){n.setState({title:t,message:e,type:r,isModalOpen:!0})},n.closeModal=function(){n.setState({title:null,message:null,type:null,isModalOpen:!1})},n.calculateGrade=function(){var t=Number(n.state.currentGrade)/100,e=Number(n.state.assignmentWeight)/100;return(100*(e*(Number(n.state.assignmentGrade)/100)+(1-e)*t)).toFixed(2)},n.errorStringBuilder=function(){var t=n.state,e=t.currentGrade,r=t.assignmentWeight,o=t.assignmentGrade,i=(0,w.simpleErrorStringBuilder)({"current grade":e,"assignment's weight":r,"assignment's grade":o});return i?i:Number(o)>100?"Your final percentage can't be more than 100%":""},n.state={currentGrade:"",assignmentWeight:"",assignmentGrade:"",isModalOpen:!1,title:null,message:null,type:null},n}return(0,h.default)(e,t),(0,d.default)(e,[{key:"render",value:o}]),e}(v.default.Component);e.default=S},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(72)("wks"),o=n(69),i=n(13).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(64),o=n(192),i=n(70),a=n(71)("IE_PROTO"),u=function(){},l="prototype",s=function(){var t,e=n(82)("iframe"),r=i.length,o="<",a=">";for(e.style.display="none",n(186).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;r--;)delete s[l][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[l]=r(t),n=new u,u[l]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(61).f,o=n(60),i=n(147)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(13),o=n(12),i=n(149),a=n(154),u=n(61).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(147)},function(t,e,n){t.exports={default:n(179),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(172),i=r(o),a=n(171),u=r(a),l="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===l(i.default)?function(t){return void 0===t?"undefined":l(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":l(t)}},function(t,e,n){"use strict";var r=n(149),o=n(62),i=n(162),a=n(63),u=n(60),l=n(148),s=n(188),c=n(152),f=n(161),d=n(147)("iterator"),p=!([].keys&&"next"in[].keys()),m="keys",g="values",h=function(){return this};t.exports=function(t,e,n,y,v,b,_){s(n,e,y);var x,O,w,S=function(t){if(!p&&t in j)return j[t];switch(t){case m:return function(){return new n(this,t)};case g:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",N=v==g,M=!1,j=t.prototype,P=j[d]||j["@@iterator"]||v&&j[v],T=P||S(v),A=v?N?S("entries"):T:void 0,C="Array"==e?j.entries||P:P;if(C&&(w=f(C.call(new t)))!==Object.prototype&&(c(w,E,!0),r||u(w,d)||a(w,d,h)),N&&P&&P.name!==g&&(M=!0,T=function(){return P.call(this)}),r&&!_||!p&&!M&&j[d]||a(j,d,T),l[e]=T,l[E]=h,v)if(x={values:N?T:S(g),keys:b?T:S(m),entries:A},_)for(O in x)O in j||i(j,O,x[O]);else o(o.P+o.F*(p||M),e,x);return x}},function(t,e,n){var r=n(151),o=n(68),i=n(33),a=n(74),u=n(60),l=n(83),s=Object.getOwnPropertyDescriptor;e.f=n(14)?s:function(t,e){if(t=i(t),e=a(e,!0),l)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(84),o=n(70).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(60),o=n(73),i=n(71)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){t.exports=n(63)},,,,,,function(t,e,n){t.exports={default:n(178),__esModule:!0}},function(t,e,n){t.exports={default:n(180),__esModule:!0}},function(t,e,n){t.exports={default:n(181),__esModule:!0}},function(t,e,n){t.exports={default:n(182),__esModule:!0}},function(t,e,n){t.exports={default:n(183),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(155),i=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(155),i=r(o);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(170),i=r(o),a=n(168),u=r(a),l=n(156),s=r(l);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,s.default)(e)));t.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(156),i=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){n(197);var r=n(12).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(198);var r=n(12).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(199),t.exports=n(12).Object.getPrototypeOf},function(t,e,n){n(200),t.exports=n(12).Object.setPrototypeOf},function(t,e,n){n(203),n(201),n(204),n(205),t.exports=n(12).Symbol},function(t,e,n){n(202),n(206),t.exports=n(154).f("iterator")},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(65),o=n(160),i=n(151);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),l=i.f,s=0;u.length>s;)l.call(t,a=u[s++])&&e.push(a);return e}},function(t,e,n){t.exports=n(13).document&&document.documentElement},function(t,e,n){var r=n(80);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(150),o=n(68),i=n(152),a={};n(63)(a,n(147)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(65),o=n(33);t.exports=function(t,e){for(var n,i=o(t),a=r(i),u=a.length,l=0;u>l;)if(i[n=a[l++]]===e)return n}},function(t,e,n){var r=n(69)("meta"),o=n(17),i=n(60),a=n(61).f,u=0,l=Object.isExtensible||function(){return!0},s=!n(16)(function(){return l(Object.preventExtensions({}))}),c=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!l(t))return"F";if(!e)return"E";c(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!l(t))return!0;if(!e)return!1;c(t)}return t[r].w},p=function(t){return s&&m.NEED&&l(t)&&!i(t,r)&&c(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(61),o=n(64),i=n(65);t.exports=n(14)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,l=0;u>l;)r.f(t,n=a[l++],e[n]);return t}},function(t,e,n){var r=n(33),o=n(159).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(17),o=n(64),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(81)(Function.call,n(158).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(35),o=n(34);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),l=r(n),s=u.length;return l<0||l>=s?t?"":void 0:(i=u.charCodeAt(l),i<55296||i>56319||l+1===s||(a=u.charCodeAt(l+1))<56320||a>57343?t?u.charAt(l):i:t?u.slice(l,l+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(184),o=n(189),i=n(148),a=n(33);t.exports=n(157)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(62);r(r.S,"Object",{create:n(150)})},function(t,e,n){var r=n(62);r(r.S+r.F*!n(14),"Object",{defineProperty:n(61).f})},function(t,e,n){var r=n(73),o=n(161);n(85)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(62);r(r.S,"Object",{setPrototypeOf:n(194).set})},function(t,e){},function(t,e,n){"use strict";var r=n(195)(!0);n(157)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(13),o=n(60),i=n(14),a=n(62),u=n(162),l=n(191).KEY,s=n(16),c=n(72),f=n(152),d=n(69),p=n(147),m=n(154),g=n(153),h=n(190),y=n(185),v=n(187),b=n(64),_=n(33),x=n(74),O=n(68),w=n(150),S=n(193),E=n(158),N=n(61),M=n(65),j=E.f,P=N.f,T=S.f,A=r.Symbol,C=r.JSON,G=C&&C.stringify,F="prototype",k=p("_hidden"),W=p("toPrimitive"),L={}.propertyIsEnumerable,I=c("symbol-registry"),R=c("symbols"),B=c("op-symbols"),D=Object[F],z="function"==typeof A,J=r.QObject,Y=!J||!J[F]||!J[F].findChild,q=i&&s(function(){return 7!=w(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(D,e);r&&delete D[e],P(t,e,n),r&&t!==D&&P(D,e,r)}:P,H=function(t){var e=R[t]=w(A[F]);return e._k=t,e},K=z&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Q=function(t,e,n){return t===D&&Q(B,e,n),b(t),e=x(e,!0),b(n),o(R,e)?(n.enumerable?(o(t,k)&&t[k][e]&&(t[k][e]=!1),n=w(n,{enumerable:O(0,!1)})):(o(t,k)||P(t,k,O(1,{})),t[k][e]=!0),q(t,e,n)):P(t,e,n)},U=function(t,e){b(t);for(var n,r=y(e=_(e)),o=0,i=r.length;i>o;)Q(t,n=r[o++],e[n]);return t},V=function(t,e){return void 0===e?w(t):U(w(t),e)},X=function(t){var e=L.call(this,t=x(t,!0));return!(this===D&&o(R,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,k)&&this[k][t])||e)},Z=function(t,e){if(t=_(t),e=x(e,!0),t!==D||!o(R,e)||o(B,e)){var n=j(t,e);return!n||!o(R,e)||o(t,k)&&t[k][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=T(_(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==k||e==l||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=T(n?B:_(t)),i=[],a=0;r.length>a;)!o(R,e=r[a++])||n&&!o(D,e)||i.push(R[e]);return i};z||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(B,n),o(this,k)&&o(this[k],t)&&(this[k][t]=!1),q(this,t,O(1,n))};return i&&Y&&q(D,t,{configurable:!0,set:e}),H(t)},u(A[F],"toString",function(){return this._k}),E.f=Z,N.f=Q,n(159).f=S.f=$,n(151).f=X,n(160).f=tt,i&&!n(149)&&u(D,"propertyIsEnumerable",X,!0),m.f=function(t){return H(p(t))}),a(a.G+a.W+a.F*!z,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var et=M(p.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!z,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=A(t)},keyFor:function(t){if(K(t))return h(I,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!z,"Object",{create:V,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),C&&a(a.S+a.F*(!z||s(function(){var t=A();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&v(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,G.apply(C,r)}}}),A[F][W]||n(63)(A[F],W,A[F].valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){n(153)("asyncIterator")},function(t,e,n){n(153)("observable")},function(t,e,n){n(196);for(var r=n(13),o=n(63),i=n(148),a=n(147)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;l<5;l++){var s=u[l],c=r[s],f=c&&c.prototype;f&&!f[a]&&o(f,a,s),i[s]=i.Array}}]));