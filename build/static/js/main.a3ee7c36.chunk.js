(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(1),a=n(37),r=n.n(a);function i(e){var t=e.cls,n=e.text;return Object(c.jsx)("h1",{className:r.a[t],children:n})}},14:function(e,t,n){e.exports={link:"Navigation_link__3IPpX",activeLink:"Navigation_activeLink__3KOF_ Navigation_link__3IPpX"}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return d}));var c="1b548a20e014d0ac89134ac09055bb25",a=n(13),r=n.n(a),i="https://api.themoviedb.org/3/",s=function(){return r.a.get("".concat(i,"trending/all/day?api_key=").concat(c))},o=function(e){return r.a.get("".concat(i,"search/movie?query=").concat(e,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"))},u=function(e){return r.a.get("".concat(i,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"))},l=function(e){return r.a.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(c))},j=function(e){return r.a.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))},b="https://image.tmdb.org/t/p/w500",d="http://image.tmdb.org/t/p/w185"},17:function(e,t,n){e.exports={searchForm:"Movies_searchForm__388qI",list:"Movies_list___pXQu",link:"Movies_link__2Ye7g"}},22:function(e,t,n){e.exports={title:"HomePage_title__2MoKS",list:"HomePage_list__nhnuL",link:"HomePage_link__3_FQi"}},35:function(e,t,n){e.exports={header:"Appbar_header__3cO0l"}},36:function(e,t,n){e.exports={container:"Container_container__1BpIM"}},37:function(e,t,n){e.exports={title:"PageHeading_title__1llwI",err:"PageHeading_err__3wANw"}},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(33),s=n.n(i),o=n(9),u=n(3),l=n(14),j=n.n(l),b=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.c,{exact:!0,to:"/",className:j.a.link,activeClassName:j.a.activeLink,children:"Home"}),Object(c.jsx)(o.c,{to:"/movies",className:j.a.link,activeClassName:j.a.activeLink,children:"Movies"})]})},d=n(35),h=n.n(d);function O(){return Object(c.jsx)("header",{className:h.a.header,children:Object(c.jsx)(b,{})})}var f=n(36),p=n.n(f);function m(e){var t=e.children;return Object(c.jsx)("div",{className:p.a.container,children:t})}var x=n(11),v=n(12),_=n(15),g=n(22),k=n.n(g);var y=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),s=Object(x.a)(i,2),l=s[0],j=s[1],b=Object(u.g)();return Object(a.useEffect)((function(){Object(_.a)().then((function(e){r(e.data.results)})).catch((function(){j(!0)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{cls:"title",text:"Trending today"}),l&&Object(c.jsx)("p",{children:"something gone wrong"}),!!n.length&&Object(c.jsx)("ul",{className:k.a.list,children:n.map((function(e){return Object(c.jsx)(o.b,{to:{pathname:"/movies/".concat(e.id),state:{from:b}},className:k.a.link,children:Object(c.jsx)("li",{children:e.title||e.name})},e.id)}))})]})},N=n(23),S=n.n(N),w=n(19),F=n(38),I=n(39),M=n.n(I),P=n(17),H=n.n(P),L=n(32),q=n.n(L),C=(n(40),Object(a.lazy)((function(){return n.e(5).then(n.bind(null,100))})));var E=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),s=Object(x.a)(i,2),l=s[0],j=s[1],b=Object(u.f)(),d=Object(u.g)(),h=function(e){var t=e.target.value;r(t)},O=function(){var e=Object(F.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),b.push(Object(w.a)(Object(w.a)({},d),{},{search:"?query=".concat(n)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=M.a.parse(d.search).query;e||(j([]),r("")),d.search&&(Object(_.e)(e).then((function(e){return j(e.data.results)})),r(e))}),[d.search]),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(q.a,{type:"TailSpin",color:"#red"}),children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/movies/:movieId",component:C}),Object(c.jsx)(u.a,{exact:!0,path:"/movies",render:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{cls:"title",text:"Search"}),Object(c.jsxs)("form",{onSubmit:O,className:H.a.searchForm,children:[Object(c.jsx)("input",{placeholder:"enter movie",value:n,onChange:h}),Object(c.jsx)("button",{children:"Search"})]}),Object(c.jsx)("ul",{className:H.a.list,children:l.map((function(e){return Object(c.jsx)(o.b,{to:{pathname:"/movies/".concat(e.id),state:{from:d}},className:H.a.link,children:Object(c.jsx)("li",{children:e.title||e.name})},e.id)}))})]})}})]})})};function U(){return Object(c.jsx)(v.a,{cls:"err",text:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}var X=function(){return Object(c.jsxs)(m,{children:[Object(c.jsx)(O,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,children:Object(c.jsx)(y,{})}),Object(c.jsx)(u.a,{path:"/movies",children:Object(c.jsx)(E,{})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(U,{})})]})]})};n(92),n(93),n(94);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(X,{})})}),document.getElementById("root"))}},[[95,3,4]]]);
//# sourceMappingURL=main.a3ee7c36.chunk.js.map