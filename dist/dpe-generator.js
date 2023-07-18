const w = document.querySelectorAll(".dpe-generator-js");
let v = 10, A = 29, z = 65, t = 35, e = 40, E = {
  a: t,
  b: t + e,
  c: t + e * 2,
  d: t + e * 3,
  e: t + e * 4,
  f: t + e * 5,
  g: t + e * 6
};
function c(s) {
  const p = s.getAttribute("dpe-consommation"), l = s.getAttribute("dpe-emissions"), a = s.getAttribute("dpe-letter").toLowerCase(), d = s.getAttribute("dpe-type"), n = s.offsetWidth / 500, m = n * v, u = n * A, b = n * z, g = n * E[a], o = `style="font-size: ${m}px"`, i = `style="font-size: ${u}px"`, r = `style="height: ${b}px"`, f = `style="top: ${g}px"`, $ = "./img/energie/" + a + ".svg", y = new URL($, import.meta.url).href, h = `<figure class="dpeGenerator dpeGenerator-${d}">
    <img id="dpeImg" src="${y}" alt="étiquette energie dpe ${a}">
    <div ${f} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${o} class="top alt">consommation</span>
        <span ${r} class="bot">
            <span ${i} class="number number-consommation">${p}</span>
            <span ${o} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${o} class="top alt">émissions</span>
        <span ${r} class="bot">
            <span ${i} class="number number-emissions">${l}<sub>*</sub></span>
            <span ${o} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  s.innerHTML = h;
}
w.forEach((s) => {
  c(s);
});
window.addEventListener("resize", c);
