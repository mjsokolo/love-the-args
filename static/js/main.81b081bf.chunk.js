(this["webpackJsonplove-the-args"]=this["webpackJsonplove-the-args"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){},28:function(t,e,a){"use strict";a.r(e);var n=a(4),i=a.n(n),s=a(7),c=a.n(s),d=(a(17),a(18),a(6)),r=a(2),h=a(1),b=a(8),l=a(9),o=a(3),u=a(12),j=a(11),O=(a(19),a(10)),v=a.n(O),x=a(0),g={names:{id1:"statement",id2:"kushya",id3:"teirutz",id4:"sheelah",id5:"tshuvah",id6:"reayah",id7:"siyua",id8:"narrative",id9:"maskanah"},borders:{id1:"black",id2:"darkcyan",id3:"cyan",id4:"darkgreen",id5:"olive",id6:"blue",id7:"grey",id8:"pink",id9:"red"}},p=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(b.a)(this,a),(n=e.call(this,t)).state={caret:-1,activeId:"id1",order:["id1"],indents:{id1:0},txts:{id1:""},borders:{id1:"black"}},n.totalChunks=1,n.handleTextChange=n.handleTextChange.bind(Object(o.a)(n)),n.handleSplit=n.handleSplit.bind(Object(o.a)(n)),n.handleMergeUp=n.handleMergeUp.bind(Object(o.a)(n)),n.handleTabOut=n.handleTabOut.bind(Object(o.a)(n)),n.handleTabIn=n.handleTabIn.bind(Object(o.a)(n)),n.handleArgPart=n.handleArgPart.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleTextChange",value:function(t){var e=document.activeElement,a=e.value.replace(/\n\r?/g,"<br />"),n=Object(h.a)(Object(h.a)({},this.state.txts),{},Object(r.a)({},t,a));this.setState({txts:n,caret:e.selectionStart,activeId:t})}},{key:"handleSplit",value:function(){var t=this.state.activeId,e=this.state.order.indexOf(t);this.totalChunks+=1;var a="id".concat(this.totalChunks),n=this.state.caret,i=this.state.txts[t].substr(0,n),s=this.state.txts[t].substr(n),c=Object(d.a)(this.state.order);c.splice(e+1,0,a),this.setState((function(e){var n;return{activeId:a,txts:Object(h.a)(Object(h.a)({},e.txts),{},(n={},Object(r.a)(n,t,i),Object(r.a)(n,a,s),n)),indents:Object(h.a)(Object(h.a)({},e.indents),{},Object(r.a)({},a,0)),order:c}}))}},{key:"handleMergeUp",value:function(){var t,e=this.state.activeId,a=this.state.order.indexOf(e);if(0===a)return 0;var n=this.state.order[a-1],i=this.state.txts[e],s=Object(d.a)(this.state.order);s.splice(a,1),this.setState({activeId:n,txts:Object(h.a)(Object(h.a)({},this.state.txts),{},Object(r.a)({},n,this.state.txts[n]+i)),indents:Object(h.a)(Object(h.a)({},this.state.indents),{},(t={},Object(r.a)(t,n,this.state.indents[n]),Object(r.a)(t,e,null),t)),order:s})}},{key:"handleTabOut",value:function(){var t=this.state.activeId;this.setState({indents:Object(h.a)(Object(h.a)({},this.state.indents),{},Object(r.a)({},t,this.state.indents[t]+1))})}},{key:"handleTabIn",value:function(){var t=this.state.activeId;this.setState({indents:Object(h.a)(Object(h.a)({},this.state.indents),{},Object(r.a)({},t,this.state.indents[t]-1))})}},{key:"handleArgPart",value:function(t){console.log("test");var e=this.state.activeId,a=g.borders[t];console.log(t,e,a),this.setState({borders:Object(h.a)(Object(h.a)({},this.state.borders),{},Object(r.a)({},e,a))})}},{key:"render",value:function(){return Object(x.jsxs)("div",{class:"grid-container",children:[Object(x.jsx)("div",{class:"item1",children:(a=g,n=this.handleArgPart,Object.keys(a.names).map((function(t){return Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"button",onClick:function(){return n(t)},style:{color:a.borders[t]},children:a.names[t]})})})))}),Object(x.jsxs)("div",{class:"item2",children:[Object(x.jsx)("button",{type:"button",onClick:this.handleSplit,children:"split"}),Object(x.jsx)("button",{type:"button",onClick:this.handleMergeUp,children:"merge up"}),Object(x.jsx)("button",{type:"button",onClick:this.handleTabOut,children:"<<<"}),Object(x.jsx)("button",{type:"button",onClick:this.handleTabIn,children:">>>"})]}),Object(x.jsx)("div",{class:"item3",children:(t=this.state,e=this.handleTextChange,t.order.map((function(a){return Object(x.jsx)(v.a,{id:a,class:"chunk",style:{marginRight:10*t.indents[a],borderColor:t.borders[a]},onSelect:function(){e(a)},onChange:function(){e(a)},onClick:function(){e(a)},value:t.txts[a]})})))})]});var t,e,a,n}}]),a}(i.a.Component);var f=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(p,{})})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),i(t),s(t),c(t)}))};c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),k()}},[[28,1,2]]]);
//# sourceMappingURL=main.81b081bf.chunk.js.map