const N = document.querySelectorAll(".dpe-generator-js");
let v = 10, w = 29, W = 14, B = 70;
function z(e, c, o, n, s) {
  let t = 35, i = 40, g = {
    a: t,
    b: t + i,
    c: t + i * 2,
    d: t + i * 3,
    e: t + i * 4,
    f: t + i * 5,
    g: t + i * 6
  }, x = 65;
  const a = e.offsetWidth / 500, $ = a * v, f = a * w, b = a * W, m = a * x, y = a * g[n], h = a * B, r = `style="font-size: ${$}px"`, p = `style="font-size: ${b}px"`, d = `style="font-size: ${f}px"`, u = `style="height: ${m}px"`, G = `style="top: ${y}px"`, P = `style="bottom: ${h}px"`, A = "./img/" + s + "/" + n + ".svg", E = new URL(A, import.meta.url).href, S = n !== "f" && n !== "g" ? `<div ${P} class="dpeGenerator_passoire"><p ${p}>passoire<br> énergetique</p></div>` : "", _ = `<figure class="dpeGenerator dpeGenerator-${s}">
    ${S}
    <div class="dpeGenerator_text"><p ${p}>Logement extrêmement performant</p><p ${p}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${E}" alt="étiquette energie dpe ${n}">
    <div ${G} class="dpeGenerator_infos ${n}">
    <div class="dpeGenerator_infos_consommation">
    <span ${r} class="top alt">consommation</span>
    <span ${u} class="bot">
        <span ${d} class="number number-consommation">${c}</span>
        <span ${r} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${r} class="top alt">émissions</span>
        <span ${u} class="bot">
            <span ${d} class="number number-emissions">${o}<sub>*</sub></span>
            <span ${r} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  e.innerHTML = _;
}
function C(e, c, o, n) {
  let s = 200, t = 32, i = {
    a: s,
    b: s + t,
    c: s + t * 2,
    d: s + t * 3,
    e: s + t * 4,
    f: s + t * 5,
    g: s + t * 6
  }, g = 40;
  const l = e.offsetWidth / 500, a = l * v, $ = l * w, f = l * g, b = l * i[o], m = `style="font-size: ${a}px"`, y = `style="font-size: ${$}px"`, h = `style="height: ${f}px"`, r = `style="top: ${b}px"`, p = "./img/" + n + "/" + o + ".svg", d = new URL(p, import.meta.url).href, u = `<figure class="dpeGenerator dpeGenerator-${n}">
    <img id="dpeImg" src="${d}" alt="étiquette energie dpe ${o}">
    <img id="textGes" src="./img/ges/texte.svg" alt="Texte GES">
    <div ${r} class="dpeGenerator_infos ${o}">
    <div class="dpeGenerator_infos_emissions">
        <span ${m} class="top alt">émissions</span>
        <span ${h} class="bot">
            <span ${y} class="number number-emissions">${c}<sub>*</sub></span>
            <span ${m} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  e.innerHTML = u;
}
N.forEach((e) => {
  const c = e.getAttribute("dpe-consommation"), o = e.getAttribute("dpe-emissions"), n = e.getAttribute("dpe-letter").toLowerCase(), s = e.getAttribute("dpe-type");
  s === "dpe" ? z(e, c, o, n, s) : s === "ges" && C(e, o, n, s);
});
window.addEventListener("resize", z);
