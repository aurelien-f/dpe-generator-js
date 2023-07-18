(function(i){typeof define=="function"&&define.amd?define(i):i()})(function(){"use strict";const i="",l=document.querySelectorAll(".dpe-generator-js");let d=10,u=29,m=65,e=35,t=40,f={a:e,b:e+t,c:e+t*2,d:e+t*3,e:e+t*4,f:e+t*5,g:e+t*6};function c(s){const b=s.getAttribute("dpe-consommation"),g=s.getAttribute("dpe-emissions"),a=s.getAttribute("dpe-letter").toLowerCase(),$=s.getAttribute("dpe-type"),n=s.offsetWidth/500,y=n*d,h=n*u,v=n*m,w=n*f[a],o=`style="font-size: ${y}px"`,r=`style="font-size: ${h}px"`,p=`style="height: ${v}px"`,A=`style="top: ${w}px"`,z=`<figure class="dpeGenerator dpeGenerator-${$}">
    <img id="dpeImg" src="/img/energie/${a}.svg" alt="étiquette energie dpe ${a}">
    <div ${A} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${o} class="top alt">consommation</span>
        <span ${p} class="bot">
            <span ${r} class="number number-consommation">${b}</span>
            <span ${o} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${o} class="top alt">émissions</span>
        <span ${p} class="bot">
            <span ${r} class="number number-emissions">${g}<sub>*</sub></span>
            <span ${o} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;s.innerHTML=z}l.forEach(s=>{c(s)}),window.addEventListener("resize",c)});
