(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(7),r=i.n(s),l=i(1),c=i(2),o=i(4),p=i(3),m=i(5),u=(i(14),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.item;return a.a.createElement("div",{className:"list-item"},a.a.createElement("li",{className:"list-item-description"},e.description))}}]),t}(n.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.list;return a.a.createElement("div",{className:"list"},a.a.createElement("h2",{className:"list-label"},e.label),a.a.createElement("div",{className:"list-items"},a.a.createElement("ul",null,e.items.map(function(e){return a.a.createElement(u,{key:e.id,item:e})}))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.lists;return a.a.createElement("div",{className:"lists"},e.map(function(e){return a.a.createElement(d,{key:e.id,list:e})}))}}]),t}(n.Component),h=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(i=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={lists:[{id:0,label:"Personal",items:[{id:0,description:"Do laundry.",isComplete:!1},{id:1,description:"Shovel snow off driveway, pour salt.",isComplete:!1},{id:2,description:"Get oil change.",isComplete:!1}]},{id:1,label:"Family",items:[{id:0,description:"Send flowers to wife.",isComplete:!1},{id:1,description:"Make appointment with son's teacher.",isComplete:!1},{id:2,description:"Prep lunch meals for week.",isComplete:!1}]},{id:2,label:"Work",items:[{id:0,description:"Respond to new emails.",isComplete:!1},{id:1,description:"Follow up on existing tickets.",isComplete:!1},{id:2,description:"Setup 1-on-1 meeting with manager.",isComplete:!1}]}]},i}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.lists;return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"To-Do App"),a.a.createElement(b,{lists:e}))}}]),t}(n.Component);r.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,i){e.exports=i(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.f34a11bb.chunk.js.map