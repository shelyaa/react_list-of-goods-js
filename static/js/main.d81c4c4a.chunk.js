(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),o=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=function(t){var e=t.good;return Object(u.jsx)("li",{"data-cy":"Good",children:e})},j=function(t){var e=t.goods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(b,{good:t},t)}))})},d="alphabetically",h="length",g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var f=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),a=Object(r.a)(c,2),b=a[0],f=a[1],p=function(t,e){var n=e.sortField,s=e.reverse,c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case d:return t.localeCompare(e);case h:return t.length-e.length;default:return 0}})),s&&c.reverse(),c}(g,{sortField:n,reverse:b}),O=function(t){return function(){return s(t)}};return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",onClick:O(d),className:l()("button is-info",{"is-light":n!==d}),children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:O(h),className:l()("button is-success",{"is-light":n!==h}),children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!b}),onClick:function(){return f(!b)},children:"Reverse"}),(b||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),f(!1)},children:"Reset"})]}),Object(u.jsx)(j,{goods:p})]})};c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d81c4c4a.chunk.js.map