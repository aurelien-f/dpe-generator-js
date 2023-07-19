(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";const r="",d=document.querySelectorAll(".dpe-generator-js");let m=10,u=29,f=14,g=65,$=70,t=35,s=40,b={a:t,b:t+s,c:t+s*2,d:t+s*3,e:t+s*4,f:t+s*5,g:t+s*6};function c(e){const y=e.getAttribute("dpe-consommation"),h=e.getAttribute("dpe-emissions"),o=e.getAttribute("dpe-letter").toLowerCase(),v=e.getAttribute("dpe-type"),n=e.offsetWidth/500,w=n*m,x=n*u,z=n*f,L=n*g,P=n*b[o],S=n*$,i=`style="font-size: ${w}px"`,a=`style="font-size: ${z}px"`,p=`style="font-size: ${x}px"`,l=`style="height: ${L}px"`,_=`style="top: ${P}px"`,A=`style="bottom: ${S}px"`,G="./img/energie/"+o+".svg",E=new URL(G,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,T=o!=="f"&&o!=="g"?`<div ${A} class="dpeGenerator_passoire"><p ${a}>passoire<br> énergetique</p></div>`:"",U=`<figure class="dpeGenerator dpeGenerator-${v}">
    ${T}
    <div class="dpeGenerator_text"><p ${a}>Logement extrêmement performant</p><p ${a}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${E}" alt="étiquette energie dpe ${o}">
    <div ${_} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${i} class="top alt">consommation</span>
        <span ${l} class="bot">
            <span ${p} class="number number-consommation">${y}</span>
            <span ${i} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${i} class="top alt">émissions</span>
        <span ${l} class="bot">
            <span ${p} class="number number-emissions">${h}<sub>*</sub></span>
            <span ${i} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;e.innerHTML=U}d.forEach(e=>{c(e)}),window.addEventListener("resize",c)});
