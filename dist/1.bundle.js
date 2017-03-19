webpackJsonp([1],{118:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=[{category:"Homework",grade:"85%",weight:"30%"},{category:"Midterm 1",grade:"90%",weight:"15%"},{category:"Midterm 2",grade:"95%",weight:"15%"},{category:"Participation",grade:"100%",weight:"5%"},{category:"Clickers",grade:"98%",weight:"10%"},{category:"Essays",grade:"87%",weight:"15%"},{category:"Assignments",grade:"99%",weight:"25%"}];return e<t.length?t[e]:{category:"Memetics",grade:"100%",weight:"100%"}}function s(){var e=this.props.inputCount,t=this.renderCategories(e);return d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-sm-4 col-xs-4 col-sm-offset-1 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Category ",d.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),d.default.createElement("input",{type:"text",className:"form-control",id:e+"category",autoComplete:"off",value:this.state.category,onChange:this.onCategoryChange,placeholder:t.category,style:{fontSize:"1.6vh"}})),d.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Current Grade"),d.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:e+"grade",autoComplete:"off",value:this.state.grade,onChange:this.onGradeChange,placeholder:t.grade,style:{fontSize:"1.6vh"}})),d.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"weight",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Weight"),d.default.createElement("input",{type:"number",maxLength:"3",className:"form-control",id:e+"weight",autoComplete:"off",value:this.state.weight,onChange:this.onWeightChange,placeholder:t.weight,style:{fontSize:"1.6vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),c=a(0),d=o(c),f=function(e){function t(e){function a(){return i.setInParent()}function o(){return i.setInParent()}function l(){return i.setInParent()}n(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.onCategoryChange=function(e){i.setState({category:e.target.value},a)},i.onGradeChange=function(e){i.setState({grade:e.target.value},o)},i.onWeightChange=function(e){i.setState({weight:e.target.value},l)},i.setInParent=function(){var e=i.state,t=e.category,a=e.grade,o=e.weight;i.props.stateToParent(i.createId(),t,a,o)},i.createId=function(){return"weightedGrade"+i.props.inputCount},i.state={category:"",grade:"",weight:""},i}return l(t,e),u(t,[{key:"renderCategories",value:i},{key:"render",value:s}]),t}(d.default.Component);t.default=f},60:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){for(var e=this.state.inputCount,t=[],a=0;a<e;a+=1)t.push(c.default.createElement(h.default,{inputCount:a,stateToParent:this.stateFromChild}));return c.default.createElement("div",{className:"container col-md-12",style:{marginTop:"15vh",paddingLeft:"0",paddingRight:"0"}},c.default.createElement(f.default,{title:"Bare Minimum | Final Grade Calculator",meta:[{name:"description",content:"Final grade calculator to help you pass your classes!"}]}),c.default.createElement("div",{className:"well infobox"},c.default.createElement("div",null,c.default.createElement("h3",{className:"text-center",style:{marginTop:15,marginBottom:2,fontSize:"5vw 5h",color:"#2e2d2d"}},"Weighted Final Grade Calculator"),c.default.createElement("p",{className:"text-center",style:{marginBottom:8,marginTop:0,fontSize:"1.6vh",color:"#5d5d5d"}},"% sign is not neccesary"),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},c.default.createElement("label",{htmlFor:"requiredGrade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"You want a:"),c.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"requiredGrade",autoComplete:"off",value:this.state.requiredGrade,onChange:this.onRequiredGradeChange,placeholder:"93%",style:{fontSize:"1.6vh"}})),c.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 ",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},c.default.createElement("label",{htmlFor:"finalWeight",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Final's worth:"),c.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"finalWeight",autoComplete:"off",value:this.state.finalWeight,onChange:this.onFinalWeightChange,placeholder:"20%",style:{fontSize:"1.6vh"}}))),t,c.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},c.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},c.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},c.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addCategory,style:{backgroundColor:"#009688"}},"Add Category")),c.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},c.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.calculate,style:{backgroundColor:"#009688"}},"Calculate")))))))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),u=a(0),c=o(u),d=a(16),f=o(d),g=a(118),h=o(g),m=a(56),p=o(m),y=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRequiredGradeChange=function(e){a.setState({requiredGrade:e.target.value})},a.onFinalWeightChange=function(e){a.setState({finalWeight:e.target.value})},a.stateFromChild=function(e,t,o,n){var r=a.state.categories,l=r[e];r[e]={category:t,grade:o,weight:n},l&&l.category,a.setState({categories:r})},a.calculate=function(){var e=a.state,t=e.categories,o=e.requiredGrade,n=e.finalWeight,r=Object.keys(t),l=Number(o)/100,i=Number(n)/100,s=0,u=0,c=Number(n);if(!l)return void(0,p.default)("Ugh Oh!","The grade you want doesn't look right!","warning");if(!i)return void(0,p.default)("Ugh Oh!","The final's weight doesn't look right!","warning");for(var d=0;d<r.length;d+=1){var f=r[d],g=t[f],h=g.category,m=g.grade,y=g.weight,v=Number(m)/100,b=Number(y)/100;if(c+=Number(y),!v)return void(0,p.default)("Oops!",h?"Your grade for "+h+" doesn't look right!":"  One of your grades doesn't look right!","warning");if(!b)return void(0,p.default)("Oops!",h?"Your weight for "+h+" doesn't look right!":"  One of your weights doesn't look right!","warning");v&&b&&(u+=b,s+=v*b)}if(0===u)return void(0,p.default)("Oh no!","Looks like you haven't added any categories!","warning");if(100!==c)return void(0,p.default)("Oops!",c>100?"Your total percentage can't be greater than 100!":"Your total percentage can't be less than 100!","warning");var w=(l-s)/i*100,C=1e3*w%10>=5,x=C?Math.ceil(100*w)/100:Math.floor(100*w)/100;isNaN(x)?(0,p.default)("Ugh Oh!","Something went wrong, make sure your inputs are right!","warning"):(0,p.default)("You can do it!",a.calculatorStringBuilder(x),null)},a.calculatorStringBuilder=function(e){var t="";t+=Number(e)<=50?"You only need ":"You will nead at least ",t+=e+"% on your final to get a "+a.state.requiredGrade+"% overall.";var o=Number(e);return o>100&&(t+=" May the force be with you!"),o<=100&&o>=90&&(t+=" You can do it!"),o<90&&o>=70&&(t+=" You got this in the bag!"),o<70&&o>=0&&(t+=" What's the point of studying honestly?"),o<0&&(t+=" Just stay in bed at this point!"),t},a.addCategory=function(){var e=a.state.inputCount;a.setState({inputCount:e+1})},a.state={categories:{},requiredGrade:"",finalWeight:"",inputCount:3},a}return l(t,e),s(t,[{key:"render",value:i}]),t}(c.default.Component);t.default=y}});