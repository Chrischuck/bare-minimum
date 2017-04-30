webpackJsonp([2],{114:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=[{category:"Homework",grade:"85%",weight:"30%"},{category:"Midterm 1",grade:"90%",weight:"15%"},{category:"Midterm 2",grade:"95%",weight:"15%"},{category:"Participation",grade:"100%",weight:"5%"},{category:"Clickers",grade:"98%",weight:"10%"},{category:"Essays",grade:"87%",weight:"15%"},{category:"Assignments",grade:"99%",weight:"25%"}];return e<t.length?t[e]:{category:"Stuff",grade:"100%",weight:"100%"}}function c(){var e=this.props.inputCount,t=this.renderCategories(e);return f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-sm-4 col-xs-4 col-sm-offset-1 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"0px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"11px"}},"Category ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"8px",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"text",className:"form-control",id:e+"category",autoComplete:"off",value:this.state.category,name:"category",onChange:this.onInputChange,placeholder:t.category,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"0px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"11px"}},"Current Grade"),f.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:e+"grade",autoComplete:"off",value:this.state.grade,name:"grade",onChange:this.onInputChange,placeholder:t.grade,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"0px",paddingRight:"0px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"weight",className:"form-label",style:{fontWeight:500,fontSize:"11px"}},"Weight"),f.default.createElement("input",{type:"number",maxLength:"3",className:"form-control",id:e+"weight",autoComplete:"off",value:this.state.weight,name:"weight",onChange:this.onInputChange,placeholder:t.weight,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),d=a(0),f=o(d),g=function(e){function t(e){function a(){var e=o.state,t=e.category,a=e.grade,n=e.weight;o.props.stateToParent(o.createId(),t,a,n)}r(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onInputChange=function(e){o.setState(n({},e.target.name,e.target.value),a)},o.createId=function(){return"weightedGrade"+o.props.inputCount},o.state={category:"",grade:"",weight:""},o}return i(t,e),u(t,[{key:"renderCategories",value:s},{key:"render",value:c}]),t}(f.default.Component);t.default=g},56:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return this.state.inputCount!==t.inputCount||this.state.isModalOpen!==t.isModalOpen}function s(){for(var e=this.state,t=e.inputCount,a=e.isModalOpen,o=e.title,n=e.message,r=e.type,l=[],i=0;i<t;i+=1)l.push(d.default.createElement(y.default,{inputCount:i,stateToParent:this.stateFromChild}));return d.default.createElement("div",{className:"container col-md-12",style:{marginTop:"15vh",paddingLeft:"0",paddingRight:"0"}},a&&d.default.createElement(m.default,{closeModal:this.closeModal,title:o,message:n,type:r}),d.default.createElement(g.default,{title:"Bare Minimum | Weighted Final Grade Calculator",meta:[{name:"description",content:"Weighted Final grade calculator to help you pass your classes!"}]}),d.default.createElement("div",{className:"well infobox"},d.default.createElement("div",null,d.default.createElement("h3",{className:"text-center",style:{marginTop:15,marginBottom:2,fontSize:"5vw 5h",color:"#2e2d2d"}},"Weighted Final Grade Calculator"),d.default.createElement("p",{className:"text-center",style:{marginBottom:8,marginTop:0,fontSize:"1.6vh",color:"#5d5d5d"}},"% sign is not neccesary"),d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"0px",paddingRight:"2.5px",marginBottom:5}},d.default.createElement("label",{htmlFor:"requiredGrade",className:"form-label",style:{fontWeight:500,fontSize:"11px"}},"You want a:"),d.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"requiredGrade",autoComplete:"off",value:this.state.requiredGrade,onChange:this.onRequiredGradeChange,placeholder:"93%",style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),d.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 ",style:{paddingLeft:"2.5px",paddingRight:"0px",marginBottom:5}},d.default.createElement("label",{htmlFor:"finalWeight",className:"form-label",style:{fontWeight:500,fontSize:"11px"}},"Final's worth:"),d.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"finalWeight",autoComplete:"off",value:this.state.finalWeight,onChange:this.onFinalWeightChange,placeholder:"20%",style:{fontSize:"14px",fontWeight:"450",color:"#000000"}}))),l,d.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},d.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},d.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"0px",paddingRight:"2.5px"}},d.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addCategory,style:{backgroundColor:"#009688"}},"Add Category")),d.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"2.5px",paddingRight:"0px"}},d.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.calculate},"Calculate")))))))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),u=a(0),d=o(u),f=a(12),g=o(f),p=a(52),m=o(p),h=a(114),y=o(h),b=a(51),v=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRequiredGradeChange=function(e){a.setState({requiredGrade:e.target.value})},a.onFinalWeightChange=function(e){a.setState({finalWeight:e.target.value})},a.stateFromChild=function(e,t,o,n){var r=a.state.categories,l=r[e];r[e]={category:t,grade:o,weight:n},l&&l.category,a.setState({categories:r})},a.calculate=function(){var e=a.state,t=e.categories,o=e.requiredGrade,n=e.finalWeight,r=Object.keys(t),l=Number(o)/100,i=Number(n)/100,s=0,c=0,u=Number(n);if(!l)return void a.openModal("Ugh Oh!","The grade you want doesn't look right!","warning");if(!i)return void a.openModal("Ugh Oh!","The final's weight doesn't look right!","warning");for(var d=0;d<r.length;d+=1){var f=r[d],g=t[f],p=g.category,m=g.grade,h=g.weight,y=Number(m)/100,v=Number(h)/100;if(u+=Number(h),!y&&p)return void a.openModal("Oops!","Your grade for "+p+" doesn't look right!","warning");if(!v&&p)return void a.openModal("Oops!","Your weight for "+p+" doesn't look right!","warning");y&&v&&(c+=v,s+=y*v)}if(0===c)return void a.openModal("Oh no!","Looks like you haven't added any categories!","warning");if(100!==u)return void a.openModal("Oops!",u>100?"Your total percentage can't be greater than 100!":"Your total percentage can't be less than 100!","warning");var w=(l-s)/i*100,x=1e3*w%10>=5,C=x?Math.ceil(100*w)/100:Math.floor(100*w)/100;isNaN(C)?a.openModal("Ugh Oh!","Something went wrong, make sure your inputs are right!","warning"):a.openModal("You can do it!",(0,b.calculatorStringBuilder)(C,a.state.requiredGrade),null)},a.openModal=function(e,t,o){a.setState({title:e,message:t,type:o,isModalOpen:!0})},a.closeModal=function(){a.setState({title:null,message:null,type:null,isModalOpen:!1})},a.addCategory=function(){var e=a.state.inputCount;a.setState({inputCount:e+1})},a.state={categories:{},requiredGrade:"",finalWeight:"",inputCount:3,isModalOpen:!1,title:null,message:null,type:null},a}return l(t,e),c(t,[{key:"shouldComponentUpdate",value:i},{key:"render",value:s}]),t}(d.default.Component);t.default=v}});