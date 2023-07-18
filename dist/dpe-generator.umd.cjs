(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";const r="",l=document.querySelectorAll(".dpe-generator-js");let m=10,u=29,f=14,g=65,t=35,s=40,$={a:t,b:t+s,c:t+s*2,d:t+s*3,e:t+s*4,f:t+s*5,g:t+s*6};function c(e){const b=e.getAttribute("dpe-consommation"),y=e.getAttribute("dpe-emissions"),n=e.getAttribute("dpe-letter").toLowerCase(),h=e.getAttribute("dpe-type"),o=e.offsetWidth/500,v=o*m,w=o*u,x=o*f,z=o*g,L=o*$[n],i=`style="font-size: ${v}px"`,a=`style="font-size: ${x}px"`,p=`style="font-size: ${w}px"`,d=`style="height: ${z}px"`,S=`style="top: ${L}px"`,_="./img/energie/"+n+".svg",A=new URL(_,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,G=n!=="f"&&n!=="g"?`<div class="dpeGenerator_passoire"><p ${a}>passoire<br> énergetique</p></div>`:"",E=`<figure class="dpeGenerator dpeGenerator-${h}">
    ${G}
    <div class="dpeGenerator_text"><p ${a}>Logement extrêmement performant</p><p ${a}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${A}" alt="étiquette energie dpe ${n}">
    <div ${S} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${i} class="top alt">consommation</span>
        <span ${d} class="bot">
            <span ${p} class="number number-consommation">${b}</span>
            <span ${i} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${i} class="top alt">émissions</span>
        <span ${d} class="bot">
            <span ${p} class="number number-emissions">${y}<sub>*</sub></span>
            <span ${i} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;e.innerHTML=E}l.forEach(e=>{c(e)}),window.addEventListener("resize",c)});
