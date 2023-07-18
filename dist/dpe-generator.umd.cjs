(function(i){typeof define=="function"&&define.amd?define(i):i()})(function(){"use strict";const i="",d=document.querySelectorAll(".dpe-generator-js");let l=10,u=29,m=65,t=35,s=40,f={a:t,b:t+s,c:t+s*2,d:t+s*3,e:t+s*4,f:t+s*5,g:t+s*6};function c(e){const b=e.getAttribute("dpe-consommation"),g=e.getAttribute("dpe-emissions"),a=e.getAttribute("dpe-letter").toLowerCase(),$=e.getAttribute("dpe-type"),n=e.offsetWidth/500,h=n*l,y=n*u,w=n*m,v=n*f[a],o=`style="font-size: ${h}px"`,r=`style="font-size: ${y}px"`,p=`style="height: ${w}px"`,A=`style="top: ${v}px"`,L="./img/energie/"+a+".svg",z=new URL(L,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,S=`<figure class="dpeGenerator dpeGenerator-${$}">
    <img id="dpeImg" src="${z}" alt="étiquette energie dpe ${a}">
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
    </figure>`;e.innerHTML=S}d.forEach(e=>{c(e)}),window.addEventListener("resize",c)});
