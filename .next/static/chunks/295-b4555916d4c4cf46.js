"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{9295:function(e,s,a){a.d(s,{Z:function(){return w}});var n=a(5893),l=a(7294);let r=e=>{let s=(0,l.useRef)();return(0,l.useEffect)(()=>{let a=a=>{s.current.contains(a.target)||e()};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),s},t=e=>{let{content:s,close:a}=e,t=r(()=>{a(!1)});return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)("div",{className:"mfp-bg mfp-fade popup-box-inline mfp-ready"}),(0,n.jsx)("div",{className:"mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,n.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-inline-holder",children:[(0,n.jsx)("div",{className:"mfp-content",ref:t,children:(0,n.jsxs)("div",{id:"popup-2",className:"popup-box mfp-fade",children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:s.outerHTML}}),(0,n.jsx)("button",{onClick:()=>a(),title:"Close (Esc)",type:"button",className:"mfp-close",children:"\xd7"})]})}),(0,n.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},i=()=>{let[e,s]=(0,l.useState)(!1),[a,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll(".has-popup-media");for(let a=0;a<e.length;a++){let n=e[a];n.addEventListener("click",()=>{s(!0);let e=n.closest(".box-item"),a=e.getElementsByClassName("mfp-hide")[0],l=a.getElementsByClassName("content")[0];r(l)})}},500)},[]),(0,n.jsx)(l.Fragment,{children:e&&(0,n.jsx)(t,{content:a,close:()=>{r(null),s(!1)}})})},c=e=>{let{close:s,imgs:a}=e,r=a.length>0?a:["images/works/work6.jpg","images/works/work1.jpg","images/works/work5.jpg"],[t,i]=(0,l.useState)(0);return(0,n.jsxs)("div",{className:"postion-realtive",children:[(0,n.jsx)("div",{className:"mfp-bg mfp-fade mfp-ready",onClick:()=>s()}),(0,n.jsx)("div",{tabIndex:-1,style:{overflow:"hidden auto"},className:"mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",children:(0,n.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-image-holder",children:[(0,n.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,n.jsx)("div",{className:"mfp-content imgGallery_popup",children:(0,n.jsx)("div",{className:"mfp-iframe-scaler",children:(0,n.jsx)("div",{className:"img-container",children:(0,n.jsx)("img",{style:{width:"100%"},className:"mfp-img",src:r[t]})})})}),(0,n.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]}),(0,n.jsx)("button",{title:"Previous (Left arrow key)",type:"button",className:"mfp-arrow mfp-arrow-left mfp-prevent-close",onClick:()=>i((t+r.length-1)%r.length)}),(0,n.jsx)("button",{title:"Next (Right arrow key)",type:"button",className:"mfp-arrow mfp-arrow-right mfp-prevent-close",onClick:()=>{i((t+1)%r.length)}})]})})]})},d=()=>{let[e,s]=(0,l.useState)([]),[a,r]=(0,l.useState)(!1),[t,i]=(0,l.useState)([]);return(0,l.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll(".has-popup-gallery");for(let a=0;a<e.length;a++){let n=e[a];n.addEventListener("click",()=>{r(!0);let e=[],a=n.closest(".image").getElementsByClassName("mfp-hide")[0].getElementsByTagName("a");for(let s=0;s<a.length;s++){let n=a[s].getAttribute("href");e.push(n)}s(e)})}},1e3),console.log(e)},[a]),(0,n.jsx)(l.Fragment,{children:a&&(0,n.jsx)(c,{imgs:e,close:()=>{r(!1),s([])}})})},m=e=>{let{close:s,src:a}=e,t=r(()=>{s(!1)});return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,n.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,n.jsxs)("div",{className:" popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,n.jsx)("div",{className:"mfp-content",ref:t,children:(0,n.jsx)("div",{className:"mfp-iframe-scaler",children:(0,n.jsx)("img",{className:"mfp-img",src:a})})}),(0,n.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},o=()=>{let[e,s]=(0,l.useState)(!1),[a,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.href.includes("/images")&&null===e.getAttribute("download")&&e.addEventListener("click",a=>{a.preventDefault(),r(e.href),s(!0)})})},1500)},[]),(0,n.jsx)(l.Fragment,{children:e&&(0,n.jsx)(m,{close:()=>s(!1),src:a})})},p=e=>{let{close:s,videoID:a}=e,t=r(()=>{s(!1)});return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,n.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,n.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,n.jsx)("div",{className:"mfp-content",ref:t,children:(0,n.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,n.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:()=>s(),children:"\xd7"}),(0,n.jsx)("iframe",{src:a,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}),(0,n.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},h=()=>{let[e,s]=(0,l.useState)(!1),[a,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",a=>{a.preventDefault(),r(e.href),s(!0)})})},1500)},[]),(0,n.jsx)(l.Fragment,{children:e&&(0,n.jsx)(p,{close:()=>s(!1),videoID:a})})},u=()=>(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"socials",children:[(0,n.jsx)("a",{target:"_blank",href:"https://www.facebook.com/",children:(0,n.jsx)("i",{className:"icon fab fa-facebook-f"})}),(0,n.jsx)("a",{target:"_blank",href:"https://www.instagram.com/",children:(0,n.jsx)("i",{className:"icon fab fa-instagram"})}),(0,n.jsx)("a",{target:"_blank",href:"https://dribbble.com/",children:(0,n.jsx)("i",{className:"icon fab fa-dribbble"})})]})});var f=a(1664),x=a.n(f),j=a(8603);let g=()=>(0,n.jsxs)("ul",{className:"menu",children:[(0,n.jsxs)("li",{className:"menu-item current-menu-item menu-item-has-children",children:[(0,n.jsx)("a",{href:"#section-started",children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Home"})})}),(0,n.jsxs)("ul",{className:"sub-menu",children:[(0,n.jsx)("li",{className:"menu-item current-menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"//",children:(0,n.jsx)("a",{children:"Home 1"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/index-2",children:(0,n.jsx)("a",{children:"Home 2"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/index-3",children:(0,n.jsx)("a",{children:"Home 3"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/index-slider",children:(0,n.jsx)("a",{children:"Home Slider"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/index-video",children:(0,n.jsx)("a",{href:"index-video",children:"Home Video"})})})]})]}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)("a",{href:"#section-about",children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"About"})})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)("a",{href:"#section-experience",children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Resume"})})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)("a",{href:"#section-portfolio",children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Portfolio"})})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)("a",{href:"#section-contacts",children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Contact"})})})}),(0,n.jsxs)("li",{className:"menu-item menu-item-has-children",children:[(0,n.jsx)(x(),{legacyBehavior:!0,href:"/blog",children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Blog"})})})}),(0,n.jsxs)("ul",{className:"sub-menu",children:[(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/blog",children:(0,n.jsx)("a",{children:"Blog Posts"})})}),(0,n.jsx)("li",{className:"menu-item",children:(0,n.jsx)(x(),{legacyBehavior:!0,href:"/single-post",children:(0,n.jsx)("a",{children:"Single Post"})})})]})]})]}),N=()=>((0,l.useEffect)(()=>{window.addEventListener("scroll",j.h4),window.addEventListener("scroll",j.j1)},[]),(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsx)(b,{})]})),v=()=>(0,n.jsxs)("header",{className:"desktopHeader header",children:[(0,n.jsx)("div",{className:"logo-div",children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("div",{className:"logo-img",children:(0,n.jsx)("img",{className:"logo-img",src:"images/dgs-logo.png",alt:""})})})}),(0,n.jsx)("a",{href:"#",className:"menu-btn",children:(0,n.jsx)("span",{})}),(0,n.jsxs)("a",{href:"#",className:"btn download-cv-btn",children:[(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Download CV"})}),(0,n.jsx)("i",{className:"icon fas fa-download"})]}),(0,n.jsx)("div",{className:"header-sidebar",children:(0,n.jsx)("div",{className:"top-menu",children:(0,n.jsx)("div",{className:"top-menu-nav",children:(0,n.jsx)("div",{className:"menu-topmenu-container",children:(0,n.jsx)(g,{})})})})})]}),b=()=>{let[e,s]=(0,l.useState)(!1);return(0,n.jsxs)("header",{className:"header mobileHeader ".concat(e?"active":""),children:[(0,n.jsx)("div",{className:"logo",children:(0,n.jsxs)("a",{href:"/",children:[(0,n.jsx)("img",{className:"logo-img",src:"images/logo.png",alt:""}),(0,n.jsxs)("span",{className:"logo-lnk",children:["David G. ",(0,n.jsx)("br",{}),"Simmons"]})]})}),(0,n.jsx)("a",{href:"#",className:"menu-btn",onClick:()=>s(!e),children:(0,n.jsx)("span",{})}),(0,n.jsxs)("a",{href:"#",className:"btn download-cv-btn",children:[(0,n.jsx)("span",{className:"animated-button",children:(0,n.jsx)("span",{children:"Download CV"})}),(0,n.jsx)("i",{className:"icon fas fa-download"})]}),(0,n.jsx)("div",{className:"header-sidebar",children:(0,n.jsx)("div",{className:"top-menu",children:(0,n.jsx)("div",{className:"top-menu-nav",children:(0,n.jsx)("div",{className:"menu-topmenu-container",children:(0,n.jsx)(g,{})})})})})]})},y=e=>{let{children:s}=e;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(h,{}),(0,n.jsx)(o,{}),(0,n.jsx)(d,{}),(0,n.jsx)(i,{}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(N,{}),(0,n.jsx)("div",{className:"wrapper",children:s}),(0,n.jsx)(u,{})]})]})};var w=y},8603:function(e,s,a){a.d(s,{av:function(){return l},bR:function(){return n},h4:function(){return r},j1:function(){return t}});let n=()=>{document.querySelectorAll(".skills .progress").forEach(e=>{e.insertAdjacentHTML("beforeend",'<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');let s=e.getElementsByClassName("percentage")[0];s.insertAdjacentHTML("beforeend",'<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');let a=e.clientWidth;s.getElementsByClassName("da")[0].style.width="".concat(a,"px")})},l=()=>{window.addEventListener("resize",()=>{document.querySelectorAll(".skills-list.dotted .progress").forEach(e=>{let s=e.clientWidth;e.getElementsByClassName("da")[0].style.width="".concat(s+1,"px")})})},r=()=>{let e=window.scrollY,s=document.querySelectorAll("header");s.forEach(s=>{s&&(e>100?(s.classList.add("fixed"),document.querySelector("body").classList.remove("background-enabled")):(s.classList.remove("fixed"),document.querySelector("body").classList.add("background-enabled")))})},t=e=>{let s=document.querySelectorAll(".section"),a=document.querySelectorAll(".top-menu ul li"),n="";s.forEach(e=>{let s=e.offsetTop,a=e.clientHeight;pageYOffset>=s-a/3&&(n=e.getAttribute("id"))}),a.forEach(e=>{null!==n&&e.classList.remove("current-menu-item"),e.getElementsByTagName("a")[0].getAttribute("href")=="#".concat(n)&&e.classList.add("current-menu-item")})}}}]);