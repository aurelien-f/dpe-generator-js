const N = document.querySelectorAll(".dpe-generator-js");
let w = 10, G = 29, W = 14, B = 70;
function z(t, c, o, n, s) {
  let e = 35, i = 40, g = {
    a: e,
    b: e + i,
    c: e + i * 2,
    d: e + i * 3,
    e: e + i * 4,
    f: e + i * 5,
    g: e + i * 6
  }, v = 65;
  const a = t.offsetWidth / 500, f = a * w, $ = a * G, b = a * W, m = a * v, h = a * g[n], y = a * B, r = `style="font-size: ${f}px"`, p = `style="font-size: ${b}px"`, d = `style="font-size: ${$}px"`, u = `style="height: ${m}px"`, x = `style="top: ${h}px"`, P = `style="bottom: ${y}px"`, A = "./img/" + s + "/" + n + ".svg", E = new URL(A, import.meta.url).href, S = n !== "f" && n !== "g" ? `<div ${P} class="dpeGenerator_passoire"><p ${p}>passoire<br> énergetique</p></div>` : "", _ = `<figure class="dpeGenerator dpeGenerator-${s}">
    ${S}
    <div class="dpeGenerator_text"><p ${p}>Logement extrêmement performant</p><p ${p}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${E}" alt="étiquette energie dpe ${n}">
    <div ${x} class="dpeGenerator_infos ${n}">
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
  t.innerHTML = _;
}
function C(t, c, o, n) {
  let s = 200, e = 32, i = {
    a: s,
    b: s + e,
    c: s + e * 2,
    d: s + e * 3,
    e: s + e * 4,
    f: s + e * 5,
    g: s + e * 6
  }, g = 40;
  const l = t.offsetWidth / 500, a = l * w, f = l * G, $ = l * g, b = l * i[o], m = `style="font-size: ${a}px"`, h = `style="font-size: ${f}px"`, y = `style="height: ${$}px"`, r = `style="top: ${b}px"`, p = "./img/" + n + "/" + o + ".svg", d = new URL(p, import.meta.url).href, u = new URL("./img/ges/texte.svg", self.location).href, x = `<figure class="dpeGenerator dpeGenerator-${n}">
    <img id="dpeImg" src="${d}" alt="étiquette energie dpe ${o}">
    <img id="textGes" src="${u}" alt="Texte GES">
    <div ${r} class="dpeGenerator_infos ${o}">
    <div class="dpeGenerator_infos_emissions">
        <span ${m} class="top alt">émissions</span>
        <span ${y} class="bot">
            <span ${h} class="number number-emissions">${c}<sub>*</sub></span>
            <span ${m} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  t.innerHTML = x;
}
N.forEach((t) => {
  const c = t.getAttribute("dpe-consommation"), o = t.getAttribute("dpe-emissions"), n = t.getAttribute("dpe-letter").toLowerCase(), s = t.getAttribute("dpe-type");
  s === "dpe" ? z(t, c, o, n, s) : s === "ges" && C(t, o, n, s);
});
window.addEventListener("resize", z);
