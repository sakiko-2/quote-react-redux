(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=a(6),i=a(2),u=a(15);var s=Object(i.c)({loading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.loading;default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return t.data;default:return e}}}),d=(a(30),a(16)),m=a(17),h=a(19),f=a(18),v=a(20),E=a(4),p=a(7),b=a(8),g="https://cors-anywhere.herokuapp.com/";a(34),a(35);var w=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Copyright 2018-2019 Sakiko. All rights reserved."))},y=(a(36),function(e){var t=e.title;return r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,t))});E.b.add(b.b,b.c,b.a);var k=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"handleClickReload",value:function(){this.props.fetchData()}},{key:"renderQuote",value:function(){var e=this.props,t=e.data;return e.loading||!t?r.a.createElement("div",{className:"m-3"},r.a.createElement(p.a,{icon:"spinner",pulse:!0,size:"2x",color:"lightgrey"})):r.a.createElement("div",{className:"blockquote mx-4 my-3"},r.a.createElement("div",{className:"text-left"},r.a.createElement("div",null,r.a.createElement(p.a,{icon:"quote-left"})),t.quote),r.a.createElement("div",{className:"d-flex justify-content-between mt-4"},r.a.createElement("button",{className:"btn btn-dark m-1 rounded-circle text-left",onClick:this.handleClickReload.bind(this),"aria-label":"Reload Button",type:"button"},r.a.createElement(p.a,{icon:"redo"})),r.a.createElement("div",{className:"blockquote-footer mt-2 text-right"},t.thoughtAuthor.name)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("main",{className:"content"},r.a.createElement(y,{title:"Quote Of The Day"}),r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},r.a.createElement("div",{className:"bg-white card"},r.a.createElement("div",{className:"card-body"},this.renderQuote()))))),r.a.createElement(w,null))}}]),t}(n.Component),N=Object(l.b)(function(e){return{data:e.data,loading:e.loading}},function(e){return{fetchData:function(t){return e(function(e){var t=Math.floor(1e3*Math.random()+1),a="https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=".concat(t,"&relatedlimit=1");fetch(g+a).then(function(e){return e.json()}).then(function(t){e({type:"FETCH_SUCCESS",data:t.thought}),e({type:"LOADING",loading:!1})}).catch(function(e){return console.log("Error:",e)})})}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,j=Object(i.e)(s,O(Object(i.a)(u.a)));c.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.cc6d1800.chunk.js.map