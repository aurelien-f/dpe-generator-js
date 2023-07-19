(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";const r="",f=document.querySelectorAll(".dpe-generator-js");let $=10,g=29,b=14,y=65,h=70,t=35,n=40,v={a:t,b:t+n,c:t+n*2,d:t+n*3,e:t+n*4,f:t+n*5,g:t+n*6};function d(e,c,p,s,i){const o=e.offsetWidth/500,w=o*$,x=o*g,z=o*b,P=o*y,S=o*v[s],_=o*h,a=`style="font-size: ${w}px"`,l=`style="font-size: ${z}px"`,m=`style="font-size: ${x}px"`,u=`style="height: ${P}px"`,A=`style="top: ${S}px"`,G=`style="bottom: ${_}px"`,E="./img/+"+i+"/"+s+".svg",L=new URL(E,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,T=s!=="f"&&s!=="g"?`<div ${G} class="dpeGenerator_passoire"><p ${l}>passoire<br> énergetique</p></div>`:"",U=`<figure class="dpeGenerator dpeGenerator-${i}">
    ${T}
    <div class="dpeGenerator_text"><p ${l}>Logement extrêmement performant</p><p ${l}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${L}" alt="étiquette energie dpe ${s}">
    <div ${A} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${a} class="top alt">consommation</span>
        <span ${u} class="bot">
            <span ${m} class="number number-consommation">${c}</span>
            <span ${a} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${a} class="top alt">émissions</span>
        <span ${u} class="bot">
            <span ${m} class="number number-emissions">${p}<sub>*</sub></span>
            <span ${a} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;e.innerHTML=U}f.forEach(e=>{const c=e.getAttribute("dpe-consommation"),p=e.getAttribute("dpe-emissions"),s=e.getAttribute("dpe-letter").toLowerCase(),i=e.getAttribute("dpe-type");d(e,c,p,s,i)}),window.addEventListener("resize",d)});
