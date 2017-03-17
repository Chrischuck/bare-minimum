var _Mathfloor=Math.floor;webpackJsonp([2],{119:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){this.setState({randGrade:this.createRandGrades()})}function l(){return"courseGpa"+this.props.inputCount}function i(){var e=_Mathfloor(6*Math.random()+1);return 1===e?"A+":2===e?"A":3===e?"A-":4===e?"B+":5===e?"B":"A-"}function u(){var e=this.props.inputCount,t=this.renderCourses(e);return f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-xs-4 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Class ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"text",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onCourseChange,placeholder:t.name,style:{fontSize:"1.2vh"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Grade"),f.default.createElement("input",{maxLength:"2",type:"text",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onGradeChange,placeholder:t.grade,style:{fontSize:"1.2vh"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Units"),f.default.createElement("input",{type:"number",maxLength:"1",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onUnitsChange,placeholder:t.units,style:{fontSize:"1.2vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=function(e){return e&&e.__esModule?e:{default:e}}(d),p=function(e){function t(e){function a(){return l.setInParent()}function r(){return l.setInParent()}function s(){return l.setInParent()}n(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onCourseChange=function(e){l.setState({course:e.target.value},a)},l.onGradeChange=function(e){l.setState({grade:e.target.value},r)},l.onUnitsChange=function(e){l.setState({units:e.target.value},s)},l.setInParent=function(){var e=l.state,t=e.course,a=e.grade,n=e.units;l.props.stateToParent(l.createId(),t,a,n)},l.renderCourses=function(e){var t=l.state.randGrade,a=[{name:"Math 133A",grade:t,units:"3"},{name:"Astro 10",grade:t,units:"2"},{name:"Phys 50",grade:t,units:"4"},{name:"Math 129A",grade:t,units:"3"},{name:"Math 42",grade:t,units:"3"},{name:"CS 46B",grade:t,units:"4"},{name:"Engl 1B",grade:t,units:"2"},{name:"Kin 08",grade:t,units:"2"}];return e<a.length?a[e]:{name:"Classy McClassFace",grade:"A++",units:"4.20"}},l.state={course:"",grade:"",units:"",randGrade:""},l}return r(t,e),c(t,[{key:"componentWillMount",value:s},{key:"createId",value:l},{key:"createRandGrades",value:i},{key:"render",value:u}]),t}(f.default.Component);t.default=p},57:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.toUpperCase();return"A+"===t?4:"A"===t?4:"A-"===t?3.7:"B+"===t?3.3:"B"===t?3:"B-"===t?2.7:"C+"===t?2.3:"C"===t?2:"C-"===t?1.7:"D+"===t?1.3:"D"===t?1:"D-"===t?0:"F+"===t?0:"F"===t?0:"F-"===t?0:e}function i(e){var t=+e;return 4<=t?"Damn you're rocking a "+e:4>t&&3.8<=t?"Good job you have a solid "+e:3.8>t&&3<=t?"Awesome you got a "+e:3>t&&2.5<=t?"Not bad, you're getting a "+e:2.5>t?"You have a "+e:void 0}function u(){for(var e=this.state.inputCount,t=[],a=0;a<e;a+=1)t.push(f.default.createElement(h.default,{inputCount:a,stateToParent:this.stateFromChild}));return f.default.createElement("div",{className:"container col-md-12 wrapperClass",style:{marginTop:"10vh",paddingLeft:"0px",paddingRight:"0px",marginBottom:10}},f.default.createElement(m.default,{title:"Bare Minimum | GPA Calculator",meta:[{name:"description",content:"See how you've done so far!"}]}),f.default.createElement("div",{className:"well infobox"},f.default.createElement("h3",{className:"text-center",style:{marginTop:0,marginBottom:10,fontSize:"5vw 5h",color:"#2e2d2d"}},"GPA Calculator"),f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:"pastGPA",className:"form-label",style:{fontWeight:550}},"Past GPA ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"number",className:"form-control",id:"pastGPA",autoComplete:"off",placeholder:"3.8",value:this.state.pastGpa,onChange:this.onPastGpaChange,style:{fontSize:"1.2vh"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:"pastUnits",className:"form-label",style:{fontWeight:550}},"Past Units ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"number",className:"form-control",id:"pastUnits",autoComplete:"off",placeholder:"60",value:this.state.pastUnits,onChange:this.onUnitsChange,style:{fontSize:"1.2vh"}}))),t,f.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},f.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},f.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},f.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addClass,style:{backgroundColor:"#009688"}},"Add Class")),f.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},f.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.showGpa,style:{backgroundColor:"#009688"}},"Calculate"))))))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a,n=0;n<t.length;n++)a=t[n],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),p=a(16),m=n(p),g=a(119),h=n(g),y=a(32),v=n(y),b=function(e){function t(e){function a(){return l.calculate()}function n(){return l.calculate()}function s(){return l.calculate()}o(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onPastGpaChange=function(e){4<+e.target.value?(0,v.default)("Impossible!","You can't have a gpa higher than a 4.0!","warning"):0>+e.target.value?(0,v.default)("Hmm!","I don't think anyone's gpa can be that bad!","warning"):l.setState({pastGpa:e.target.value},a)},l.onUnitsChange=function(e){0>+e.target.value?(0,v.default)("Oh dear!","You can't have negative units!","warning"):l.setState({pastUnits:e.target.value},n)},l.stateFromChild=function(e,t,a,n){var o=l.state.courses,r=o[e];o[e]={course:t,grade:a,units:n},r&&r.course!==t?l.setState({courses:o}):l.setState({courses:o},s)},l.calculate=function(){for(var e=l.state,t=e.courses,a=e.pastGpa,n=e.pastUnits,o=Object.keys(t),r=0,s=0,i=0;i<o.length;i+=1){var u=o[i],c=t[u],d=c.grade,f=c.units,p=c.course,m=l.gradeToNumber(d);if("number"==typeof m&&d&&f)r+=m*+f,s+=+f;else if("number"!=typeof m&&d&&f)return void(0,v.default)("Oops!",p?"Your grade for "+p+" doesn't look right!":"One of your grades doesn't look right!","warning")}isNaN(+a)||isNaN(+n)||(r+=+a*n,s+=+n);var g=5<=r/s*1e3%10,h=g?Math.ceil(r/s*100)/100:_Mathfloor(r/s*100)/100;if(!isNaN(h))if(0!=10*h%10){var y=h.toFixed(2);l.setState({gpa:y})}else{var b=h.toFixed(1);l.setState({gpa:b})}},l.addClass=function(){var e=l.state.inputCount;l.setState({inputCount:e+1})},l.showGpa=function(){var e=l.state.gpa;e?(0,v.default)("Nice!",l.gpaStringBuilder(e),null):(0,v.default)("Ugh oh!!","It appears you haven't added any classes!","warning")},l.state={courses:{},pastGpa:"",pastUnits:"",inputCount:4,gpa:""},l}return s(t,e),c(t,[{key:"gradeToNumber",value:l},{key:"gpaStringBuilder",value:i},{key:"render",value:u}]),t}(f.default.Component);t.default=b}});