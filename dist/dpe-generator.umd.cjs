(function(f){typeof define=="function"&&define.amd?define(f):f()})(function(){"use strict";const f="",S=document.querySelectorAll(".dpe-generator-js");let x=10,v=29,_=14,P=70;function z(t,c,o,n,e){let s=35,i=40,g={a:s,b:s+i,c:s+i*2,d:s+i*3,e:s+i*4,f:s+i*5,g:s+i*6},G=65;const a=t.offsetWidth/500,$=a*x,b=a*v,h=a*_,d=a*G,y=a*g[n],w=a*P,r=`style="font-size: ${$}px"`,p=`style="font-size: ${h}px"`,u=`style="font-size: ${b}px"`,m=`style="height: ${d}px"`,E=`style="top: ${y}px"`,U=`style="bottom: ${w}px"`,I="./img/"+e+"/"+n+".svg",R=new URL(I,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,F=n!=="f"&&n!=="g"?`<div ${U} class="dpeGenerator_passoire"><p ${p}>passoire<br> énergetique</p></div>`:"",L=`<figure class="dpeGenerator dpeGenerator-${e}">
    ${F}
    <div class="dpeGenerator_text"><p ${p}>Logement extrêmement performant</p><p ${p}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${R}" alt="étiquette energie dpe ${n}">
    <div ${E} class="dpeGenerator_infos ${n}">
    <div class="dpeGenerator_infos_consommation">
    <span ${r} class="top alt">consommation</span>
    <span ${m} class="bot">
        <span ${u} class="number number-consommation">${c}</span>
        <span ${r} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${r} class="top alt">émissions</span>
        <span ${m} class="bot">
            <span ${u} class="number number-emissions">${o}<sub>*</sub></span>
            <span ${r} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;t.innerHTML=L}function A(t,c,o,n){let e=200,s=32,i={a:e,b:e+s,c:e+s*2,d:e+s*3,e:e+s*4,f:e+s*5,g:e+s*6},g=40;const l=t.offsetWidth/500,a=l*x,$=l*v,b=l*g,h=l*i[o],d=`style="font-size: ${a}px"`,y=`style="font-size: ${$}px"`,w=`style="height: ${b}px"`,r=`style="top: ${h}px"`,p="./img/"+n+"/"+o+".svg",u=new URL(p,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,m=`<figure class="dpeGenerator dpeGenerator-${n}">
    <img id="dpeImg" src="${u}" alt="étiquette energie dpe ${o}">
    <img id="textGes" src="./img/ges/texte.svg" alt="Texte GES">
    <div ${r} class="dpeGenerator_infos ${o}">
    <div class="dpeGenerator_infos_emissions">
        <span ${d} class="top alt">émissions</span>
        <span ${w} class="bot">
            <span ${y} class="number number-emissions">${c}<sub>*</sub></span>
            <span ${d} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;t.innerHTML=m}S.forEach(t=>{const c=t.getAttribute("dpe-consommation"),o=t.getAttribute("dpe-emissions"),n=t.getAttribute("dpe-letter").toLowerCase(),e=t.getAttribute("dpe-type");e==="dpe"?z(t,c,o,n,e):e==="ges"&&A(t,o,n,e)}),window.addEventListener("resize",z)});
