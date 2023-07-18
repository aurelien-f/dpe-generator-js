const z = document.querySelectorAll(".dpe-generator-js");
let A = 10, L = 29, G = 14, S = 65, t = 35, s = 40, _ = {
  a: t,
  b: t + s,
  c: t + s * 2,
  d: t + s * 3,
  e: t + s * 4,
  f: t + s * 5,
  g: t + s * 6
};
function c(e) {
  const l = e.getAttribute("dpe-consommation"), m = e.getAttribute("dpe-emissions"), n = e.getAttribute("dpe-letter").toLowerCase(), d = e.getAttribute("dpe-type"), o = e.offsetWidth / 500, u = o * A, g = o * L, f = o * G, $ = o * S, b = o * _[n], i = `style="font-size: ${u}px"`, a = `style="font-size: ${f}px"`, r = `style="font-size: ${g}px"`, p = `style="height: ${$}px"`, y = `style="top: ${b}px"`, h = "./img/energie/" + n + ".svg", v = new URL(h, import.meta.url).href, x = n !== "f" && n !== "g" ? `<div class="dpeGenerator_passoire"><p ${a}>passoire<br> énergetique</p></div>` : "", w = `<figure class="dpeGenerator dpeGenerator-${d}">
    ${x}
    <div class="dpeGenerator_text"><p ${a}>Logement extrêmement performant</p><p ${a}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${v}" alt="étiquette energie dpe ${n}">
    <div ${y} class="dpeGenerator_infos">
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
  e.innerHTML = w;
}
z.forEach((e) => {
  c(e);
});
window.addEventListener("resize", c);
