import{_,o as t,d as n,e as s,n as r,C as o,F as d,B as p,t as g}from"./index-8fbcde8d.js";const u={props:["pages"],methods:{updatePage(c){this.$emit("emit-page",c)}}},h={"aria-label":"Page navigation example"},f={class:"pagination pagination-md justify-content-center"},m=s("i",{class:"fa-solid fa-chevron-left"},null,-1),k=[m],v={key:0,class:"page-link"},P=["onClick"],x=s("i",{class:"fa-solid fa-chevron-right"},null,-1),C=[x];function b(c,i,a,y,B,l){return t(),n("nav",h,[s("ul",f,[s("li",{class:r(["page-item",{disabled:!a.pages.has_pre}])},[s("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=o(e=>l.updatePage(a.pages.current_page-1),["prevent"]))},k)],2),(t(!0),n(d,null,p(a.pages.total_pages,e=>(t(),n("li",{class:r(["page-item",{active:a.pages.current_page===e}]),key:e},[a.pages.current_page===e?(t(),n("span",v,g(e),1)):(t(),n("a",{key:1,class:"page-link",href:"#",onClick:o(w=>l.updatePage(e),["prevent"])},g(e),9,P))],2))),128)),s("li",{class:r(["page-item",{disabled:!a.pages.has_next}])},[s("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=o(e=>l.updatePage(a.pages.current_page+1),["prevent"]))},C)],2)])])}const N=_(u,[["render",b]]);export{N as P};
