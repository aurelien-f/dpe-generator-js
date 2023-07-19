const A = document.querySelectorAll(".dpe-generator-js");
let G = 10, S = 29, _ = 14, E = 65, C = 70, e = 35, o = 40, L = {
  a: e,
  b: e + o,
  c: e + o * 2,
  d: e + o * 3,
  e: e + o * 4,
  f: e + o * 5,
  g: e + o * 6
};
function d(s, r, c, t, i) {
  const n = s.offsetWidth / 500, u = n * G, $ = n * S, f = n * _, g = n * E, b = n * L[t], y = n * C, a = `style="font-size: ${u}px"`, p = `style="font-size: ${f}px"`, l = `style="font-size: ${$}px"`, m = `style="height: ${g}px"`, h = `style="top: ${b}px"`, v = `style="bottom: ${y}px"`, x = "./img/+" + i + "/" + t + ".svg", w = new URL(x, import.meta.url).href, z = t !== "f" && t !== "g" ? `<div ${v} class="dpeGenerator_passoire"><p ${p}>passoire<br> énergetique</p></div>` : "", P = `<figure class="dpeGenerator dpeGenerator-${i}">
    ${z}
    <div class="dpeGenerator_text"><p ${p}>Logement extrêmement performant</p><p ${p}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${w}" alt="étiquette energie dpe ${t}">
    <div ${h} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${a} class="top alt">consommation</span>
        <span ${m} class="bot">
            <span ${l} class="number number-consommation">${r}</span>
            <span ${a} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${a} class="top alt">émissions</span>
        <span ${m} class="bot">
            <span ${l} class="number number-emissions">${c}<sub>*</sub></span>
            <span ${a} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  s.innerHTML = P;
}
A.forEach((s) => {
  const r = s.getAttribute("dpe-consommation"), c = s.getAttribute("dpe-emissions"), t = s.getAttribute("dpe-letter").toLowerCase(), i = s.getAttribute("dpe-type");
  d(s, r, c, t, i);
});
window.addEventListener("resize", d);
