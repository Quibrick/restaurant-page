(()=>{"use strict";class e{constructor(e){this.id=e,this.link=`https://www.${e}.com/`}}window.onload=(function(e){const t=document.getElementById("content"),n=document.createElement("div");n.id="home-page",t.appendChild(n)}(),function(){const e=document.getElementById("home-page"),t=document.createElement("nav");t.id="navigation";let n=["HOME","ABOUT","BOOKINGS","MENU","CONTACT"];for(let e of n){const n=document.createElement("BUTTON");n.classList.add("navigation-btn"),n.id=`${e.toLowerCase()}-btn`,n.innerHTML=e,t.append(n)}e.appendChild(t)}(),function(){const e=document.getElementById("home-page"),t=document.createElement("div");t.id="title-container";const n=document.createElement("h2");n.id="header",n.innerHTML="Restaurant";const d=document.createElement("h3");d.id="restaurant-name",d.innerHTML="THE LATERN BISTRO";const o=document.createElement("hr");o.id="restaurant-underline",d.appendChild(o),n.appendChild(d),t.appendChild(n),e.appendChild(t)}(),function(){const e=document.getElementById("home-page"),t=document.createElement("BUTTON");t.id="book-table-btn",t.innerHTML="BOOK TABLE",e.appendChild(t)}(),void function(){const t=document.getElementById("home-page"),n=document.createElement("div");n.id="social-media";let d=function(...t){let n=[];for(let d=0;d<t.length;d++){const o=new e(t[d]);n.push(o)}return n}("facebook","twitter","instagram"),o=d.length;for(let e=0;e<o;e++){const t=document.createElement("a");t.id=d[e].id,t.href=d[e].link,n.append(t)}t.appendChild(n)}()),document.getElementById("about-btn").addEventListener("click",(()=>{document.getElementById("content").innerHTML=""}))})();