(this["webpackJsonplove-the-args"]=this["webpackJsonplove-the-args"]||[]).push([[0],{105:function(e,t,n){},114:function(e,t,n){},120:function(e,t,n){},226:function(e,t,n){},229:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(26),r=n.n(o),a=(n(114),n(4)),s=(n(120),n(11)),i=(n(62),n(0)),l="group-menu";function d(){var e=document.getElementsByClassName("selected"),t=!1,n=!1;return e.length>0&&(t=e[0].id,n=e[e.length-1].id),{start:t,end:n}}function u(){var e=Object(a.b)();return Object(i.jsxs)(s.a,{id:l,className:"context-menu",hideOnLeave:!0,children:[Object(i.jsx)(s.c,{onClick:function(){var t=d(),n=t.start,c=t.end;n&&c&&e({type:"groupIds",payload:{start:n,end:c}})},children:"Group"}),Object(i.jsx)(s.c,{onClick:function(){var t=d(),n=t.start,c=t.end;n&&c&&e({type:"ungroupIds",payload:{start:n,end:c}})},children:"UnGroup"})]})}var b={"\u05de\u05e7\u05e8\u05d4":{color:"#222255",types:["arrow","box"]},"\u05d3\u05d9\u05df":{color:"#222255",types:["arrow"]},"\u05d8\u05e2\u05dd":{color:"#222255",types:["arrow"]},"\u05db\u05d5\u05ea\u05e8\u05ea":{color:"#222255",types:["arrow","box"]},"\u05de\u05e2\u05e9\u05d4":{color:"#222255",types:["arrow","box"]},"\u05db\u05dc\u05dc":{color:"#222255",types:["arrow","box"]},"\u05d0\u05de\u05d9\u05e8\u05d4":{color:"#ee6677",types:["arrow","box"]},"\u05e9\u05d0\u05dc\u05d4":{color:"#ee6677",types:["arrow","box"]},"\u05ea\u05e9\u05d5\u05d1\u05d4":{color:"#ee6677",types:["arrow"]},"\u05e7\u05d5\u05e9\u05d9\u05d0":{color:"#ee6677",types:["arrow"]},"\u05ea\u05d9\u05e8\u05d5\u05e5":{color:"#ee6677",types:["arrow"]},"\u05e8\u05d0\u05d9\u05d4":{color:"#ee6677",types:["arrow"]},"\u05e1\u05d9\u05d5\u05e2":{color:"#ee6677",types:["arrow"]},"\u05d0\u05d2\u05d3\u05ea\u05d0":{color:"#ee6677",types:["arrow","box"]},"\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0":{color:"#ee6677",types:["arrow"]},"\u05de\u05d7\u05dc\u05d5\u05e7\u05ea":{color:"#ee6677",types:["arrow","box"]}},j={Tannaitic:["\u05de\u05e7\u05e8\u05d4","\u05d3\u05d9\u05df","\u05d8\u05e2\u05dd","\u05db\u05d5\u05ea\u05e8\u05ea","\u05de\u05e2\u05e9\u05d4","\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0","\u05db\u05dc\u05dc"],Talmud:["\u05d0\u05de\u05d9\u05e8\u05d4","\u05e9\u05d0\u05dc\u05d4","\u05ea\u05e9\u05d5\u05d1\u05d4","\u05e7\u05d5\u05e9\u05d9\u05d0","\u05ea\u05d9\u05e8\u05d5\u05e5","\u05e8\u05d0\u05d9\u05d4","\u05e1\u05d9\u05d5\u05e2","\u05d0\u05d2\u05d3\u05ea\u05d0","\u05d0\u05d5\u05e7\u05d9\u05de\u05ea\u05d0","\u05de\u05d7\u05dc\u05d5\u05e7\u05ea"]},p="node_menu";function O(){var e=function(e,t,n){t.target;var c=t.label,o=t.type,r=t.dispatch,a=n.firstChild.id;r("arrow"===o?{type:"setMode",payload:{label:c,id:a}}:{type:"setBox",payload:{label:c,id:a}})},t=Object(a.b)();return Object(i.jsxs)(s.a,{id:p,className:"context-menu",hideOnLeave:!0,children:[Object(i.jsx)(s.c,{onClick:function(e,t,n){t.target;(0,t.dispatch)({type:"removeBox",payload:{id:n.firstChild.id}})},data:{dispatch:t},children:"Remove Box"},"remove"),Object.keys(j).map((function(n){return Object(i.jsx)(s.d,{title:n,children:j[n].map((function(n){return Object(i.jsx)(s.d,{title:n,children:b[n].types.map((function(c){return Object(i.jsx)(s.c,{onClick:e,data:{label:n,type:c,dispatch:t},children:c},c)}))},n)}))},n)}))]})}var f="connection_menu";function h(){var e=Object(a.b)();return Object(i.jsx)(s.a,{id:f,children:Object(i.jsx)(s.c,{onClick:function(e,t,n){var c=t.target,o=t.reducerType;(0,t.dispatch)({type:o,payload:{id:c.parentElement.parentElement.id}})},data:{reducerType:"deleteConnection",dispatch:e},children:"Delete"},"deleteConnection")})}function g(e){return e!==document&&(e.classList.contains("react-contextmenu-item")||e.classList.contains("node")?e:g(e.parentNode))}function y(e,t,n){var c=g(e.target);!1===c?n({type:"resetMode"}):"react-contextmenu-item"===c.classList[0]||"node"===c.classList[0]&&(null!==t.selectedNode&&(t.selectedNode===c.id||t.connections.includes([t.selectedNode,c.id])||n({type:"addConnection",payload:{connection:[t.selectedNode,c.id,t.mode]}})),n({type:"resetMode"}))}function m(){var e=Object(a.c)((function(e){return e.blocks.present.graph})),t=Object(a.b)();return Object(c.useEffect)((function(){function n(n){return y(n,e,t)}return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e]),Object(i.jsx)(i.Fragment,{})}var v=n(29),x=n(28),S=n.n(x),C=n(109),k=n(107),A=n.n(k),N=(n(51),n(108)),w=n.n(N);function E(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.notes[t]})),c=Object(a.c)((function(e){return e.blocks.present.views[t]})),o=Object(a.b)();return!1===c||void 0===c?Object(i.jsx)("div",{}):Object(i.jsx)(A.a,{id:t,className:"note",onSelect:function(){return o({type:"updateNote",payload:{id:t}})},onChange:function(){return o({type:"updateNote",payload:{id:t}})},onClick:function(e){if(e.ctrlKey||e.metaKey||e.shiftKey)return 0;o({type:"updateNote",payload:{id:t}})},value:n})}function M(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.views[t]})),c=Object(a.b)();return Object(i.jsx)(w.a,{checked:n,onChange:function(){return c({type:"toggleNote",payload:{id:t}})},uncheckedIcon:!1,checkedIcon:!1,className:"switch",onColor:"#222255",onHandleColor:"#ffffff",offColor:"#888888",boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.2)",height:10,width:20})}var T=n(5);function R(e){var t=e.getSelection().getAnchorOffset(),n=e.getCurrentContent().getPlainText().length,c=e.getSelection().getAnchorKey(),o=e.getCurrentContent().getLastBlock().key,r=e.getCurrentContent().getFirstBlock().key,a=T.SelectionState.createEmpty("blockkey").merge({anchorKey:c,anchorOffset:t,focusOffset:n,focusKey:o}),s=T.SelectionState.createEmpty("blockkey").merge({anchorKey:r,anchorOffset:0,focusKey:c,focusOffset:t}),i=T.Modifier.removeRange(e.getCurrentContent(),s,"forward"),l=T.Modifier.removeRange(e.getCurrentContent(),a,"forward");return{slice1:JSON.stringify(Object(T.convertToRaw)(l)),slice2:JSON.stringify(Object(T.convertToRaw)(i))}}function B(e){var t=e.getSelection();return{anchorKey:t.getAnchorKey(),anchorOffset:t.getAnchorOffset(),focusKey:t.getFocusKey(),focusOffset:t.getFocusOffset(),isBackward:t.isBackward}}function I(e){var t=e.anchorKey,n=e.anchorOffset,c=e.focusKey,o=e.focusOffset,r=e.isBackward;return T.SelectionState.createEmpty("blockkey").merge({anchorKey:t,anchorOffset:n,focusKey:c,focusOffset:o,isBackward:r})}var _={TANNA:{backgroundColor:"#BBCCEE"},AMORA:{backgroundColor:"#ccddaa"},STAM:{backgroundColor:"#ffcccc"},AMORA_MIDRASH:{backgroundColor:"#BBCCEE",borderBottom:".2em solid #228833"},STAM_MIDRASH:{backgroundColor:"#BBCCEE",borderBottom:".2em solid #ee6677"},STAM_AMORA:{backgroundColor:"#ccddaa",borderBottom:".2em solid #ee6677"},TANAKH:{fontWeight:"bold"},CLEAR:{color:"black"}};function D(e){var t=e.id,n=Object(a.c)((function(e){return e.blocks.present.txts[t]})),o=Object(a.b)(),r=Object(a.c)((function(e){return e.blocks.present.selections[t]})),s=T.EditorState.createWithContent(Object(T.convertFromRaw)(JSON.parse(n))),l=null;l=null==r?T.SelectionState.createEmpty():I(r);var d=T.EditorState.forceSelection(s,l),u=Object(c.useState)((function(){return T.EditorState.forceSelection(s,l)})),b=Object(v.a)(u,2),j=b[0],p=b[1];n!==JSON.stringify(Object(T.convertToRaw)(j.getCurrentContent()))&&p(d);var O=Object(a.c)((function(e){return e.blocks.present.activeId})),f=Object(c.useRef)();return Object(c.useEffect)((function(){O===t&&f.current.focus()})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"text-editor",id:t,onBlur:function(){return o({type:"updateId",payload:{id:null}})},children:Object(i.jsx)(T.Editor,{ref:f,customStyleMap:_,editorState:j,onChange:function(e){var n=e.getCurrentContent().getPlainText()===j.getCurrentContent().getPlainText();p(e),o(n?{type:"updateSelection",payload:{id:t,split:R(e),selection:B(e)}}:{type:"updateText",payload:{id:t,txt:JSON.stringify(Object(T.convertToRaw)(e.getCurrentContent())),split:R(e),selection:B(e)}})}})})})}function K(){var e=Object(a.c)((function(e){return e.blocks.present.order})),t=Object(c.useState)(new Set),n=Object(v.a)(t,2),o=(n[0],n[1],e.map((function(e){return Object(i.jsxs)("div",{className:"block",children:[Object(i.jsx)(D,{id:e}),Object(i.jsx)(M,{id:e}),Object(i.jsx)(E,{id:e})]},e)})));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.b,{id:l,holdToDisplay:-1,children:Object(i.jsx)(S.a,{handle:"#drag-bar-blocks",children:Object(i.jsxs)("div",{id:"blocks",children:[Object(i.jsx)("div",{id:"drag-bar-blocks"}),Object(i.jsx)("div",{id:"blocks-selecting-area",children:o})]})})}),Object(i.jsx)(C.a,{dragContainer:"#blocks-selecting-area",selectableTargets:[".text-editor"],selectByClick:!1,selectFromInside:!0,continueSelect:!1,hitRate:5,onSelect:function(e){e.added.forEach((function(e){e.classList.add("selected"),e.style.backgroundColor="lightgrey"})),e.removed.forEach((function(e){e.classList.remove("selected"),e.style.backgroundColor="white"}))}})]})}n(226);var F=n(30),J=n.n(F),L=function(e,t){var n=e.getCurrentContent(),c=t.reduce((function(t,n){return T.Modifier.removeInlineStyle(t,e.getSelection(),n)}),n);return T.EditorState.push(e,c,"change-inline-style")},P=["TANNA","AMORA","AMORA_MIDRASH","STAM","STAM_MIDRASH","STAM_AMORA","CLEAR","TANAKH"],H=["TANNA","AMORA","AMORA_MIDRASH","STAM","STAM_MIDRASH","STAM_AMORA","CLEAR"];function W(){var e=Object(a.b)();return Object(i.jsx)("button",{type:"button",onMouseDown:function(t){if(t.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var n=document.activeElement.parentElement.parentElement.parentElement.id;e({type:"mergeText",payload:{id:n}})}},children:"merge"})}function U(){var e=Object(a.b)();return Object(i.jsx)("button",{type:"button",onMouseDown:function(t){if(t.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var n=document.activeElement.parentElement.parentElement.parentElement.id;e({type:"splitText",payload:{id:n}})}},children:"split"})}function G(){var e=Object(a.b)();return Object(i.jsx)("button",{type:"button",onClick:function(){return e(F.ActionCreators.redo())},children:"redo"})}function X(){var e=Object(a.b)();return Object(i.jsx)("button",{type:"button",onClick:function(){e(F.ActionCreators.undo())},children:"undo"})}function Y(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.blocks.present.txts})),c=Object(a.c)((function(e){return e.blocks.present.selections}));return Object(i.jsx)("button",{className:"historical-layer-button",style:_[e.dataStyle],type:"button","data-style":e.dataStyle,onMouseUp:function(e){return e.preventDefault()},onMouseDown:function(o){if(o.preventDefault(),"notranslate public-DraftEditor-content"===document.activeElement.getAttribute("class")){var r=o.currentTarget.getAttribute("data-style"),a=document.activeElement.parentElement.parentElement.parentElement.id,s=Object(T.convertFromRaw)(JSON.parse(n[a])),i=I(c[a]),l=T.EditorState.createWithContent(s);l=T.EditorState.acceptSelection(l,i);var d=JSON.stringify(l.getCurrentContent().getBlockMap());if(e.clearer?l=L(l,P):e.layerable||(l=function(e){return L(e,H)}(l)),l=T.RichUtils.toggleInlineStyle(l,r),d!=JSON.stringify(l.getCurrentContent().getBlockMap())){var u=R(l),b=l.getCurrentContent().getFirstBlock().getKey();i=I({anchorKey:b,anchorOffset:0,focusKey:b,focusOffset:0,isBackward:!1}),l=T.EditorState.forceSelection(l,i),t({type:"updateText",payload:{id:a,txt:JSON.stringify(Object(T.convertToRaw)(l.getCurrentContent())),split:u,selection:B(l)}})}}},children:e.name})}function z(){return Object(i.jsxs)("div",{className:"header_buttons",children:[Object(i.jsxs)("div",{id:"command-buttons",children:[Object(i.jsx)(X,{}),Object(i.jsx)(G,{}),Object(i.jsx)(W,{}),Object(i.jsx)(U,{})]}),Object(i.jsxs)("div",{id:"historical-layer-buttons",children:[Object(i.jsx)(Y,{dataStyle:"TANNA",name:"Tannaitic"}),Object(i.jsx)(Y,{dataStyle:"AMORA",name:"Amoraic"}),Object(i.jsx)(Y,{dataStyle:"STAM",name:"Stam"}),Object(i.jsx)(Y,{dataStyle:"AMORA_MIDRASH",name:"T from A"}),Object(i.jsx)(Y,{dataStyle:"STAM_MIDRASH",name:"T from S"}),Object(i.jsx)(Y,{dataStyle:"STAM_AMORA",name:"A from S"}),Object(i.jsx)(Y,{dataStyle:"TANAKH",name:"Tanakh",layerable:!0}),Object(i.jsx)(Y,{dataStyle:"CLEAR",name:"Clear",clearer:!0})]})]})}n(229),n(105);function V(){return Object(a.c)((function(e){return e.blocks.present.order})).map((function(e){return Object(i.jsx)(q,{id:e,groupPosition:[0,0]},e)}))}function q(e){var t=e.id,n=Object(a.b)(),c=Object(a.c)((function(e){return e.blocks.present.positions[t]})),o=Object(a.c)((function(e){return e.blocks.present.txts[t]})),r=Object(a.c)((function(e){return e.blocks.present.graph.boxes[t]})),l={};Object(a.c)((function(e){return e.blocks.present.graph.selectedNode}))===t&&(l={borderColor:"gold",backgroundColor:"gold"});var d="";r?(d=b[r].color,l.borderColor=d):d="";var u=function(e,c){n({type:"updatePosition",payload:{id:t,x:c.lastX+c.deltaX,y:c.lastY+c.deltaY}})},j=c[0],O=c[1];return Object(i.jsx)(s.b,{id:p,holdToDisplay:-1,children:Object(i.jsx)(S.a,{onStop:u,onDrag:u,defaultPosition:{x:j,y:O},bounds:{left:0,top:0},children:Object(i.jsxs)("fieldset",{className:"node single-node",id:t,style:l,children:[Object(i.jsx)("legend",{className:"label",style:{color:d},children:r}),Object(i.jsx)(T.Editor,{readOnly:!0,customStyleMap:_,editorState:T.EditorState.createWithContent(Object(T.convertFromRaw)(JSON.parse(o))),onChange:function(){}})]})},t)},t)}var Q=n(49),Z=n.n(Q);function $(){for(var e=Object(a.c)((function(e){return e.blocks.present.order})),t=(Object(a.c)((function(e){return e.blocks.present.positions})),Object(a.c)((function(e){return e.blocks.present.groups})),{}),n=0;n<e.length-1;n+=1)t[e[n]]=e[n+1];var c=[];return Object.keys(t).forEach((function(e){var n=e,o=t[e];c.push(Object(i.jsx)(Z.a,{id:n+o,start:n,end:o,strokeWidth:1,lineColor:"grey",headColor:"grey",dashness:!0},n+o))})),c}n(232);function ee(){var e=Object(a.c)((function(e){return e.blocks.present.graph.connections})),t=(Object(a.c)((function(e){return e.blocks.present.positions})),Object(a.c)((function(e){return e.blocks.present.groups})),{});return e.map((function(e){var n=e[0],c=e[1],o=e[2];t.hasOwnProperty(n)?t[n]+=1:t[n]=1,t.hasOwnProperty(c)?t[c]+=1:t[c]=1;var r=t[n];r%2===0?r/=-2:(r+=1,r/=2);var a=t[c];a%2===0?a/=-2:(a+=1,a/=2);t[n];return Object(i.jsx)(s.b,{id:f,children:Object(i.jsx)(Z.a,{id:n+c+o,start:n,end:c,startAnchor:[{position:"right",offset:{bottomness:10*r,rightness:0}},{position:"left",offset:{bottomness:10*r,rightness:0}},{position:"bottom",offset:{bottomness:0,rightness:10*r}},{position:"top",offset:{bottomness:0,rightness:10*r}}],endAnchor:[{position:"right",offset:{bottomness:10*a,rightness:0}},{position:"left",offset:{bottomness:10*a,rightness:0}},{position:"bottom",offset:{bottomness:0,rightness:10*a}},{position:"top",offset:{bottomness:0,rightness:10*a}}],strokeWidth:2,headSize:3,lineColor:b[o].color,headColor:b[o].color,arrowBodyProps:{className:"arrow_body"},arrowHeadProps:{className:"arrow_head"},SVGcanvasProps:{className:"svg"},label:{middle:Object(i.jsx)("div",{className:"arrow_label",style:{color:b[o].color,transform:"translate(100%, 0%)"},children:o[0]+o[1]})}},n+c+o)},n+c+o)}))}var te=n(16);function ne(){var e=Object(a.c)((function(e){return e.blocks.present.positions})),t=Object(a.c)((function(e){return e.blocks.present.groups})),n=Object(a.c)((function(e){return e.blocks.present.order})),c=Object(a.c)((function(e){return e.blocks.present.graph.selectedNode})),o=Object(a.c)((function(e){return e.blocks.present.graph.boxes}));Object(a.c)((function(e){return e.blocks.present.txts}));return Object.keys(t).map((function(r){var a=t[r],l=function(e,t){var n=Math.min.apply(Math,Object(te.a)(e.map((function(e){return Math.max(0,t[e][0]-20)})))),c=Math.min.apply(Math,Object(te.a)(e.map((function(e){return Math.max(0,t[e][1]-20)})))),o=Math.max.apply(Math,Object(te.a)(e.map((function(e){var n=0;try{n=document.getElementById(e).offsetWidth}catch(c){console.log(c)}return n+t[e][0]+20}))));return{height:Math.max.apply(Math,Object(te.a)(e.map((function(e){var n=0;try{n=document.getElementById(e).offsetHeight}catch(c){console.log(c)}return n+t[e][1]+20}))))-c,width:o-n,top:c,left:n}}(function(e,t){for(var n=[],c=!1,o=0;o<e.length;o+=1){var r=e[o];t[0]===r?(c=!0,n.push(r)):r===t[1]?(c=!1,n.push(r)):!0===c&&n.push(r)}return n}(n,a),e),d=l.height,u=l.width,j={position:"absolute",top:l.top,left:l.left,height:d,width:u};c===r&&Object.assign(j,{borderColor:"gold",backgroundColor:"gold"});var O="",f=o[r];return f?(O=b[f].color,j.borderColor=O):O="",Object(i.jsx)(s.b,{id:p,holdToDisplay:-1,children:Object(i.jsx)("fieldset",{id:r,className:"node group-node",style:j,children:Object(i.jsx)("legend",{className:"label",style:{color:O},children:f})})},r)}))}function ce(){return Object(i.jsx)(S.a,{handle:".drag-bar",children:Object(i.jsxs)("div",{className:"graph",children:[Object(i.jsx)("div",{className:"drag-bar"}),Object(i.jsxs)("div",{className:"canvas",children:[Object(i.jsx)(V,{}),Object(i.jsx)(ne,{})]}),Object(i.jsx)($,{}),Object(i.jsx)(ee,{})]})})}n(233);function oe(){var e=Object(a.c)((function(e){return e.blocks.present})),t=Object(c.useState)(""),n=Object(v.a)(t,2),o=n[0],r=n[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),c=document.createElement("a");c.setAttribute("href",n),c.setAttribute("download",t+".json"),document.body.appendChild(c),c.click(),c.remove()}(e,o)},children:[Object(i.jsxs)("label",{children:["Save File ",Object(i.jsx)("input",{type:"text",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsx)("input",{type:"submit",value:"Save"})]})}function re(){var e=Object(a.b)();return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=document.getElementById("file").files[0];if(n){var c=new FileReader;c.readAsText(n),c.onload=function(){var t=JSON.parse(c.result);console.log(t),e({type:"loadState",payload:{state:t}})}}},children:[Object(i.jsx)("input",{type:"file",id:"file",name:"file",className:"inputfile"}),Object(i.jsx)("input",{type:"submit",value:"Load"})]})}var ae=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(O,{}),Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsxs)("div",{className:"top",children:[Object(i.jsxs)("div",{className:"load_save_buttons",children:[Object(i.jsx)(oe,{}),Object(i.jsx)(re,{})]}),Object(i.jsx)("div",{className:"right_buttons",children:Object(i.jsx)(z,{})})]}),Object(i.jsxs)("div",{className:"bottom",children:[Object(i.jsx)("div",{className:"left-panel",children:Object(i.jsx)(ce,{})}),Object(i.jsx)("div",{className:"right-panel",children:Object(i.jsx)(K,{})})]})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))},ie=n(27),le=n(10),de=n(2),ue={caret:-1,activeId:"id1",order:["id1"],groups:{},txts:{id1:JSON.stringify(Object(T.convertToRaw)(T.EditorState.createEmpty().getCurrentContent()))},splits:{id1:{slice1:0,slice2:0}},selections:{id1:null},notes:{id1:""},views:{id1:!1},positions:{id1:[0,0]},graph:{connections:[],mode:null,selectedNode:null,boxes:{}}};var be=Object(ie.b)({name:"args",initialState:{connection_color:null,tail_selected:!1,tail_id:null},reducers:{updateColor:function(e,t){e.connection_color=t.color,e.tail_selected=!1,e.tail_id=null},updateTail:function(e,t){e.tail_selected=!0,e.tail_id=t.id},resetToDragging:function(e){e.connection_color=null,e.tail_selected=!1,e.tail_id=null}}}),je=be.actions,pe=(je.updateColor,je.updateTail,je.resetToDragging,be.reducer),Oe=Object(ie.a)({reducer:{blocks:J()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loadState":var n=t.payload.state.positions,c=Object.keys(n).reduce((function(e,t){return Math.min(n[t][0],e)}),0),o=Object.keys(n).reduce((function(e,t){return Math.min(n[t][1],e)}),0);Object.keys(n).map((function(e,t){return n[e]=[n[e][0]-c,n[e][1]-o],n}));var r=t.payload.state.groups||{};return Object(de.a)(Object(de.a)({},t.payload.state),{},{groups:r,positions:n});case"updateId":return Object(de.a)(Object(de.a)({},e),{},{activeId:t.payload.id});case"updateText":return Object(de.a)(Object(de.a)({},e),{},{txts:Object(de.a)(Object(de.a)({},e.txts),{},Object(le.a)({},t.payload.id,t.payload.txt)),splits:Object(de.a)(Object(de.a)({},e.splits),{},Object(le.a)({},t.payload.id,t.payload.split)),selections:Object(de.a)(Object(de.a)({},e.selections),{},Object(le.a)({},t.payload.id,t.payload.selection))});case"updateSelection":return Object(de.a)(Object(de.a)({},e),{},{activeId:t.payload.id,splits:Object(de.a)(Object(de.a)({},e.splits),{},Object(le.a)({},t.payload.id,t.payload.split)),selections:Object(de.a)(Object(de.a)({},e.selections),{},Object(le.a)({},t.payload.id,t.payload.selection))});case"splitText":var a=function(){var n,c,o=t.payload.id,r=e.order.indexOf(o),a=Object(ie.c)(),s=e.splits[o].slice1,i=e.splits[o].slice2,l=Object(te.a)(e.order);l.splice(r+1,0,a);for(var d=Object(T.convertFromRaw)(JSON.parse(s)).getPlainText().length,u=Object(T.convertFromRaw)(JSON.parse(i)).getPlainText().length,b=document.getElementsByClassName("node").namedItem(o).clientHeight*d/(d+u+.01),j=e.positions[o],p=[j[0],j[1]+b+50],O=Object.values(e.positions),f=0;O.filter((function(e){return JSON.stringify(e)===JSON.stringify(p)})).length>0&&(f+=1,p[0]+=15,p[1]+=15,!(f>5)););return{v:Object(de.a)(Object(de.a)({},e),{},{activeId:a,order:l,txts:Object(de.a)(Object(de.a)({},e.txts),{},(n={},Object(le.a)(n,o,s),Object(le.a)(n,a,i),n)),splits:Object(de.a)(Object(de.a)({},e.splits),{},(c={},Object(le.a)(c,o,{slice1:s,slice2:s}),Object(le.a)(c,a,{slice1:i,slice2:i}),c)),notes:Object(de.a)(Object(de.a)({},e.notes),{},Object(le.a)({},a,"")),views:Object(de.a)(Object(de.a)({},e.views),{},Object(le.a)({},a,!1)),positions:Object(de.a)(Object(de.a)({},e.positions),{},Object(le.a)({},a,p))})}}();if("object"===typeof a)return a.v;case"mergeText":var s=t.payload.id,i=e.order.indexOf(s);if(0===i)return e;var l=e.order[i-1],d=Object(te.a)(e.order);d.splice(i,1);var u=e.graph.connections.map((function(e){return e.map((function(e){return e===s?l:e}))})).filter((function(e){return e[0]!==e[1]})),b=new Set(u.map((function(e){return e.join()})));u=Object(te.a)(b).map((function(e){return e.split(",")}));var j=Object(T.convertFromRaw)(JSON.parse(e.txts[l])),p=Object(T.convertFromRaw)(JSON.parse(e.txts[s])),O=T.EditorState.createWithContent(p).getSelection(),f=O.getAnchorKey(),h=T.SelectionState.createEmpty("blockkey").merge({anchorKey:f,anchorOffset:0,focusKey:f,focusOffset:0}),g=T.Modifier.replaceWithFragment(p,h,j.getBlockMap()),y=e.groups,m=Object(de.a)({},e.graph.boxes),v={};return Object.keys(y).map((function(t){if(s===y[t][0]?v[t]=[e.order[i+1],y[t][1]]:s===y[t][1]?v[t]=[y[t][0],e.order[i-1]]:v[t]=y[t],v[t][0]===v[t][1]){delete v[t],delete m[t];var n=Object(te.a)(u);u=[],n.forEach((function(e){t!==e[0]&&t!==e[1]&&u.push(e)}))}})),Object(de.a)(Object(de.a)({},e),{},{activeId:l,order:d,txts:Object(de.a)(Object(de.a)({},e.txts),{},Object(le.a)({},l,JSON.stringify(Object(T.convertToRaw)(g)))),splits:Object(de.a)(Object(de.a)({},e.splits),{},Object(le.a)({},l,{slice1:0,slice2:0})),notes:Object(de.a)(Object(de.a)({},e.notes),{},Object(le.a)({},l,e.notes[l]+e.notes[s])),graph:Object(de.a)(Object(de.a)({},e.graph),{},{connections:u,boxes:m}),groups:v});case"toggleNote":var x=t.payload.id;return Object(de.a)(Object(de.a)({},e),{},{views:Object(de.a)(Object(de.a)({},e.views),{},Object(le.a)({},x,!e.views[x]))});case"updateNote":var S=t.payload.id,C=document.activeElement;return Object(de.a)(Object(de.a)({},e),{},{notes:Object(de.a)(Object(de.a)({},e.notes),{},Object(le.a)({},S,C.value))});case"updatePosition":var k=t.payload,A=k.id,N=k.x,w=k.y;return Object(de.a)(Object(de.a)({},e),{},{positions:Object(de.a)(Object(de.a)({},e.positions),{},Object(le.a)({},A,[N,w]))});case"setMode":return Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{mode:t.payload.label,selectedNode:t.payload.id})});case"resetMode":return Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{mode:null,selectedNode:null}),mode:"",id:null});case"setBox":var E=t.payload,M=E.label,R=E.id;return Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{boxes:Object(de.a)(Object(de.a)({},e.graph.boxes),{},Object(le.a)({},R,M))})});case"removeBox":var B=t.payload.id,I=Object(de.a)({},e.graph.boxes);return delete I[B],Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{boxes:Object(de.a)({},I)})});case"addConnection":return e.graph.connections.filter((function(e){return e.toString()===t.payload.connection.toString()})).length>0&&e.graph.connections.length>0?e:Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{connections:[].concat(Object(te.a)(e.graph.connections),[t.payload.connection])})});case"deleteConnection":var _=e.graph.connections.filter((function(e){return e[0]+e[1]+e[2]!==t.payload.id}));return Object(de.a)(Object(de.a)({},e),{},{graph:Object(de.a)(Object(de.a)({},e.graph),{},{connections:_})});case"groupIds":var D=t.payload,K=D.start,F=D.end,J=e.order,L=e.groups,P=Object(ie.c)();if(K===F)return e;var H=J.indexOf(K),W=J.indexOf(F),U=J.slice(H,W+1),G=new Set;Object.keys(L).forEach((function(e){var t=L[e],n=J.indexOf(t[0]),c=J.indexOf(t[1]);J.slice(n,c+1).forEach((function(e){return G.add(e)}))}));var X=!1;return U.forEach((function(e){G.has(e)&&(X=!0)})),X?e:Object(de.a)(Object(de.a)({},e),{},{groups:Object(de.a)(Object(de.a)({},e.groups),{},Object(le.a)({},P,[K,F]))});case"ungroupIds":var Y=t.payload,z=Y.start,V=Y.end,q=e.order,Q=e.groups,Z=q.indexOf(z),$=q.indexOf(V),ee=q.slice(Z,$+1),ne=Object(de.a)({},Q),ce=Object(de.a)({},e.graph.boxes),oe=Object(te.a)(e.graph.connections);return Object.keys(Q).forEach((function(t){var n=Q[t],c=q.indexOf(n[0]),o=q.indexOf(n[1]);q.slice(c,o+1).filter((function(e){return-1!==ee.indexOf(e)})).length>0&&(delete ne[t],delete ce[t],oe=[],Object(te.a)(e.graph.connections).forEach((function(e){t!==e[0]&&t!==e[1]&&oe.push(e)})))})),Object(de.a)(Object(de.a)({},e),{},{groups:ne,graph:Object(de.a)(Object(de.a)({},e.graph),{},{boxes:ce,connections:oe})});default:return e}}),{filter:Object(F.excludeAction)(["updateId","updateCaret","updatePosition","toggleNote","updateNote","resetMode","setMode","updateSelection"])}),args:pe}});r.a.render(Object(i.jsx)(a.a,{store:Oe,children:Object(i.jsx)(ae,{})}),document.getElementById("root")),se()},51:function(e,t,n){},62:function(e,t,n){}},[[234,1,2]]]);
//# sourceMappingURL=main.e3e9d7d7.chunk.js.map