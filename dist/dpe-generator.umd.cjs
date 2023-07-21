(function(f){typeof define=="function"&&define.amd?define(f):f()})(function(){"use strict";const f="",_=document.querySelectorAll(".dpe-generator-js");let v=10,G=29,P=14,U=70;function z(t,r,o,n,e){let s=35,i=40,g={a:s,b:s+i,c:s+i*2,d:s+i*3,e:s+i*4,f:s+i*5,g:s+i*6},S=65;const a=t.offsetWidth/500,$=a*v,b=a*G,h=a*P,d=a*S,y=a*g[n],w=a*U,c=`style="font-size: ${$}px"`,p=`style="font-size: ${h}px"`,u=`style="font-size: ${b}px"`,m=`style="height: ${d}px"`,x=`style="top: ${y}px"`,E=`style="bottom: ${w}px"`,R="./img/"+e+"/"+n+".svg",I=new URL(R,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,L=n!=="f"&&n!=="g"?`<div ${E} class="dpeGenerator_passoire"><p ${p}>passoire<br> énergetique</p></div>`:"",T=`<figure class="dpeGenerator dpeGenerator-${e}">
    ${L}
    <div class="dpeGenerator_text"><p ${p}>Logement extrêmement performant</p><p ${p}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${I}" alt="étiquette energie dpe ${n}">
    <div ${x} class="dpeGenerator_infos ${n}">
    <div class="dpeGenerator_infos_consommation">
    <span ${c} class="top alt">consommation</span>
    <span ${m} class="bot">
        <span ${u} class="number number-consommation">${r}</span>
        <span ${c} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${c} class="top alt">émissions</span>
        <span ${m} class="bot">
            <span ${u} class="number number-emissions">${o}<sub>*</sub></span>
            <span ${c} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;t.innerHTML=T}function A(t,r,o,n){let e=200,s=32,i={a:e,b:e+s,c:e+s*2,d:e+s*3,e:e+s*4,f:e+s*5,g:e+s*6},g=40;const l=t.offsetWidth/500,a=l*v,$=l*G,b=l*g,h=l*i[o],d=`style="font-size: ${a}px"`,y=`style="font-size: ${$}px"`,w=`style="height: ${b}px"`,c=`style="top: ${h}px"`,p="./img/"+n+"/"+o+".svg",u=new URL(p,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("dpe-generator.umd.cjs",document.baseURI).href).href,m=new URL("./img/ges/texte.svg",self.location).href,x=`<figure class="dpeGenerator dpeGenerator-${n}">
    <img id="dpeImg" src="${u}" alt="étiquette energie dpe ${o}">
    <img id="textGes" src="${m}" alt="Texte GES">
    <div ${c} class="dpeGenerator_infos ${o}">
    <div class="dpeGenerator_infos_emissions">
        <span ${d} class="top alt">émissions</span>
        <span ${w} class="bot">
            <span ${y} class="number number-emissions">${r}<sub>*</sub></span>
            <span ${d} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;t.innerHTML=x}_.forEach(t=>{const r=t.getAttribute("dpe-consommation"),o=t.getAttribute("dpe-emissions"),n=t.getAttribute("dpe-letter").toLowerCase(),e=t.getAttribute("dpe-type");e==="dpe"?z(t,r,o,n,e):e==="ges"&&A(t,o,n,e)}),window.addEventListener("resize",z)});
