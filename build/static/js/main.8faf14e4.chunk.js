(this.webpackJsonptodolist_frontend_v2=this.webpackJsonptodolist_frontend_v2||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(3),o=n.n(c),r=n(17),a=n.n(r),u=(n(22),n(8)),i=n(2),s=n.n(i),l=n(4),d=n(7),f=(n(24),n(5)),h=n.n(f),p=n(0);var j=function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsxs)("label",{children:["Todo \xa0",Object(p.jsx)("input",{type:"text",required:!0,value:t.input,onChange:t.handleChange})]}),Object(p.jsx)("input",{type:"submit",value:"Create"})]})};var b=function(t){return Object(p.jsx)("div",{className:"todo",children:Object(p.jsxs)("h3",{children:[Object(p.jsx)("label",{className:t.todo.completed?"completed":null,onClick:t.handleClick,children:t.todo.todoName}),Object(p.jsx)("label",{onClick:t.handleDelete,children:"\xa0\xa0\u274c"})]})},t.todo.id)};var O=function(){var t="http://localhost:8080",e=Object(c.useState)([]),n=Object(d.a)(e,2),o=n[0],r=n[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),f=i[0],O=i[1];function v(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t+"/todo").then((function(t){console.log(t.data),r(t.data)})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){v()}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"TODO LIST"}),Object(p.jsx)(j,{handleSubmit:function(e){e.preventDefault(),function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(t+"/todo",{todoName:f}).then((function(t){console.log(t.data),O(""),v()})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),console.log("\ud560\uc77c\uc774 \ucd94\uac00\ub428!")},input:f,handleChange:function(t){t.preventDefault(),O(t.target.value)}}),o?o.map((function(e){return Object(p.jsx)(b,{todo:e,handleClick:function(){return n=e.id,function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put(t+"/todo/"+n,{}).then((function(t){r(o.map((function(t){return t.id===n?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),void console.log("\ud560\uc77c\uc774 \uc218\uc815\ub428!");var n},handleDelete:function(){return n=e.id,function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete(t+"/todo/"+n).then((function(t){r(o.filter((function(t){return t.id!==n})))})).catch((function(t){console.error(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),void console.log("\ud560\uc77c\uc774 \uc0ad\uc81c\ub428!");var n}},e.id)})):null]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.8faf14e4.chunk.js.map