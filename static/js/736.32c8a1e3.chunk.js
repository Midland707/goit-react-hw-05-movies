"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,a){a.r(t),a.d(t,{default:function(){return k}});var i,e,r,o,c,s,p,d=a(439),l=a(924),g=a(791),h=a(689),m=a(168),x=a(444),u=x.ZP.div(i||(i=(0,m.Z)([""]))),f=x.ZP.ul(e||(e=(0,m.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=x.ZP.li(r||(r=(0,m.Z)(["\n  padding-bottom: 10px;\n  border-radius: 2px;\n  background-color: lightgrey;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),Z=x.ZP.img(o||(o=(0,m.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: contain;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),v=x.ZP.div(c||(c=(0,m.Z)(["\n  text-align: center;\n"]))),_=x.ZP.h2(s||(s=(0,m.Z)([""]))),j=x.ZP.p(p||(p=(0,m.Z)([""]))),w=a(184),k=function(){var n=(0,g.useState)([]),t=(0,d.Z)(n,2),a=t[0],i=t[1],e=(0,h.UO)().movieId;(0,g.useEffect)((function(){if(e){l.Z.defaults.baseURL="https://api.themoviedb.org/3/";l.Z.get("".concat("movie","/").concat(e,"/").concat("credits","?api_key=").concat("6746b4dbb69b720741ecbdc7655d3557")).then((function(n){var t=n.data;i(t.cast)})).catch((function(n){console.error(n.message)}))}}),[e]);return(0,w.jsx)(u,{children:a.length?(0,w.jsx)(f,{children:a.map((function(n){return(0,w.jsxs)(b,{children:[(0,w.jsxs)(v,{children:[(0,w.jsx)(_,{children:n.original_name}),(0,w.jsxs)(j,{children:["Character ",n.character]})]}),n.profile_path?(0,w.jsx)(Z,{src:"".concat("https://image.tmdb.org/t/p/original").concat(n.profile_path),alt:"".concat(n.original_name)}):(0,w.jsx)(Z,{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"no image"})]},n.id)}))}):(0,w.jsx)("span",{children:"We don't have any cast for this movie"})})}}}]);
//# sourceMappingURL=736.32c8a1e3.chunk.js.map