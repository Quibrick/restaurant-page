(()=>{"use strict";const e=class{constructor(e){this.id=e,this.link=`https://www.${e}.com/`}},t=function(e){const t=document.getElementById("content"),n=document.createElement("div");n.id=e,t.appendChild(n)},n=function(){document.getElementById("content").innerHTML=""},o=function(e){const d=document.getElementById(e),a=document.createElement("nav");a.id="navigation";let c=["HOME","ABOUT","MENU","CONTACT"];for(let e of c){const t=document.createElement("BUTTON");t.classList.add("navigation-btn"),t.id=`${e.toLowerCase()}-btn`,t.innerHTML=e,a.append(t)}d.appendChild(a),document.getElementById("about-btn").addEventListener("click",(()=>{n(),t("about-page"),o("about-page"),function(){const e=document.getElementById("about-page"),t=document.createElement("div");t.id="about-us-container";const n=document.createElement("h2");n.id="about-us",n.innerHTML="ABOUT US";const o=document.createElement("hr");o.id="about-us-hr",n.appendChild(o);const i=document.createElement("h3");i.id="bold-description",i.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";const d=document.createElement("p");d.id="regular-description",d.innerHTML="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i.appendChild(d),n.appendChild(i),t.appendChild(n),e.appendChild(t);const a=document.createElement("div");a.id="about-us-photo",t.appendChild(a)}()})),document.getElementById("home-btn").addEventListener("click",(()=>{n(),i()}))},i=function(){t("home-page"),o("home-page"),function(){const e=document.getElementById("home-page"),t=document.createElement("div");t.id="title-container";const n=document.createElement("h2");n.id="header",n.innerHTML="Restaurant";const o=document.createElement("h3");o.id="restaurant-name",o.innerHTML="THE LATERN BISTRO";const i=document.createElement("hr");i.id="restaurant-underline",o.appendChild(i),n.appendChild(o),t.appendChild(n),e.appendChild(t)}(),function(){const e=document.getElementById("home-page"),t=document.createElement("button");t.addEventListener("click",(()=>{console.log("working")})),t.id="book-table-btn",t.innerHTML="BOOK TABLE",e.appendChild(t)}(),function(){const t=document.getElementById("home-page"),n=document.createElement("div");n.id="social-media";let o=function(...t){let n=[],o=t.length;for(let i=0;i<o;i++){const o=new e(t[i]);n.push(o)}return n}("facebook","twitter","instagram"),i=o.length;for(let e=0;e<i;e++){const t=document.createElement("a");t.id=o[e].id,t.href=o[e].link,n.append(t)}t.appendChild(n)}()};window.onload=i()})();