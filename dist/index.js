"use strict";(()=>{var y=()=>{document.querySelector(".section_faq")&&document.querySelectorAll(".cl-i_faq").forEach(t=>{let e=t.querySelectorAll(".cl-i_faq-svg");e.forEach(n=>{n.classList.add("hide")});let r=Math.floor(Math.random()*e.length);e[r].classList.remove("hide")})};var g=()=>{if(document.querySelector(".input-wrapper.is-dropdown")){let o=document.querySelectorAll(".input-wrapper.is-dropdown");o.forEach(t=>{t.addEventListener("click",function(){o.forEach(e=>{e.classList.remove("z-index-4")}),t.classList.add("z-index-4")})})}};var S=()=>{let c=document.querySelector(".input.is-dropdown"),o=document.querySelectorAll(".is-sign"),t=document.querySelector(".section_contact-us form"),e=document.querySelectorAll("form");if(e.length&&e.forEach(n=>{n.addEventListener("submit",function(){n.parentNode.querySelector("[form-success-message]").classList.remove("hide"),n.classList.add("hide")})}),t){let u=function(){let i=Array.from(n).some(s=>s.checked),l=document.querySelector(".product-checker");l&&l.click()};var r=u;let n=document.querySelectorAll(".is-product-list input");n.forEach(i=>{i.addEventListener("change",u)})}if(o.length&&o.forEach(n=>{n.addEventListener("click",function(){n.previousElementSibling.click()})}),c){document.querySelectorAll(".input.is-dropdown").forEach(s=>{let a=s.querySelector("[option-placeholder-value]");a.setAttribute("option-placeholder-value",a.textContent);let m=s.querySelectorAll(".checkbox-wrapper input");m.forEach(p=>{p.addEventListener("change",function(){let f=new Array;m.forEach(h=>{h.checked&&f.push(h.value)});let d=f.toString();d=d.replace(/,(\S)/g,", $1"),d!=""?a.textContent=d:a.textContent=a.getAttribute("option-placeholder-value")})})}),document.querySelectorAll(".is-dropdown .checkbox-wrapper").forEach(s=>{s.addEventListener("click",function(a){s.querySelector(".checkbox-icon").click()})});let i=document.querySelector(".is-business input"),l=document.createElement("div");if(l.style.color="white",l.textContent="Please use a business email address",l.style.display="none",i.parentNode.insertBefore(l,i.nextSibling),i.addEventListener("input",function(s){let a=["gmx.com","fastmail.com","t-online.de","web.de","cox.net","charter.net","rediffmail.com","libero.it","tiscali.it","virginmedia.com","btinternet.com","shaw.ca","telus.net","bigpond.com","optonline.net","rogers.com","freenet.de","alice.it","laposte.net","icloud.com","zoho.com","protonmail.com","qq.com","163.com","sberbank.ru","bk.ru","inbox.ru","list.ru","gmail.com","yahoo.com","outlook.com","hotmail.com","aol.com","mail.ru","yandex.ru"],p=s.target.value.split("@")[1];a.includes(p)?(l.style.display="block",document.querySelector(".is-business input").classList.add("is-red"),document.querySelector(".is-fake-form-button").classList.add("is-disabled","pointer-events-off")):(l.style.display="none",document.querySelector(".is-business input").classList.remove("is-red"),document.querySelector(".is-fake-form-button").classList.remove("is-disabled","pointer-events-off"))}),window.location.hash){let s=window.location.hash;s=s.slice(1),document.querySelector('[value="'+s+'"]').click()}}};var w=()=>{if(document.querySelector(".section_menu")){let o=document.querySelectorAll(".menu_nav-item"),t=document.querySelectorAll(".section_menu .dropdown-toggle"),e=new MutationObserver(n=>{n.forEach(u=>{o.forEach(i=>{i.classList.add("menu-disabled");let l=document.querySelectorAll(".section_menu .w--open");l.length>0?l.forEach(s=>{s.closest(".menu_nav-item").classList.remove("menu-disabled")}):o.forEach(s=>{s.classList.remove("menu-disabled")})})})}),r={attributes:!0,childList:!0,subtree:!0};t.forEach(n=>{e.observe(n,r)})}};var q=()=>{document.querySelector(".nested-src")&&(document.querySelectorAll('[fs-cmsnest-element="slugs"]').forEach(e=>{let r=e.textContent;if(r!=""){let n=e.parentNode;r.split(",").forEach(i=>{i=i.replace(/\s+/g,"");let l=document.querySelector('[nest-by-name-item="'+i+'"]');if(l){let s=l.cloneNode(!0);n.appendChild(s)}})}}),document.querySelectorAll(".button.is-solution")[0].click(),document.querySelectorAll(".clw_section_solutions-content .case-study-link a").forEach(e=>{let r=e.getAttribute("href"),u=e.closest("[current-client-type-slug]").getAttribute("current-client-type-slug");e.setAttribute("href",r.replace(/\*/g,u))}))};var b=()=>{document.querySelector(".clw_news.is-news-page")&&setInterval(function(){document.querySelectorAll(".cl-i_news").forEach(t=>{if(t.classList.contains("tags-ready")===!1){let e=t.querySelectorAll(".news_card-header"),r=e[0],n=e[1].querySelector(".news_card-category-wrapper-parent").cloneNode(!0);n.querySelectorAll(".news_card-category-wrapper").forEach(i=>{i.classList.add("is-no-cover"),i.querySelector(".ui-s").classList.add("is-no-cover")}),r.appendChild(n),t.classList.add("tags-ready")}})},700)};var k=()=>{if(document.querySelector("[trigger-popup-slug]")){let o=document.querySelectorAll("[trigger-popup-slug]");document.querySelectorAll(".button.is-visionary-team").forEach(e=>{e.addEventListener("click",function(){e.closest(".visionary-team_popup-wrapper").classList.add("hide")})}),o.forEach(e=>{e.addEventListener("click",function(){let r=e.getAttribute("trigger-popup-slug");document.querySelector('[popup-slug="'+r+'"]').classList.remove("hide")})})}};var E=()=>{let c=document.querySelectorAll(".coming-soon");if(c.length){let o=new Array;c.forEach(t=>{if(window.getComputedStyle(t).display!="none"){let e=t.parentNode;o.push(e)}}),o.forEach(t=>{let e=t.querySelector(".coming-soon"),r=e.textContent,n=t.offsetWidth,u="Coming soon";t.addEventListener("mouseenter",function(){e.textContent=u,n!="0"}),t.addEventListener("mouseleave",function(){setTimeout(function(){e.textContent=r},1e3)})})}};var v=()=>{let c=document.querySelectorAll(".button.is-download-open-trigger");if(c.length){let o=document.querySelector(".download-form-popup"),t=document.querySelector("form"),e=document.querySelector(".popup-close-button"),r=document.querySelector(".download-form-popup-bg"),n=document.querySelector(".button.success-download");e.addEventListener("click",function(){o.classList.add("hide")}),r.addEventListener("click",function(){o.classList.add("hide")}),t.addEventListener("submit",function(){localStorage.setItem("userAuthorized","true"),document.querySelector(".download-file-link").click()}),c.forEach(u=>{u.addEventListener("click",function(){localStorage.getItem("userAuthorized")==="true"?document.querySelector(".download-file-link").click():o.classList.remove("hide")})})}};var x=()=>{let c=document.querySelectorAll("[data-url]");c.length&&c.forEach(o=>{let t=window.location.href;o.setAttribute("data-url",t)})};var A=()=>{if(!document.querySelectorAll(".swiper-slide.is-swiper-testimonials").length){let o=document.querySelector(".section_testimonials-swiper");o&&o.classList.add("hide")}};var C=()=>{document.querySelector(".form-cta_form-block")&&window.location.hash&&document.querySelectorAll(".input-wrapper.is-product-list input").forEach(t=>{let e=t.getAttribute("id");if(e="#"+e,e===window.location.hash){let r=t.closest(".dropdotwn-options_field");setTimeout(function(){r.click()},500)}})};var L=()=>{let c=document.querySelectorAll(".checkbox-wrapper label");c.length&&c.forEach(o=>{function t(n){return n.replace(/<[^>]*>/g,"")}let e=o.textContent;e=e.toString();let r=t(e);o.textContent=r})};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{L(),C(),q(),y(),A(),g(),k(),S(),w(),b(),E(),v(),x()});})();
