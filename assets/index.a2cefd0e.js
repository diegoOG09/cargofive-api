import{o as c,c as u,a as f,b as _,d as t,w as g,v as m,e as v,F as h,r as y,t as l,f as d,g as L}from"./vendor.7c2707f5.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};C();var w="/logo.png";var p=(a,e)=>{const o=a.__vccOpts||a;for(const[i,s]of e)o[i]=s;return o};const b={name:"App",data:function(){return{toggle:document.querySelector(".menu")}}},B={id:"header"},x=f('<nav id="nav"><div class="logo"><img src="'+w+'" alt="Logo de cargofive"></div><div class="menu"><li><a href="#">Benefits</a></li><li><a href="#">About Us</a></li><li><a href="#">Blog</a></li><li><a href="#">Log In</a></li><li><a id="navBtn" href="#">Free Trial</a></li></div></nav>',1),$=[x];function k(a,e,o,i,s,n){return c(),u("header",B,$)}var O=p(b,[["render",k]]);document.querySelector("html").style.scrollBehavior="smooth";const A={name:"App",data:function(){return{ports:[],page:1,pages:1,search:""}},created(){this.fetch()},computed:{countriesFilter:function(){let a=this.search;return this.ports.filter(e=>e.country.toLowerCase().indexOf(a.toLowerCase())!==-1||e.name.toLowerCase().indexOf(a.toLowerCase())!==-1||e.continent.toLowerCase().indexOf(a.toLowerCase())!==-1)}},methods:{fetch(){const a={page:this.page,country:this.search};_.get("http://apitest.cargofive.com/api/ports",{params:a}).then(e=>{this.ports=e.data.data,this.pages=e.data.meta.last_page}).catch(e=>{console.log(e)})},changePage(a){this.page=a<=0||a>this.pages?this.page:a,this.fetch(),window.scrollTo(0,0)},searchData(){this.page=1,this.fetch()}}},D={id:"main"},N=t("h1",{class:"title"},"Consultar puertos",-1),F={class:"search-input"},S={class:"container"},P={class:"tg"},M=t("thead",null,[t("tr",null,[t("th",null,"Id"),t("th",null,"Name"),t("th",null,"Continent"),t("th",null,"Country"),t("th",null,"Coordinates")])],-1),V={class:"pagination",role:"navigation","aria-label":"pagination"},q={class:"pagination-list"},I={class:"pagination-link is-current"};function K(a,e,o,i,s,n){return c(),u("main",D,[N,t("div",F,[g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>a.search=r),onKeyup:e[1]||(e[1]=v((...r)=>n.searchData&&n.searchData(...r),["enter"])),id:"search-input",type:"text",placeholder:"Busca el nombre, pais o continente..."},null,544),[[m,a.search]]),t("button",{onClick:e[2]||(e[2]=(...r)=>n.searchData&&n.searchData(...r)),class:"consultarBtn"},"Buscar")]),t("div",S,[t("table",P,[M,t("tbody",null,[(c(!0),u(h,null,y(n.countriesFilter,r=>(c(),u("tr",{key:r.id},[t("td",null,l(r.id),1),t("td",null,l(r.name),1),t("td",null,l(r.continent),1),t("td",null,l(r.country),1),t("td",null,l(r.coordinates),1)]))),128))])]),t("nav",V,[t("a",{class:"pagination-previous",onClick:e[3]||(e[3]=r=>n.changePage(a.page-1))},"Anterior"),t("ul",q,[t("li",null,[t("a",I,l(a.page),1)])]),t("a",{class:"pagination-next",onClick:e[4]||(e[4]=r=>n.changePage(a.page+1))},"Siguiente")])])])}var T=p(A,[["render",K]]);const E={setup(a){return(e,o)=>(c(),u(h,null,[d(O),d(T)],64))}};L(E).mount("#app");