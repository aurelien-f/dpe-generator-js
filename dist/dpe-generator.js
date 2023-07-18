const y = document.querySelectorAll(".dpe-generator-js");
let h = 10, v = 29, w = 65, t = 35, e = 40, A = {
  a: t,
  b: t + e,
  c: t + e * 2,
  d: t + e * 3,
  e: t + e * 4,
  f: t + e * 5,
  g: t + e * 6
};
function r(s) {
  const p = s.getAttribute("dpe-consommation"), l = s.getAttribute("dpe-emissions"), a = s.getAttribute("dpe-letter").toLowerCase(), d = s.getAttribute("dpe-type"), n = s.offsetWidth / 500, m = n * h, u = n * v, b = n * w, g = n * A[a], o = `style="font-size: ${m}px"`, i = `style="font-size: ${u}px"`, c = `style="height: ${b}px"`, $ = `style="top: ${g}px"`, f = `<figure class="dpeGenerator dpeGenerator-${d}">
    <img id="dpeImg" src="/img/energie/${a}.svg" alt="étiquette energie dpe ${a}">
    <div ${$} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${o} class="top alt">consommation</span>
        <span ${c} class="bot">
            <span ${i} class="number number-consommation">${p}</span>
            <span ${o} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${o} class="top alt">émissions</span>
        <span ${c} class="bot">
            <span ${i} class="number number-emissions">${l}<sub>*</sub></span>
            <span ${o} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
    </div>
    </figure>`;
  s.innerHTML = f;
}
y.forEach((s) => {
  r(s);
});
window.addEventListener("resize", r);
