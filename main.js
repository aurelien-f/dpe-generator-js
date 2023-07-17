import "./style.scss";

// BASE CONTAINER 500px
// Get the container element
const container = document.querySelectorAll(".dpe-generator-js");

// Set the default variable
let fontSizeAlt = 10;
let fontSizeNumber = 29;
let heightBot = 65;
let firstPos = 35;
let decalPos = 40;
let arrayPosLetters = {
  a: firstPos,
  b: firstPos + decalPos,
  c: firstPos + decalPos * 2,
  d: firstPos + decalPos * 3,
  e: firstPos + decalPos * 4,
  f: firstPos + decalPos * 5,
  g: firstPos + decalPos * 6,
};

// Function to create the DPE figure
function createDpe(element) {
  const dpeConsommation = element.getAttribute("dpe-consommation");
  const dpeEmissions = element.getAttribute("dpe-emissions");
  const dpeLetter = element.getAttribute("dpe-letter").toLowerCase();
  const dpeType = element.getAttribute("dpe-type");
  const containerWidth = element.offsetWidth;
  const calcNewValue = containerWidth / 500;

  const newFontSizeAlt = calcNewValue * fontSizeAlt;
  const newFontSizeNumber = calcNewValue * fontSizeNumber;
  const newHeightBot = calcNewValue * heightBot;
  const newElemInfos = calcNewValue * arrayPosLetters[dpeLetter];

  const styleAlt = `style="font-size: ${newFontSizeAlt}px"`;
  const styleNumber = `style="font-size: ${newFontSizeNumber}px"`;
  const styleElemBot = `style="height: ${newHeightBot}px"`;
  const styleElemInfos = `style="top: ${newElemInfos}px"`;

  const htmlContainer = `<figure class="dpeGenerator dpeGenerator-${dpeType}">
<img id="dpeImg" src="/img/energie/${dpeLetter}.svg" alt="étiquette energie dpe ${dpeLetter}">
<div ${styleElemInfos} class="dpeGenerator_infos">
    <div class="dpeGenerator_infos_consommation">
        <span ${styleAlt} class="top alt">consommation</span>
        <span ${styleElemBot} class="bot">
            <span ${styleNumber} class="number number-consommation">${dpeConsommation}</span>
            <span ${styleAlt} class="alt">kWh/m<sub>2</sub>/an</span>
        </span>
    </div>
    <div class="dpeGenerator_infos_emissions">
        <span ${styleAlt} class="top alt">émissions</span>
        <span ${styleElemBot} class="bot">
            <span ${styleNumber} class="number number-emissions">${dpeEmissions}<sub>*</sub></span>
            <span ${styleAlt} class="alt">kg CO<sub>2</sub>/m<sup>2</sup>/an</span>
        </span>
    </div>
</div>
</figure>`;

  element.innerHTML = htmlContainer;
}

container.forEach((element) => {
  createDpe(element);
});

// Add an event listener for window resize
window.addEventListener("resize", createDpe);
