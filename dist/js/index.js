"use strict";window.onload=function(){function c(t,n){clearInterval(t.timer),t.timer=setInterval(function(){var e=(n-t.offsetHeight)/10;e=0<e?Math.ceil(e):Math.floor(e),Math.abs(t.offsetHeight-n)<=1?(clearInterval(t.timer),t.style.height=n+"px"):t.style.height=t.offsetHeight+e+"px"},10)}var e,t,n;!function(){for(var e=$(".nav ul li"),t=$(".nav ul li ul"),n=0;n<e.length-1;n++)e[n].onmouseenter=function(){var e=this.getAttribute("index");t[e].style.display="block"},e[n].onmouseleave=function(){var e=this.getAttribute("index");t[e].style.display="none"};var i=$(".gotop");window.onscroll=function(){var n=document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector(".header"),t=document.querySelector(".zhusu-a"),l=document.querySelector(".header-top"),o=(document.querySelector(".logo"),document.querySelector(".icon1")),a=document.querySelector(".icon2");900<n?(i[0].style="display:block",c(e,70),l.style="background: rgba(0, 0, 0, 1);",t.style="display:block",l.style="display:none",o.style="display:none",a.style="display:block"):(i[0].style="display:none",c(e,119),l.style="background: rgba(0, 0, 0, 0.75);",t.style="display:none",l.style="display:block",o.style="display:block",a.style="display:none"),i[0].onclick=function(){var t=null;clearInterval(t),0<n&&(t=setInterval(function(){var e=-20;e=0<e?Math.ceil(e):Math.floor(e),n+=e,(document.documentElement.scrollTop=n)<=0&&clearInterval(t)},10))}}}(),e=$(".fangdajing1"),t=$(" .search .search-window"),n=$(".close"),e.on("click",function(){return!(t[0].style.display="block")}),n.on("click",function(){return!(t[0].style.display="none")}),new Swiper("#swiper1",{spaceBetween:3e3,autoplay:{delay:2500,disableOnInteraction:!1},effect:"fade",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".main .swiper-container",{spaceBetween:300,effect:"fade",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".main .swiper-button-next",prevEl:".main .swiper-button-prev"}}),new Swiper(".main .swiper-container",{spaceBetween:300,effect:"fade",autoplay:{delay:2500,disableOnInteraction:!1},loop:!0}),function(){for(var e=$(".mengban"),t=($(".ultop  img"),$(".ultop ul")),n=$(".incontentdiv"),l=0;l<n.length;l++)n[l].bcd=l,n[l].onmouseenter=function(){e[this.bcd].style.display="block",t[this.bcd].style.display="block"},n[l].onmouseleave=function(){e[this.bcd].style.display="none",t[this.bcd].style.display="none"}}()};