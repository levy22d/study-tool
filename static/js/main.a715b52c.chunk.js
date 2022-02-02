(this["webpackJsonpstudy-tool"]=this["webpackJsonpstudy-tool"]||[]).push([[0],{33:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(8),o=c.n(s),i=(c(33),c(7)),r=c(28),l=c(6),d=c(2),j=c(15),b=c(5),u=c(3),m=c(27),O=(c(34),c(1));var h=function(e){return Object(O.jsxs)("div",{className:"list-items-and-title",children:[Object(O.jsx)("h2",{className:"todo-title",children:"To Do"}),e.toDos.length>0?e.toDos.map((function(t){return Object(O.jsxs)("form",{className:"list-items",children:[Object(O.jsx)(m.a,{icon:Object(O.jsx)(u.d,{className:"svg","data-type":"svg"}),className:"todo-checkbox","aria-label":"checkbox",defaultChecked:t.completed,checked:e.completed[t.id].completed,onChange:function(){e.handleCheck(t),e.setCompleted(Object(d.a)(Object(d.a)({},e.completed),{},Object(l.a)({},t.id,t.completed)))}}),Object(O.jsx)("span",{className:"todo-item",children:t.task}),Object(O.jsx)("button",{className:"edit-todo yellow-button","aria-label":"edit",type:"button",onClick:function(){return e.editToDo(t)},children:Object(O.jsx)(u.f,{})}),Object(O.jsx)("button",{className:"delete-todo red-button","aria-label":"delete",type:"button",onClick:function(){return e.deleteToDo(t.id)},children:Object(O.jsx)(u.i,{})})]},t.id)})):Object(O.jsx)("div",{className:"empty-list",children:"No tasks have been added."})]})};var x=function(e){var t={id:null,task:"",completed:!1},c=Object(a.useState)(t),n=Object(b.a)(c,2),s=n[0],o=n[1];return Object(O.jsxs)("form",{className:"add-todo",onSubmit:function(c){c.preventDefault(),s.task&&(e.addToDo(s),o(t))},children:[Object(O.jsx)("input",{className:"add-todo-input","aria-label":"Add a new todo item",type:"text",placeholder:"Type in your next task...",value:s.task,onChange:function(e){return o(Object(d.a)(Object(d.a)({},s),{},{task:e.target.value}))}}),Object(O.jsx)("button",{className:"add-todo-button blue-button","aria-label":"add",type:"submit",children:Object(O.jsx)(u.h,{})})]})};var p=function(e){var t=Object(a.useState)(e.currentToDo),c=Object(b.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){return s(e.currentToDo)}),[e]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"edit-title",children:"Edit Item"}),Object(O.jsxs)("form",{className:"edit-form",onSubmit:function(t){t.preventDefault(),e.updateToDo(n.id,n)},children:[Object(O.jsx)("input",{className:"edit-input","aria-label":"edit to-do",type:"text",value:n.task,onChange:function(e){s(Object(d.a)(Object(d.a)({},n),{},{task:e.target.value}))}}),Object(O.jsx)("button",{className:"blue-button edit-done","aria-label":"edit",type:"submit",children:Object(O.jsx)(u.d,{})}),Object(O.jsx)("button",{className:"red-button edit-cancel","aria-label":"cancel",type:"button",onClick:function(){return e.setEditing(!1)},children:Object(O.jsx)(u.j,{})})]})]})};c(36);var f=function(){var e=[];for(var t in localStorage)if(window.localStorage.getItem(t)){var c=JSON.parse(window.localStorage.getItem(t));e.push({id:+t,task:c.toDo,completed:c.completed})}e.sort((function(e,t){return e.id-t.id}));for(var n=Object(a.useState)(e),s=Object(b.a)(n,2),o=s[0],u=s[1],m={},f=0;f<o.length;f++)m[o[f].id]=o[f].completed;var g=Object(a.useState)(m),v=Object(b.a)(g,2),N=v[0],k=v[1],y=Object(a.useState)(!1),S=Object(b.a)(y,2),w=S[0],C=S[1],D=Object(a.useState)({id:null,task:"",completed:!1}),T=Object(b.a)(D,2),I=T[0],E=T[1];return Object(O.jsx)("div",{className:"todo-list app-section",children:w?Object(O.jsx)(p,{setEditing:C,currentToDo:I,updateToDo:function(e,t){C(!1),u(o.map((function(c){return c.id===e?t:c}))),window.localStorage.setItem(e.toString(),JSON.stringify({toDo:t.task,completed:t.completed}))}}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{addToDo:function(e){var t=o[o.length-1];e.id=t?t.id+1:1,u([].concat(Object(j.a)(o),[e])),k(Object(d.a)(Object(d.a)({},N),{},Object(l.a)({},e.id,e.completed))),window.localStorage.setItem(e.id.toString(),JSON.stringify({toDo:e.task,completed:e.completed}))}}),Object(O.jsx)(h,{toDos:o,completed:N,setCompleted:k,deleteToDo:function(e){u(o.filter((function(t){return t.id!==e}))),C(!1),N[e];var t=Object(i.a)(N,[e].map(r.a));k(t),window.localStorage.removeItem(e)},editToDo:function(e){C(!0),E({id:e.id,task:e.task,completed:e.completed})},handleCheck:function(e){e.completed=!e.completed,window.localStorage.setItem(e.id.toString(),JSON.stringify({toDo:e.task,completed:e.completed})),u(o)}})]})})},g=c(14);c(39);var v=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),o=Object(b.a)(s,2),i=o[0],r=o[1],l=Object(g.b)();function d(){n(0),r(!1)}Object(a.useEffect)((function(){if(c<0)return r(!1),void(i||l.show(Object(O.jsx)("span",{style:{fontFamily:"Urbanist"},children:"Time's up!"})));if(i){var e=setInterval((function(){n(c-1)}),1e3);return function(){return clearInterval(e)}}}),[i,c,l]);var j=Math.floor(c/3600);j=j>=10?j:"0"+j;var m=Math.floor(c/60)%60;m=m>=10?m:"0"+m;var h=c%60;return h=h>=10?h:"0"+h,Object(O.jsxs)("div",{className:"timer app-section",children:[Object(O.jsx)("h2",{className:"timer-title",children:"Study Timer"}),Object(O.jsxs)("div",{className:c>=0?"timer-display":"completed-timer",children:[!i&&c>=0&&Object(O.jsxs)("div",{className:"change-time-buttons inc-buttons",children:[Object(O.jsx)("button",{className:"timer-button inc-hour","aria-label":"increase hours by one",onClick:function(){return n(c+3600)},children:Object(O.jsx)(u.c,{})}),Object(O.jsx)("button",{className:"timer-button inc-min","aria-label":"increase minutes by one",onClick:function(){return n(c+60)},children:Object(O.jsx)(u.c,{})}),Object(O.jsx)("button",{className:"timer-button inc-sec","aria-label":"increase seconds by one",onClick:function(){return n(c+1)},children:Object(O.jsx)(u.c,{})})]}),c>=0?Object(O.jsxs)("div",{className:"time",children:[" ",Object(O.jsx)("span",{children:j}),":",Object(O.jsx)("span",{children:m}),":",Object(O.jsx)("span",{children:h})," "]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"times-up",children:"Time's up!"}),Object(O.jsx)("button",{className:"reset-timer timer-control","aria-label":"reset timer",onClick:d,children:Object(O.jsx)(u.a,{})})]}),!i&&Object(O.jsxs)("div",{className:"change-time-buttons dec-buttons",children:[c>=3600?Object(O.jsx)("button",{className:"timer-button dec-hour","aria-label":"decrease hours by one",onClick:function(){return n(c-3600)},children:Object(O.jsx)(u.b,{})}):Object(O.jsx)("div",{className:"button-filler"}),c>=60?Object(O.jsx)("button",{className:"timer-button dec-min","aria-label":"decrease minutes by one",onClick:function(){return n(c-60)},children:Object(O.jsx)(u.b,{})}):Object(O.jsx)("div",{className:"button-filler"}),c>=1?Object(O.jsx)("button",{className:"timer-button dec-sec","aria-label":"decrease seconds by one",onClick:function(){return n(c-1)},children:Object(O.jsx)(u.b,{})}):Object(O.jsx)("div",{className:"empty"})]})]}),!i&&c>0&&Object(O.jsxs)("div",{className:"control-buttons",children:[Object(O.jsx)("button",{className:"play-timer timer-control","aria-label":"play timer",onClick:function(){return r(!0)},children:Object(O.jsx)(u.g,{})}),Object(O.jsx)("button",{className:"reset-timer timer-control","aria-label":"reset timer",onClick:d,children:Object(O.jsx)(u.a,{})})]}),Object(O.jsx)("div",{className:"pause-container",children:c>0&&i&&Object(O.jsx)("button",{className:"pause-timer timer-control","aria-label":"pause timer",onClick:function(){r(!1)},children:Object(O.jsx)(u.e,{})})})]})},N=c(21),k=c.n(N),y=c(25),S=(c(41),c.p+"static/media/IMG_0009.149d6868.JPG"),w=c.p+"static/media/dog.6bac9d41.jpg";var C=function(){var e=Object(a.useState)({cat:null,dog:null}),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({cat:!1,dog:!1}),o=Object(b.a)(s,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){!function(){var e=Object(y.a)(k.a.mark((function e(){var t,c,a,s,o,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([fetch("https://aws.random.cat/meow"),fetch("https://random.dog/woof.json")]);case 3:return t=e.sent,c=Object(b.a)(t,2),a=c[0],s=c[1],e.next=9,a.json();case 9:return o=e.sent,e.next=12,s.json();case 12:i=e.sent,n({cat:o.file,dog:i.url}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}()()}),[i.cat,i.dog]),Object(O.jsxs)("div",{className:"app-section study-break",children:[Object(O.jsx)("h2",{className:"study-title",children:"Study Break"}),Object(O.jsxs)("div",{className:"animal-images",children:[Object(O.jsx)("img",{className:"animal-image",alt:"A cute cat",src:c.cat,onError:function(e){e.target.onerror=null,e.target.src=S}}),Object(O.jsx)("img",{className:"animal-image",alt:"A cute dog",src:c.dog,onError:function(e){e.target.onerror=null,e.target.src=w}})]}),Object(O.jsx)("div",{className:"generate-images-buttons",children:Object(O.jsx)("button",{className:"generate-images-button","aria-label":"generate new images",onClick:function(){r({cat:!i.cat,dog:!i.dog})},children:Object(O.jsx)(u.a,{})})})]})},D=c(10),T=c.p+"static/media/study_icon.96ab1355.png";c(50);var I=function(){return Object(O.jsxs)("div",{className:"nav-options",children:[Object(O.jsx)("img",{src:T,alt:"logo of a colorful book",className:"icon",height:"20"}),Object(O.jsx)("span",{className:"nav-title",children:Object(O.jsx)(D.Link,{to:"page-title",smooth:"true",className:"nav-item",offset:-90,children:"Study Tool"})}),Object(O.jsx)("span",{children:Object(O.jsx)(D.Link,{to:"todo-list",className:"nav-item",smooth:"true",offset:-90,children:"To Do List"})}),Object(O.jsx)("span",{children:Object(O.jsx)(D.Link,{to:"timer",className:"nav-item",smooth:"true",offset:-90,children:"Timer"})}),Object(O.jsx)("span",{children:Object(O.jsx)(D.Link,{to:"study-break",className:"nav-item",smooth:"true",offset:-90,children:"Study Break"})})]})},E=c(26);var J=function(){return Object(O.jsxs)(g.a,{template:E.a,children:[Object(O.jsx)(I,{}),Object(O.jsx)("h1",{className:"app-section",id:"page-title",children:"Study Tool"}),Object(O.jsx)(f,{id:"todo-list"}),Object(O.jsx)(v,{id:"timer"}),Object(O.jsx)(C,{id:"study-break"})]})};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a715b52c.chunk.js.map