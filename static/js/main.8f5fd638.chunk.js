(this["webpackJsonplove-the-args"]=this["webpackJsonplove-the-args"]||[]).push([[0],{112:function(e,t,n){},118:function(e,t,n){},220:function(e,t,n){},223:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(25),r=n.n(c),a=(n(112),n(4)),s=(n(118),n(105)),i=n.n(s),l=(n(49),n(106)),d=n.n(l),u=n(1);function b(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.notes[t]})),o=Object(a.c)((function(e){return e.blocks.present.views[t]})),c=Object(a.b)();return!1===o||void 0===o?Object(u.jsx)("div",{}):Object(u.jsx)(i.a,{id:t,className:"note",onSelect:function(){return c({type:"updateNote",payload:{id:t}})},onChange:function(){return c({type:"updateNote",payload:{id:t}})},onClick:function(e){if(e.ctrlKey||e.metaKey||e.shiftKey)return 0;c({type:"updateNote",payload:{id:t}})},value:n})}function j(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.views[t]})),o=Object(a.b)();return Object(u.jsx)(d.a,{checked:n,onChange:function(){return o({type:"toggleNote",payload:{id:t}})},uncheckedIcon:!1,checkedIcon:!1,className:"switch",onColor:"#888888",onHandleColor:"#ffffff",offColor:"#888888",boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.2)",height:10,width:20})}var p=n(28),O=n(5);function f(e){var t=e.getSelection().getAnchorOffset(),n=e.getCurrentContent().getPlainText().length,o=e.getSelection().getAnchorKey(),c=e.getCurrentContent().getLastBlock().key,r=e.getCurrentContent().getFirstBlock().key,a=O.SelectionState.createEmpty("blockkey").merge({anchorKey:o,anchorOffset:t,focusOffset:n,focusKey:c}),s=O.SelectionState.createEmpty("blockkey").merge({anchorKey:r,anchorOffset:0,focusKey:o,focusOffset:t}),i=O.Modifier.removeRange(e.getCurrentContent(),s,"forward"),l=O.Modifier.removeRange(e.getCurrentContent(),a,"forward");return{slice1:JSON.stringify(Object(O.convertToRaw)(l)),slice2:JSON.stringify(Object(O.convertToRaw)(i))}}function g(e){var t=e.getSelection(),n=t.getAnchorOffset()<t.getFocusOffset();return n?{anchorKey:t.getAnchorKey(),anchorOffset:t.getAnchorOffset(),focusKey:t.getFocusKey(),focusOffset:t.getFocusOffset(),isBackward:n}:{anchorKey:t.getFocusKey(),anchorOffset:t.getFocusOffset(),focusKey:t.getAnchorKey(),focusOffset:t.getAnchorOffset(),isBackward:n}}var y={TANNA:{backgroundColor:"#BBCCEE"},AMORA:{backgroundColor:"#CCDDAA"},STAM:{backgroundColor:"#ffcccc"},AMORA_MIDRASH:{borderBottom:"3px solid #228833",backgroundColor:"#BBCCEE"},STAM_MIDRASH:{borderBottom:"3px solid #ee6677",backgroundColor:"#BBCCEE"},STAM_AMORA:{borderBottom:"3px solid #ee6677",backgroundColor:"#CCDDAA"},CLEAR:{color:"black"}};function h(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.txts}))[t],c=O.EditorState.createWithContent(Object(O.convertFromRaw)(JSON.parse(n))),r=Object(o.useState)((function(){return O.EditorState.createWithContent(Object(O.convertFromRaw)(JSON.parse(n)))})),s=Object(p.a)(r,2),i=s[0],l=s[1],d=Object(a.b)();c.getCurrentContent().getPlainText()!==i.getCurrentContent().getPlainText()&&(console.log("infinite loop1"),l(c)),n!==JSON.stringify(Object(O.convertToRaw)(i.getCurrentContent()))&&(console.log("infinite loop3"),l(c));var b=0;return Object(o.useEffect)((function(){var e=document.activeElement;"notranslate public-DraftEditor-content"===e.getAttribute("class")&&e.parentElement.parentElement.parentElement.getAttribute("id")===t&&b.focus()})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"text_editor",id:t,children:Object(u.jsx)(O.Editor,{ref:function(e){return b=e},customStyleMap:y,editorState:i,onChange:function(e){var n=e.getCurrentContent().getPlainText()===i.getCurrentContent().getPlainText();l(e),d(n?{type:"updateSelection",payload:{id:t,split:f(e),selection:g(e)}}:{type:"updateText",payload:{id:t,txt:JSON.stringify(Object(O.convertToRaw)(e.getCurrentContent())),split:f(e),selection:g(e)}})}})})})}function m(){return Object(a.c)((function(e){return e.blocks.present.order})).map((function(e){return Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)(j,{id:e}),Object(u.jsx)(h,{id:e}),Object(u.jsx)(b,{id:e})]},e)}))}n(220);var v=n(29),x=n.n(v);function S(){var e=Object(a.b)();return Object(u.jsx)("button",{type:"button",onMouseDown:function(t){if(t.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var n=document.activeElement.parentElement.parentElement.parentElement.id;e({type:"mergeText",payload:{id:n}})}},children:"merge"})}function C(){var e=Object(a.b)();return Object(u.jsx)("button",{type:"button",onMouseDown:function(t){if(t.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var n=document.activeElement.parentElement.parentElement.parentElement.id;e({type:"splitText",payload:{id:n}})}},children:"split"})}function A(){var e=Object(a.b)();return Object(u.jsx)("button",{type:"button",onClick:function(){return e(v.ActionCreators.redo())},children:"redo"})}function k(){var e=Object(a.b)();return Object(u.jsx)("button",{type:"button",onClick:function(){e(v.ActionCreators.undo())},children:"undo"})}function w(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.blocks.present.txts})),o=Object(a.c)((function(e){return e.blocks.present.selections}));return Object(u.jsx)("button",{style:y[e.dataStyle],type:"button","data-style":e.dataStyle,onMouseUp:function(e){return e.preventDefault()},onMouseDown:function(e){if(e.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var c=e.currentTarget.getAttribute("data-style"),r=document.activeElement.parentElement.parentElement.parentElement.id,a=Object(O.convertFromRaw)(JSON.parse(n[r])),s=function(e){var t=e.anchorKey,n=e.anchorOffset,o=e.focusKey,c=e.focusOffset;return O.SelectionState.createEmpty("blockkey").merge({anchorKey:t,anchorOffset:n,focusKey:o,focusOffset:c,isBackward:!1})}(o[r]);console.log("prior to update: ",s.getAnchorKey(),s.getAnchorOffset());var i=O.EditorState.createWithContent(a);i=O.EditorState.acceptSelection(i,s),i=N(i),i=O.RichUtils.toggleInlineStyle(i,c),console.log("after update:",i.getSelection().getAnchorKey(),i.getSelection().getAnchorOffset()),t({type:"updateText",payload:{id:r,txt:JSON.stringify(Object(O.convertToRaw)(i.getCurrentContent())),split:f(i),selection:g(i)}})}},children:e.name})}function E(){return Object(u.jsxs)("div",{className:"header_buttons",children:[Object(u.jsx)(k,{}),Object(u.jsx)(A,{}),Object(u.jsx)(S,{}),Object(u.jsx)(C,{}),Object(u.jsx)(w,{dataStyle:"TANNA",name:"Tannaitic"}),Object(u.jsx)(w,{dataStyle:"AMORA",name:"Amoraic"}),Object(u.jsx)(w,{dataStyle:"STAM",name:"Stam"}),Object(u.jsx)(w,{dataStyle:"CLEAR",name:"Clear"}),Object(u.jsx)(w,{dataStyle:"AMORA_MIDRASH",name:"T from A"}),Object(u.jsx)(w,{dataStyle:"STAM_MIDRASH",name:"T from S"}),Object(u.jsx)(w,{dataStyle:"STAM_AMORA",name:"A from S"})]})}var N=function(e){var t=e.getCurrentContent(),n=["TANNA","AMORA","AMORA_MIDRASH","STAM","STAM_MIDRASH","STAM_AMORA","CLEAR"].reduce((function(t,n){return O.Modifier.removeInlineStyle(t,e.getSelection(),n)}),t);return O.EditorState.push(e,n,"change-inline-style")},T=(n(223),n(15)),M=n(107),R=n.n(M),D=(n(227),{"\u05de\u05e7\u05e8\u05d4":{color:"#44aa99",types:["arrow","box"]},"\u05d3\u05d9\u05df":{color:"CadetBlue",types:["arrow"]},"\u05d8\u05e2\u05dd":{color:"DarkSlateGrey",types:["arrow"]},"\u05db\u05d5\u05ea\u05e8\u05ea":{color:"DarkSlateBlue",types:["arrow","box"]},"\u05de\u05e2\u05e9\u05d4":{color:"LightSlateGrey",types:["arrow","box"]},"\u05d0\u05de\u05d9\u05e8\u05d4":{color:"DarkGreen",types:["arrow","box"]},"\u05e9\u05d0\u05dc\u05d4":{color:"Olive",types:["arrow","box"]},"\u05ea\u05e9\u05d5\u05d1\u05d4":{color:"YellowGreen",types:["arrow"]},"\u05e7\u05d5\u05e9\u05d9\u05d0":{color:"Tomato",types:["arrow"]},"\u05ea\u05d9\u05e8\u05d5\u05e5":{color:"OrangeRed",types:["arrow"]},"\u05e8\u05d0\u05d9\u05d4":{color:"DarkOrange",types:["arrow"]},"\u05e1\u05d9\u05d5\u05e2":{color:"Gold",types:["arrow"]},"\u05d0\u05d2\u05d3\u05d4":{color:"IndianRed",types:["arrow","box"]},"\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0":{color:"DarkSalmon",types:["arrow"]}}),_={mishnah:["\u05de\u05e7\u05e8\u05d4","\u05d3\u05d9\u05df","\u05d8\u05e2\u05dd","\u05db\u05d5\u05ea\u05e8\u05ea","\u05de\u05e2\u05e9\u05d4","\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0"],talmud:["\u05d0\u05de\u05d9\u05e8\u05d4","\u05e9\u05d0\u05dc\u05d4","\u05ea\u05e9\u05d5\u05d1\u05d4","\u05e7\u05d5\u05e9\u05d9\u05d0","\u05ea\u05d9\u05e8\u05d5\u05e5","\u05e8\u05d0\u05d9\u05d4","\u05e1\u05d9\u05d5\u05e2","\u05d0\u05d2\u05d3\u05d4","\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0"]},B="node_menu";function K(){var e=function(e,t,n){t.target;var o=t.label,c=t.type,r=t.dispatch,a=n.firstChild.id;r("arrow"===c?{type:"setMode",payload:{label:o,id:a}}:{type:"setBox",payload:{label:o,id:a}})},t=Object(a.b)();return Object(u.jsxs)(T.a,{id:B,className:"context-menu",children:[Object(u.jsx)(T.c,{onClick:function(e,t,n){t.target;(0,t.dispatch)({type:"removeBox",payload:{id:n.firstChild.id}})},data:{dispatch:t},children:"Remove Box"},"remove"),Object.keys(_).map((function(n){return Object(u.jsx)(T.d,{title:n,children:_[n].map((function(n){return Object(u.jsx)(T.d,{title:n,children:D[n].types.map((function(o){return Object(u.jsx)(T.c,{onClick:e,data:{label:n,type:o,dispatch:t},children:o},o)}))},n)}))},n)}))]})}n(228);var F=function(e){var t=e.id,n=Object(a.b)(),o=Object(a.c)((function(e){return e.blocks.present.positions[t]})),c=Object(a.c)((function(e){return e.blocks.present.txts[t]})),r=Object(a.c)((function(e){return e.blocks.present.graph.boxes[t]})),s="";s=r?D[r].color:"";var i=function(e,o){n({type:"updatePosition",payload:{id:t,x:o.lastX+o.deltaX,y:o.lastY+o.deltaY}})},l=Object(p.a)(o,2),d=l[0],b=l[1];return Object(u.jsx)(T.b,{id:B,children:Object(u.jsx)(R.a,{onStop:i,onDrag:i,defaultPosition:{x:d,y:b},position:{x:d,y:b},children:Object(u.jsxs)("fieldset",{className:"node",id:t,style:{borderColor:s},children:[Object(u.jsx)("legend",{className:"label",style:{color:s},children:r}),Object(u.jsx)(O.Editor,{readOnly:!0,customStyleMap:y,editorState:O.EditorState.createWithContent(Object(O.convertFromRaw)(JSON.parse(c))),onChange:function(){}})]})},t)},t)};function I(){return Object(a.c)((function(e){return e.blocks.present.order})).map((function(e){return Object(u.jsx)(F,{id:e},e)}))}var J=n(34),P=n.n(J);function L(){for(var e=Object(a.c)((function(e){return e.blocks.present.order})),t=(Object(a.c)((function(e){return e.blocks.present.positions})),{}),n=0;n<e.length-1;n+=1)t[e[n]]=e[n+1];var o=[];return Object.keys(t).forEach((function(e){return o.push(Object(u.jsx)(P.a,{start:e,end:t[e],strokeWidth:1,lineColor:"grey",headColor:"grey",dashness:!0},e))})),o}var H="connection_menu";function W(){var e=Object(a.b)();return Object(u.jsx)(T.a,{id:H,children:Object(u.jsx)(T.c,{onClick:function(e,t,n){var o=t.target,c=t.reducerType;(0,t.dispatch)({type:c,payload:{id:o.parentElement.parentElement.id}})},data:{reducerType:"deleteConnection",dispatch:e},children:"Delete"},"deleteConnection")})}function G(e){return e!==document&&(e.classList.contains("react-contextmenu-item")||e.classList.contains("node")?e:G(e.parentNode))}function U(e,t,n){var o=G(e.target);!1===o?n({type:"resetMode"}):"react-contextmenu-item"===o.classList[0]||"node"===o.classList[0]&&(null!==t.selectedNode&&(t.selectedNode===o.id||t.connections.includes([t.selectedNode,o.id])||n({type:"addConnection",payload:{connection:[t.selectedNode,o.id,t.mode]}})),n({type:"resetMode"}))}function Y(){var e=Object(a.c)((function(e){return e.blocks.present.graph})),t=Object(a.b)();return Object(o.useEffect)((function(){function n(n){return U(n,e,t)}return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e]),Object(u.jsx)(u.Fragment,{})}n(234);function X(){var e=Object(a.c)((function(e){return e.blocks.present.graph.connections})),t=(Object(a.c)((function(e){return e.blocks.present.positions})),{});return e.map((function(e){var n=e[0],o=e[1],c=e[2];t.hasOwnProperty(n)?t[n]+=1:t[n]=1,t.hasOwnProperty(o)?t[o]+=1:t[o]=1;var r=t[n];r%2===0?r/=-2:(r+=1,r/=2);var a=t[o];a%2===0?a/=-2:(a+=1,a/=2);t[n];return console.log(c,D),Object(u.jsx)(T.b,{id:H,children:Object(u.jsx)(P.a,{id:n+o+c,start:n,end:o,startAnchor:[{position:"right",offset:{bottomness:10*r,rightness:0}},{position:"left",offset:{bottomness:10*r,rightness:0}},{position:"bottom",offset:{bottomness:0,rightness:10*r}},{position:"top",offset:{bottomness:0,rightness:10*r}}],endAnchor:[{position:"right",offset:{bottomness:10*a,rightness:0}},{position:"left",offset:{bottomness:10*a,rightness:0}},{position:"bottom",offset:{bottomness:0,rightness:10*a}},{position:"top",offset:{bottomness:0,rightness:10*a}}],strokeWidth:3,headSize:5,lineColor:D[c].color,headColor:D[c].color,arrowBodyProps:{className:"arrow_body"},arrowHeadProps:{className:"arrow_head"},SVGcanvasProps:{className:"svg"},label:{middle:Object(u.jsx)("div",{className:"arrow_label",style:{color:D[c].color,transform:"translate(100%, 0%)"},children:c[0]})}},n+o+c)},n+o+c)}))}n(235);function z(){var e=Object(a.c)((function(e){return e.blocks.present})),t=Object(o.useState)(""),n=Object(p.a)(t,2),c=n[0],r=n[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",t+".json"),document.body.appendChild(o),o.click(),o.remove()}(e,c)},children:[Object(u.jsxs)("label",{children:["Save File:",Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save"})]})}function V(){var e=Object(a.b)();return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=document.getElementById("file").files[0];if(n){var o=new FileReader;o.readAsText(n),o.onload=function(){var t=JSON.parse(o.result);console.log(t),e({type:"loadState",payload:{state:t}})}}},children:[Object(u.jsx)("input",{type:"file",id:"file",name:"file",className:"inputfile"}),Object(u.jsx)("input",{type:"submit",value:"Load"})]})}var q=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"load_save_buttons",children:[Object(u.jsx)(z,{}),Object(u.jsx)(V,{})]}),Object(u.jsx)("div",{className:"graph",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"canvas",children:[Object(u.jsx)(I,{}),Object(u.jsx)(L,{}),Object(u.jsx)(X,{})]}),Object(u.jsx)(K,{}),Object(u.jsx)(W,{}),Object(u.jsx)(Y,{})]})}),Object(u.jsx)("div",{className:"right_buttons",children:Object(u.jsx)(E,{})}),Object(u.jsx)("div",{className:"right_panel",children:Object(u.jsx)(m,{})})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,237)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))},Z=n(27),$=n(36),ee=n(10),te=n(2),ne={caret:-1,activeId:"id1",order:["id1"],txts:{id1:JSON.stringify(Object(O.convertToRaw)(O.EditorState.createEmpty().getCurrentContent()))},splits:{id1:{slice1:0,slice2:0}},selections:{id1:{anchorKey:0,anchorOffset:0,focusKey:0,focusOffset:0}},notes:{id1:""},views:{id1:!1},positions:{id1:[0,0]},graph:{connections:[],mode:null,selectedNode:null,boxes:{}}};var oe=Object(Z.b)({name:"args",initialState:{connection_color:null,tail_selected:!1,tail_id:null},reducers:{updateColor:function(e,t){e.connection_color=t.color,e.tail_selected=!1,e.tail_id=null},updateTail:function(e,t){e.tail_selected=!0,e.tail_id=t.id},resetToDragging:function(e){e.connection_color=null,e.tail_selected=!1,e.tail_id=null}}}),ce=oe.actions,re=(ce.updateColor,ce.updateTail,ce.resetToDragging,oe.reducer),ae=Object(Z.a)({reducer:{blocks:x()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loadState":return t.payload.state;case"updateId":return Object(te.a)(Object(te.a)({},e),{},{caret:t.payload.caret,activeId:t.payload.id});case"updateText":return Object(te.a)(Object(te.a)({},e),{},{txts:Object(te.a)(Object(te.a)({},e.txts),{},Object(ee.a)({},t.payload.id,t.payload.txt)),splits:Object(te.a)(Object(te.a)({},e.splits),{},Object(ee.a)({},t.payload.id,t.payload.split)),selections:Object(te.a)(Object(te.a)({},e.selections),{},Object(ee.a)({},t.payload.id,t.payload.selection))});case"updateSelection":return Object(te.a)(Object(te.a)({},e),{},{splits:Object(te.a)(Object(te.a)({},e.splits),{},Object(ee.a)({},t.payload.id,t.payload.split)),selections:Object(te.a)(Object(te.a)({},e.selections),{},Object(ee.a)({},t.payload.id,t.payload.selection))});case"splitText":var n,o,c=t.payload.id,r=e.order.indexOf(c),a=Object(Z.c)(),s=e.splits[c].slice1,i=e.splits[c].slice2,l=Object($.a)(e.order);l.splice(r+1,0,a);var d=e.positions[c],u=[d[0],d[1]+100];return Object(te.a)(Object(te.a)({},e),{},{activeId:a,order:l,txts:Object(te.a)(Object(te.a)({},e.txts),{},(n={},Object(ee.a)(n,c,s),Object(ee.a)(n,a,i),n)),splits:Object(te.a)(Object(te.a)({},e.splits),{},(o={},Object(ee.a)(o,c,{slice1:s,slice2:s}),Object(ee.a)(o,a,{slice1:i,slice2:i}),o)),notes:Object(te.a)(Object(te.a)({},e.notes),{},Object(ee.a)({},a,"")),views:Object(te.a)(Object(te.a)({},e.views),{},Object(ee.a)({},a,!1)),positions:Object(te.a)(Object(te.a)({},e.positions),{},Object(ee.a)({},a,u))});case"mergeText":var b=t.payload.id,j=e.order.indexOf(b);if(0===j)return e;var p=e.order[j-1],f=Object($.a)(e.order);f.splice(j,1);var g=e.graph.connections.map((function(e){return e.map((function(e){return e===b?p:e}))})).filter((function(e){return e[0]!==e[1]})),y=new Set(g.map((function(e){return e.join()})));g=Object($.a)(y).map((function(e){return e.split(",")}));var h=Object(O.convertFromRaw)(JSON.parse(e.txts[p])),m=Object(O.convertFromRaw)(JSON.parse(e.txts[b])),v=O.EditorState.createWithContent(m).getSelection(),x=v.getAnchorKey(),S=O.SelectionState.createEmpty("blockkey").merge({anchorKey:x,anchorOffset:0,focusKey:x,focusOffset:0}),C=O.Modifier.replaceWithFragment(m,S,h.getBlockMap());return Object(te.a)(Object(te.a)({},e),{},{activeId:p,order:f,txts:Object(te.a)(Object(te.a)({},e.txts),{},Object(ee.a)({},p,JSON.stringify(Object(O.convertToRaw)(C)))),splits:Object(te.a)(Object(te.a)({},e.splits),{},Object(ee.a)({},p,{slice1:0,slice2:0})),notes:Object(te.a)(Object(te.a)({},e.notes),{},Object(ee.a)({},p,e.notes[p]+e.notes[b])),graph:Object(te.a)(Object(te.a)({},e.graph),{},{connections:g})});case"toggleNote":var A=t.payload.id;return Object(te.a)(Object(te.a)({},e),{},{views:Object(te.a)(Object(te.a)({},e.views),{},Object(ee.a)({},A,!e.views[A]))});case"updateNote":var k=t.payload.id,w=document.activeElement;return Object(te.a)(Object(te.a)({},e),{},{notes:Object(te.a)(Object(te.a)({},e.notes),{},Object(ee.a)({},k,w.value))});case"updatePosition":var E=t.payload,N=E.id,T=E.x,M=E.y;return Object(te.a)(Object(te.a)({},e),{},{positions:Object(te.a)(Object(te.a)({},e.positions),{},Object(ee.a)({},N,[T,M]))});case"setMode":return Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{mode:t.payload.label,selectedNode:t.payload.id})});case"resetMode":return Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{mode:null,selectedNode:null}),mode:"",id:null});case"setBox":var R=t.payload,D=R.label,_=R.id;return Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{boxes:Object(te.a)(Object(te.a)({},e.graph.boxes),{},Object(ee.a)({},_,D))})});case"removeBox":var B=t.payload.id,K=Object(te.a)({},e.graph.boxes);return delete K[B],Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{boxes:Object(te.a)({},K)})});case"addConnection":return e.graph.connections.filter((function(e){return e.toString()===t.payload.connection.toString()})).length>0&&e.graph.connections.length>0?e:Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{connections:[].concat(Object($.a)(e.graph.connections),[t.payload.connection])})});case"deleteConnection":var F=e.graph.connections.filter((function(e){return e[0]+e[1]+e[2]!==t.payload.id}));return Object(te.a)(Object(te.a)({},e),{},{graph:Object(te.a)(Object(te.a)({},e.graph),{},{connections:F})});default:return e}}),{filter:Object(v.excludeAction)(["updateId","updateCaret","updatePosition","toggleNote","updateNote","resetMode","setMode","updateSelection"])}),args:re}});r.a.render(Object(u.jsx)(a.a,{store:ae,children:Object(u.jsx)(q,{})}),document.getElementById("root")),Q()},49:function(e,t,n){}},[[236,1,2]]]);
//# sourceMappingURL=main.8f5fd638.chunk.js.map