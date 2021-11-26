(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainHeader_header__1mFjP",logo:"MainHeader_logo__3TN1w",nav:"MainHeader_nav__1y11M",active:"MainHeader_active__2Scpd"}},14:function(e,t,n){"use strict";var r=n(28),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__1Aw2o",sorting:"QuoteList_sorting__1l-XY"}},19:function(e,t,n){"use strict";var r=n(11),c=n(4),a=n.n(c),s=n(9),o=n(21),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),c=Object(o.a)(n,2),d=c[0],l=c[1],j=Object(u.useCallback)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},d)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(4),c=n.n(r),a=n(11),s=n(9),o="https://react-http-25c2a-default-rtdb.europe-west1.firebasedatabase.app";function u(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(c.a.mark((function e(){var t,n,r,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)u=Object(a.a)({id:s},n[s]),r.push(u);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function e(t){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(a.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t){var n,r,s,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(u in s=[],r)i=Object(a.a)({id:u},r[u]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){e.exports={main:"Layout_main__3LEuA"}},27:function(e,t,n){e.exports={item:"QuoteItem_item__2MUiD"}},28:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3wxQs"}},29:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3JlQ5"}},34:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n.n(r),a=(n(34),n(1)),s=n.n(a),o=n(8),u=n(2),i=n(24),d=n.n(i),l=n(12),j=n.n(l),p=n(0),h=function(){return Object(p.jsxs)("header",{className:j.a.header,children:[Object(p.jsx)("div",{className:j.a.logo,children:"Great Quotes"}),Object(p.jsx)("nav",{className:j.a.nav,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/quotes",activeClassName:j.a.active,children:"All quotes"})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.c,{to:"/new-quote",activeClassName:j.a.active,children:"Add new"})})]})})]})},b=function(e){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(h,{}),Object(p.jsx)("main",{className:d.a.main,children:e.children})]})},f=n(22),x=n(19),O=n(20),m=n(27),v=n.n(m),w=function(e){return Object(p.jsxs)("li",{className:v.a.item,children:[Object(p.jsxs)("figure",{children:[Object(p.jsx)("blockquote",{children:Object(p.jsx)("p",{children:e.text})}),Object(p.jsx)("figcaption",{children:e.author})]}),Object(p.jsx)(o.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},g=n(18),_=n.n(g),y=function(e){var t,n,r=Object(u.h)(),c=Object(u.i)(),s="asc"===new URLSearchParams(c.search).get("sort"),o=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:_.a.sorting,children:Object(p.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"descending":"ascending"]})}),Object(p.jsx)("ul",{className:_.a.list,children:o.map((function(e){return Object(p.jsx)(w,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},q=n(14),k=n(29),N=n.n(k),S=function(){return Object(p.jsxs)("div",{className:N.a.noquotes,children:[Object(p.jsx)("p",{children:"No quotes found!"}),Object(p.jsx)(o.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},C=function(){var e=Object(x.a)(O.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(f.useEffect)((function(){t()}),[t]),"pending"===n?Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(q.a,{})}):c?Object(p.jsx)("div",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(p.jsx)(y,{quotes:r}):Object(p.jsx)(S,{})},E=s.a.lazy((function(){return n.e(4).then(n.bind(null,55))})),R=s.a.lazy((function(){return n.e(3).then(n.bind(null,54))})),M=s.a.lazy((function(){return n.e(5).then(n.bind(null,53))}));var Q=function(){return Object(p.jsx)(o.a,{children:Object(p.jsx)(b,{children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(q.a,{})}),children:Object(p.jsxs)(u.e,{children:[Object(p.jsx)(u.c,{exact:!0,path:"/",children:Object(p.jsx)(u.b,{to:"/quotes"})}),Object(p.jsx)(u.c,{exact:!0,path:"/quotes",children:Object(p.jsx)(C,{})}),Object(p.jsx)(u.c,{path:"/quotes/:quoteId",children:Object(p.jsx)(R,{})}),Object(p.jsx)(u.c,{path:"/new-quote",children:Object(p.jsx)(E,{})}),Object(p.jsx)(u.c,{path:"*",children:Object(p.jsx)(M,{})})]})})})})};c.a.render(Object(p.jsx)(Q,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c6603324.chunk.js.map