(this["webpackJsonplove-the-args"]=this["webpackJsonplove-the-args"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n.n(a),i=n(7),c=n.n(i),h=(n(17),n(18),n(6)),d=n(2),r=n(0),b=n(8),l=n(9),o=n(3),u=n(12),j=n(11),O=(n(19),n(10)),v=n.n(O),x=n(1),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).state={caret:-1,activeId:"id1",order:["id1"],indents:{id1:0},txts:{id1:""}},a.totalChunks=1,a.handleTextChange=a.handleTextChange.bind(Object(o.a)(a)),a.handleSplit=a.handleSplit.bind(Object(o.a)(a)),a.handleMergeUp=a.handleMergeUp.bind(Object(o.a)(a)),a.handleTabOut=a.handleTabOut.bind(Object(o.a)(a)),a.handleTabIn=a.handleTabIn.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleTextChange",value:function(t){var e=document.activeElement,n=e.value.replace(/\n\r?/g,"<br />"),a=Object(r.a)(Object(r.a)({},this.state.txts),{},Object(d.a)({},t,n));this.setState({txts:a,caret:e.selectionStart,activeId:t})}},{key:"handleSplit",value:function(){var t=this.state.activeId,e=this.state.order.indexOf(t);this.totalChunks+=1;var n="id".concat(this.totalChunks),a=this.state.caret,s=this.state.txts[t].substr(0,a),i=this.state.txts[t].substr(a),c=Object(h.a)(this.state.order);c.splice(e+1,0,n),this.setState((function(e){var a;return{activeId:n,txts:Object(r.a)(Object(r.a)({},e.txts),{},(a={},Object(d.a)(a,t,s),Object(d.a)(a,n,i),a)),indents:Object(r.a)(Object(r.a)({},e.indents),{},Object(d.a)({},n,0)),order:c}}))}},{key:"handleMergeUp",value:function(){var t,e=this.state.activeId,n=this.state.order.indexOf(e);if(0===n)return 0;var a=this.state.order[n-1],s=this.state.txts[e],i=Object(h.a)(this.state.order);i.splice(n,1),this.setState({activeId:a,txts:Object(r.a)(Object(r.a)({},this.state.txts),{},Object(d.a)({},a,this.state.txts[a]+s)),indents:Object(r.a)(Object(r.a)({},this.state.indents),{},(t={},Object(d.a)(t,a,this.state.indents[a]),Object(d.a)(t,e,null),t)),order:i})}},{key:"handleTabOut",value:function(){var t=this.state.activeId;this.setState({indents:Object(r.a)(Object(r.a)({},this.state.indents),{},Object(d.a)({},t,this.state.indents[t]+1))})}},{key:"handleTabIn",value:function(){var t=this.state.activeId;this.setState({indents:Object(r.a)(Object(r.a)({},this.state.indents),{},Object(d.a)({},t,this.state.indents[t]-1))})}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:this.handleSplit,children:"split"}),Object(x.jsx)("button",{type:"button",onClick:this.handleMergeUp,children:"merge up"}),Object(x.jsx)("button",{type:"button",onClick:this.handleTabOut,children:"<<<"}),Object(x.jsx)("button",{type:"button",onClick:this.handleTabIn,children:">>>"}),(t=this.state,e=this.handleTextChange,t.order.map((function(n){return Object(x.jsx)(v.a,{id:n,class:"chunk",style:{marginRight:10*t.indents[n]},onSelect:function(){e(n)},onChange:function(){e(n)},onClick:function(){e(n)},value:t.txts[n]})}))),this.state.caret,this.state.activeId,this.state.order]});var t,e}}]),n}(s.a.Component);var f=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(p,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.eab85ca9.chunk.js.map