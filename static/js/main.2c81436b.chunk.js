(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var l=a(1),i=a(2),s=a(4),h=a(3),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-moon-gray { background-color: #CCCCCC } dib br3 pa3 ma3 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"pic",src:"https://robohash.org/".concat(n,"?size=100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.wholelist;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--red bg-light-yellow",type:"search",placeholder:"searchsfriends",onChange:t}))},f=(a(14),function(e){return r.a.createElement("div",{className:"tc"},r.a.createElement("div",{style:{overflowY:"Scroll",border:"5px solid black",height:"500px",width:"800px"}},e.children))}),v=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){if(this.state.hasError)return r.a.createElement("h1",null,"Oops!")}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).searchChange=function(t){e.setState({searchfield:t.target.value})},e.state={wholelist:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({wholelist:t})}))}},{key:"render",value:function(){var e=this.state,t=e.wholelist,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement("div",{class:"search_box"},r.a.createElement(d,{searchChange:this.searchChange})),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(m,{wholelist:n})))):r.a.createElement("h2",null,"Loading")}}]),a}(n.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.2c81436b.chunk.js.map