(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(9),i=n.n(s),o=n(18),b=n(4),l=(n(32),n(33),n(15)),j=n(3),u=n(34),d=Object(j.b)("contacts/add",(function(e){return{payload:Object(l.a)(Object(l.a)({},e),{},{id:u.generate()})}})),O=Object(j.b)("contacts/delete"),m=Object(j.b)("contacts/changeFilter"),f=(n(43),function(){var e=Object(b.b)(),t=Object(b.c)((function(e){var t=e.contacts,n=t.filter,c=t.items,a=n.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(a)}))}));return Object(c.jsx)("table",{className:"List-table",children:Object(c.jsx)("tbody",{children:t.map((function(t){var n=t.name,a=t.number,r=t.id;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{type:"button",onClick:function(){return function(t){return e(O(t))}(r)},children:"del"})})]},r)}))})})}),h=n(16);n(44);var p=function(){var e=Object(b.b)(),t=Object(a.useState)(""),n=Object(h.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),o=Object(h.a)(i,2),l=o[0],j=o[1],u=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":s(c);break;case"number":j(c);break;default:return}};return Object(c.jsxs)("form",{className:"Form",onSubmit:function(t){t.preventDefault(),""!==r.trim()&&""!==l.trim()?(e(d({name:r,number:l})),s(""),j("")):alert("Fill all fields!")},children:[Object(c.jsxs)("label",{className:"Form-label",children:["Name",Object(c.jsx)("input",{className:"Form-input",type:"text",name:"name",value:r,onChange:u})]}),Object(c.jsxs)("label",{className:"Form-label",children:["Number",Object(c.jsx)("input",{className:"Form-input",type:"text",name:"number",value:l,onChange:u})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})},x=function(){var e=Object(b.b)();return Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"filter",onChange:function(t){return e(m(t.target.value))}})})};var v,y=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(p,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(c.jsx)(x,{}),Object(c.jsx)(f,{})]})},g=n(5),k=n(20),w=n.n(k),C=n(6),N=n(17),F=n(2),L=Object(j.c)([],(v={},Object(C.a)(v,d.type,(function(e,t){var n=e.find((function(e){return e.name.toLowerCase()===t.payload.name.toLowerCase()}));if(!n)return[].concat(Object(N.a)(e),[t.payload]);alert("".concat(n.name," is already in contacts."))})),Object(C.a)(v,O.type,(function(e,t){var n=e.filter((function(e){return e.id!==t.payload}));return Object(N.a)(n)})),v)),A=Object(j.c)("",Object(C.a)({},m.type,(function(e,t){return t.payload}))),S=Object(F.c)({items:L,filter:A}),J={key:"contacts",storage:w.a,blacklist:["filter"]},T=Object(j.a)({reducer:{contacts:Object(g.g)(J,S)},middleware:Object(j.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}}),devTools:!1}),z={store:T,persistor:Object(g.h)(T)};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:z.store,children:Object(c.jsx)(o.a,{loading:null,persistor:z.persistor,children:Object(c.jsx)(y,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8d391489.chunk.js.map