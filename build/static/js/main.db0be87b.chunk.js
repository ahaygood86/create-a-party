(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(69),s=a(9),l=a(10),o=a(12),i=a(11),m=a(13),u=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"top"},n.a.createElement("h1",null,"Create",n.a.createElement("span",{className:"ofThe"},n.a.createElement("span",{className:"of"},"your")),"Party"),n.a.createElement("h3",{className:"tagline"},n.a.createElement("span",null,this.props.tagline)))}}]),t}(n.a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.age,r=t.image,c=t.job,s=t.level,l=t.name,o=t.race,i=t.status,m=Object.keys(this.props.party).length||0,u="available"===i;return n.a.createElement("li",{className:"menu-character"},n.a.createElement("img",{src:r,alt:l}),n.a.createElement("h3",{className:"character-name"},l,n.a.createElement("span",{className:"job"},c)),n.a.createElement("p",null,"Level: ",s),n.a.createElement("p",null,"Race: ",o),n.a.createElement("p",null,"Age: ",a),n.a.createElement("button",{disabled:!u,onClick:function(){return e.props.addToParty(m,e.props.index)}},u?"Add to Party":"Hired!"))}}]),t}(n.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.level,r=t.race,c=t.job,s=t.name;return n.a.createElement("div",{className:"entry"},n.a.createElement("div",{className:"member"},n.a.createElement("div",{className:"charname"},s),n.a.createElement("div",null,n.a.createElement("button",{className:"rmv-button",onClick:function(){return e.props.removeFromParty(e.props.index,e.props.token)}},"REMOVE"))),n.a.createElement("div",{className:"stats"},"Level ",a," ",r," ",c))}}]),t}(r.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.party,a=t.length||0;return n.a.createElement("div",{className:"party-wrap"},n.a.createElement("h1",{className:"large"},"Your Party"),n.a.createElement("div",{className:"total"},"Current Party Size: \xa0",n.a.createElement("strong",{className:6==a?"full":""},a," / 6")),a>0&&n.a.createElement("div",{className:"party"},t.map(function(t,a){return n.a.createElement(h,{key:t,index:a,token:t,details:e.props.characters[t],removeFromParty:e.props.removeFromParty})})),n.a.createElement("button",{onClick:function(){return e.props.removeAllFromParty()}},"Clear All"),n.a.createElement("button",{className:6!=a?"notfull":"",onClick:function(){return alert("Thank you for trying this demo!")}},"End Demo"))}}]),t}(r.Component),d=a(70),v=a.n(d),b=a(71),f=a.n(b).a.initializeApp({apiKey:"AIzaSyAiWVtZOQxbtDAGIKSQjwGwMkgnLY5mcuo",authDomain:"andy-dev-test.firebaseapp.com",databaseURL:"https://andy-dev-test.firebaseio.com"}),E=v.a.createClass(f.database());function j(e){if(!e)return e;var t,a=Array.isArray(e)?[]:{};for(var r in e)t=e[r],a[r]="object"===typeof t?j(t):t;return a}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).addToParty=function(e,t){var r,n=j(a.state.party),c=j(a.state.characters);return r=!(!n.length||!n.includes(t)),e<6&&!r&&(n[e]=t,c[t].status="unavailable",a.setState({party:n,characters:c})),null},a.removeFromParty=function(e,t){var r=j(a.state.party),n=j(a.state.characters);return r.splice(e,1),n[t].status="available",a.setState({party:r,characters:n}),null},a.removeAllFromParty=function(){var e=Object.assign({},a.state.characters);for(var t in e)e[t].status="available";return a.setState({party:[],characters:e}),null},a.state={characters:{},party:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.roster=E.syncState("characters",{context:this,state:"characters"}),this.team=E.syncState("party",{context:this,state:"party"})}},{key:"componentWillUnmount",value:function(){E.removeBinding(this.roster),E.removeBinding(this.team)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"create-a-party"},n.a.createElement("div",{className:"menu"},n.a.createElement(u,{tagline:"Choose six adventurers"}),n.a.createElement("ul",{className:"characters"},Object.keys(this.state.characters).map(function(t){return n.a.createElement(p,{key:t,index:t,party:e.state.party,details:e.state.characters[t],addToParty:e.addToParty})}))),n.a.createElement(y,{characters:this.state.characters,party:this.state.party,removeFromParty:this.removeFromParty,removeAllFromParty:this.removeAllFromParty}))}}]),t}(n.a.Component);a(157);Object(c.render)(n.a.createElement(O,null),document.querySelector("#main"))},72:function(e,t,a){e.exports=a(158)}},[[72,1,2]]]);
//# sourceMappingURL=main.db0be87b.chunk.js.map