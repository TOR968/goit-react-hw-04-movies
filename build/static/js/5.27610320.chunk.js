(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{100:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(19),n=a(11),i=a(0),o=a(3),r=a(9),l=a(14),j=a(96),b=a.n(j),d=a(32),h=a.n(d),m=(a(40),a(16)),O=Object(i.lazy)((function(){return a.e(0).then(a.bind(null,97))})),f=Object(i.lazy)((function(){return a.e(1).then(a.bind(null,99))}));t.default=function(e){var t=Object(i.useState)({}),a=Object(n.a)(t,2),j=a[0],d=a[1],p=Object(i.useState)(!1),v=Object(n.a)(p,2),u=v[0],_=v[1],x=e.match.params.movieId,g=Object(o.g)(),I=Object(o.f)();Object(i.useEffect)((function(){Object(l.c)(x).then((function(e){d(e.data)})).catch((function(){_(!0)}))}),[x]);var k=j.poster_path,D=j.title,M=j.name,N=j.vote_average,P=j.overview,w=j.genres,y=j.release_date;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){I.push(Object(s.a)({},g.state.from))},children:"\u2190 Go back"}),u&&Object(c.jsx)(m.a,{text:"something gone wrong"}),j.genres&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("article",{className:b.a.movieCard,children:[Object(c.jsx)("img",{src:"".concat(l.f).concat(k),alt:D||M,className:b.a.poster}),Object(c.jsxs)("section",{className:b.a.movieCardInfo,children:[Object(c.jsx)("h3",{className:b.a.title,children:"".concat(D||M," (").concat(y.split("-")[0],")")}),Object(c.jsxs)("p",{className:b.a.score,children:["user score - ","".concat(10*N,"%")]}),Object(c.jsx)("h4",{children:"Overview"}),Object(c.jsx)("p",{children:P}),Object(c.jsx)("h5",{children:"Genres"}),Object(c.jsx)("ul",{className:b.a.genreList,children:w.map((function(e){return Object(c.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(c.jsxs)("section",{className:b.a.additionalInfo,children:[Object(c.jsx)("p",{children:"Additional Information"}),Object(c.jsxs)("ul",{className:b.a.adInfoList,children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:{pathname:"/movies/".concat(x,"/cast"),state:{from:g.state.from}},className:b.a.link,children:"Cast"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:{pathname:"/movies/".concat(x,"/reviews"),state:{from:g.state.from}},className:b.a.link,children:"Reviews"})})]}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(h.a,{type:"TailSpin",color:"#red"}),children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"".concat(e.match.path,"/cast"),component:O}),Object(c.jsx)(o.a,{path:"".concat(e.match.path,"/reviews"),component:f})]})})]})]})]})}},96:function(e,t,a){e.exports={movieCard:"MovieDetailsPage_movieCard__282hu",movieCardInfo:"MovieDetailsPage_movieCardInfo__2Oyuj",poster:"MovieDetailsPage_poster__2HYYZ",title:"MovieDetailsPage_title__2HWns",score:"MovieDetailsPage_score__1vr4Z",genreList:"MovieDetailsPage_genreList__1PAH2",additionalInfo:"MovieDetailsPage_additionalInfo__AcwJM",adInfoList:"MovieDetailsPage_adInfoList__2fYyf",link:"MovieDetailsPage_link__18ykD"}}}]);
//# sourceMappingURL=5.27610320.chunk.js.map