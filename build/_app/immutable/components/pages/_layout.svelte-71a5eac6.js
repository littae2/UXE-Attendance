import{S as A,i as E,s as p,C as b,k as i,l as h,m as g,h as d,n as f,b as _,D as S,E as I,F as q,G as L,f as y,t as x,o as $}from"../../chunks/index-0ee7c216.js";var v={exports:{}};(function(r,o){function c(){var e=document.querySelector("[data-toggle-theme]");(function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(a=>{a.classList.add(e.getAttribute("data-act-class"))}))})(),e&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(t=>{t.addEventListener("click",function(){var a=t.getAttribute("data-toggle-theme");if(a){var n=a.split(",");document.documentElement.getAttribute("data-theme")==n[0]?n.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",n[1]),localStorage.setItem("theme",n[1])):(document.documentElement.setAttribute("data-theme",n[0]),localStorage.setItem("theme",n[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(u=>{u.classList.toggle(this.getAttribute("data-act-class"))})})})}function s(){(function(e=localStorage.getItem("theme")){if(e!=null&&e!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",e);var t=document.querySelector("[data-set-theme='"+e.toString()+"']");t&&([...document.querySelectorAll("[data-set-theme]")].forEach(a=>{a.classList.remove(a.getAttribute("data-act-class"))}),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class")))}else{var t=document.querySelector("[data-set-theme='']");t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(e=>{e.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(t=>{t.classList.remove(t.getAttribute("data-act-class"))}),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))})})}function l(){(function(e=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",e);var t=document.querySelector("select[data-choose-theme] [value='"+e.toString()+"']");t&&[...document.querySelectorAll("select[data-choose-theme] [value='"+e.toString()+"']")].forEach(a=>{a.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(e=>{e.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(t=>{t.selected=!0})})})}function m(e=!0){e===!0?document.addEventListener("DOMContentLoaded",function(t){c(),l(),s()}):(c(),l(),s())}r.exports={themeChange:m}})(v);function C(r){let o,c,s,l;const m=r[1].default,e=b(m,r,r[0],null);return{c(){o=i("div"),c=i("div"),s=i("main"),e&&e.c(),this.h()},l(t){o=h(t,"DIV",{class:!0});var a=g(o);c=h(a,"DIV",{class:!0});var n=g(c);s=h(n,"MAIN",{});var u=g(s);e&&e.l(u),u.forEach(d),n.forEach(d),a.forEach(d),this.h()},h(){f(c,"class","max-w-3xl mx-auto prose md:prose-lg lg:prose-xl"),f(o,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")},m(t,a){_(t,o,a),S(o,c),S(c,s),e&&e.m(s,null),l=!0},p(t,[a]){e&&e.p&&(!l||a&1)&&I(e,m,t,t[0],l?L(m,t[0],a,null):q(t[0]),null)},i(t){l||(y(e,t),l=!0)},o(t){x(e,t),l=!1},d(t){t&&d(o),e&&e.d(t)}}}function D(r,o,c){let{$$slots:s={},$$scope:l}=o;return $(()=>{v.exports.themeChange(!1)}),r.$$set=m=>{"$$scope"in m&&c(0,l=m.$$scope)},[l,s]}class M extends A{constructor(o){super(),E(this,o,D,C,p,{})}}export{M as default};
