(this.webpackJsonpreact_todolist_simple_codeboost=this.webpackJsonpreact_todolist_simple_codeboost||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),o=c(4),r=c(2),u=(c(12),c(0)),d=function(){var e=String(new window.Date).slice(0,25),t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),d=Object(r.a)(i,2),l=d[0],j=d[1],b=Object(n.useState)(""),p=Object(r.a)(b,2),m=p[0],O=p[1],h=Object(n.useState)(null),x=Object(r.a)(h,2),f=x[0],v=x[1],N=Object(n.useState)(""),w=Object(r.a)(N,2),g=w[0],k=w[1],C=Object(n.useState)(""),S=Object(r.a)(C,2),y=S[0],_=S[1];return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"Tasks for today"}),Object(u.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault();var c={id:(new Date).getTime(),timeCreate:"Created at: "+e,timeUpdate:"",text:l,description:m,completed:!1};a(Object(o.a)(s).concat(c)),j(""),O("")},children:[Object(u.jsxs)("div",{className:"input-column",children:[Object(u.jsx)("input",{type:"text",placeholder:"What to do",onChange:function(e){return j(e.target.value)},value:l,className:"todo-input"}),Object(u.jsx)("input",{type:"text",placeholder:"Description",onChange:function(e){return O(e.target.value)},value:m,className:"desc-input"})]}),Object(u.jsx)("button",{className:"submit-button",type:"submit",children:"Add Tasks"})]}),s.map((function(t){return Object(u.jsxs)("div",{className:"todo-row",children:[f===t.id?Object(u.jsxs)("div",{className:"input-edit-wrap",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)},value:g}),Object(u.jsx)("input",{type:"text",onChange:function(e){return _(e.target.value)},value:y})]}):Object(u.jsxs)("div",{className:"input-show",children:[Object(u.jsx)("p",{className:"input-show-name",children:t.text}),Object(u.jsx)("p",{className:"input-show-desc",children:t.description}),Object(u.jsx)("p",{className:"input-show-time",children:Object(u.jsx)("span",{className:"span-time",children:t.timeCreate})}),Object(u.jsx)("p",{className:"input-show-time",children:Object(u.jsx)("span",{className:"span-time",children:t.timeUpdate})})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(){return function(e){var t=Object(o.a)(s).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));a(t)}(t.id)},checked:t.completed,className:"check-complete"}),f===t.id?Object(u.jsx)("button",{className:"submit-edit-btn",onClick:function(){return function(t){var c=Object(o.a)(s).map((function(c){return c.id===t&&(c.text=g,c.description=y,c.timeUpdate="Update at: "+e),c}));a(c),v(null),k(""),_("")}(t.id)},children:"Submit Edit"}):Object(u.jsx)("button",{className:"edit-btn",onClick:function(){return v(t.id)},children:"Edit Tasks"}),Object(u.jsx)("button",{className:"delete-btn",onClick:function(){return function(e){var t=Object(o.a)(s).filter((function(t){return t.id!==e}));a(t)}(t.id)},children:"Delete"})]})]},t.id)}))]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c75f2442.chunk.js.map