const A = document.querySelectorAll(".dpe-generator-js");
let L = 10, G = 29, S = 14, _ = 65, E = 70, s = 35, n = 40, T = {
  a: s,
  b: s + n,
  c: s + n * 2,
  d: s + n * 3,
  e: s + n * 4,
  f: s + n * 5,
  g: s + n * 6
};
function c(e) {
  const l = e.getAttribute("dpe-consommation"), m = e.getAttribute("dpe-emissions"), o = e.getAttribute("dpe-letter").toLowerCase(), d = e.getAttribute("dpe-type"), t = e.offsetWidth / 500, u = t * L, $ = t * G, g = t * S, f = t * _, b = t * T[o], y = t * E, i = `style="font-size: ${u}px"`, a = `style="font-size: ${g}px"`, r = `style="font-size: ${$}px"`, p = `style="height: ${f}px"`, h = `style="top: ${b}px"`, v = `style="bottom: ${y}px"`, x = "./img/energie/" + o + ".svg", w = new URL(x, import.meta.url).href, z = o !== "f" && o !== "g" ? `<div ${v} class="dpeGenerator_passoire"><p ${a}>passoire<br> énergetique</p></div>` : "", P = `<figure class="dpeGenerator dpeGenerator-${d}">
    ${z}
    <div class="dpeGenerator_text"><p ${a}>Logement extrêmement performant</p><p ${a}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${w}" alt="étiquette energie dpe ${o}">
    <div ${h} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${i} class="top alt">consommation</span>
        <span ${p} class="bot">
            <span ${r} class="number number-consommation">${l}</span>
            <span ${i} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${i} class="top alt">émissions</span>
        <span ${p} class="bot">
            <span ${r} class="number number-emissions">${m}<sub>*</sub></span>
            <span ${i} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  e.innerHTML = P;
}
A.forEach((e) => {
  c(e);
});
window.addEventListener("resize", c);
