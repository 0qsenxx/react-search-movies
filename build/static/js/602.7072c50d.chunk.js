"use strict";(self.webpackChunkreact_components_hw=self.webpackChunkreact_components_hw||[]).push([[602],{602:(e,c,t)=>{t.r(c),t.d(c,{default:()=>i});var a=t(43),s=t(733),h=t(579);const i=()=>{const[e,c]=(0,a.useState)([]),{movieId:t}=(0,s.g)(),i=(0,a.useMemo)((()=>({method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGY5ZWMwY2JmOGViMTBhNDdhNmY1Nzc3NTUyNTAzOCIsIm5iZiI6MTczMzU5Mjg4Mi4xODMsInN1YiI6IjY3NTQ4NzMyODcxYTQyYzljMjQ1NjlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sorPfk3DQRthB6ezndCgQSJ4wqTDhYFw6I8mLnxjSA4"}})),[]);return(0,a.useEffect)((()=>{fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US&page=1"),i).then((e=>e.json())).then((e=>{c(e.cast)})).catch((e=>console.error(e)))}),[i,t]),(0,h.jsx)("ul",{children:e.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:"actorImg"}),(0,h.jsx)("p",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.id)))})}}}]);
//# sourceMappingURL=602.7072c50d.chunk.js.map