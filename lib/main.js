import "./style.scss";

const container = document.querySelectorAll(".dpe-generator-js");

const fontSizeAlt = 10;
const fontSizeNumber = 29;
const fontSizeText = 14;
const posPassoire = 70;

// Calculate the new values based on the container width
const containerWidth = container[0]?.offsetWidth || 500;
const calcNewValue = containerWidth / 500;

// Function to create the DPE figure
function createDpe(element, dpeConsommation, dpeEmissions, dpeLetter, dpeType) {
  const firstPos = 35;
  const decalPos = 40;
  const arrayPosLetters = {
    a: firstPos,
    b: firstPos + decalPos,
    c: firstPos + decalPos * 2,
    d: firstPos + decalPos * 3,
    e: firstPos + decalPos * 4,
    f: firstPos + decalPos * 5,
    g: firstPos + decalPos * 6,
  };
  const heightBot = 65;

  const newFontSizeAlt = calcNewValue * fontSizeAlt;
  const newFontSizeNumber = calcNewValue * fontSizeNumber;
  const newFontSizeText = calcNewValue * fontSizeText;
  const newHeightBot = calcNewValue * heightBot;
  const newElemInfos = calcNewValue * arrayPosLetters[dpeLetter];
  const newPosPassoire = calcNewValue * posPassoire;

  const styleAlt = `style="font-size: ${newFontSizeAlt}px"`;
  const styleText = `style="font-size: ${newFontSizeText}px"`;
  const styleNumber = `style="font-size: ${newFontSizeNumber}px"`;
  const styleElemBot = `style="height: ${newHeightBot}px"`;
  const styleElemInfos = `style="top: ${newElemInfos}px"`;
  const stylePosPassoire = `style="bottom: ${newPosPassoire}px"`;

  const img = `./img/${dpeType}/${dpeLetter}.svg`;
  const imgUrl = new URL(img, import.meta.url).href;

  const htmlPassoire =
    dpeLetter !== "f" && dpeLetter !== "g"
      ? `<div ${stylePosPassoire} class="dpeGenerator_passoire"><p ${styleText}>passoire<br> énergetique</p></div>`
      : "";

  const htmlContainer = `<figure class="dpeGenerator dpeGenerator-${dpeType}">
    ${htmlPassoire}
    <div class="dpeGenerator_text"><p ${styleText}>Logement extrêmement performant</p><p ${styleText}>Logement extrêmement peu performant</p></div>
    <img id="dpeImg" src="${imgUrl}" alt="étiquette energie dpe ${dpeLetter}">
    <div ${styleElemInfos} class="dpeGenerator_infos ${dpeLetter}">
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

// Function to create the GES figure
function createGes(element, dpeEmissions, dpeLetter, dpeType) {
  const firstPos = 172;
  const decalPos = 37;
  const arrayPosLetters = {
    a: firstPos,
    b: firstPos + decalPos,
    c: firstPos + decalPos * 2,
    d: firstPos + decalPos * 3.05,
    e: firstPos + decalPos * 4,
    f: firstPos + decalPos * 5.02,
    g: firstPos + decalPos * 6.08,
  };
  const heightBot = 40;

  const newFontSizeAlt = calcNewValue * fontSizeAlt;
  const newFontSizeNumber = calcNewValue * fontSizeNumber;
  const newHeightBot = calcNewValue * heightBot;
  const newElemInfos = calcNewValue * arrayPosLetters[dpeLetter];

  const styleAlt = `style="font-size: ${newFontSizeAlt}px"`;
  const styleNumber = `style="font-size: ${newFontSizeNumber}px"`;
  const styleElemBot = `style="height: ${newHeightBot}px"`;
  const styleElemInfos = `style="top: ${newElemInfos}px"`;

  const img = `./img/${dpeType}/${dpeLetter}.svg`;
  const imgUrl = new URL(img, import.meta.url).href;
  const imgTextGes = new URL("./img/ges/texte.svg", import.meta.url).href;

  const htmlContainer = `<figure class="dpeGenerator dpeGenerator-${dpeType}">
    <img id="dpeImg" src="${imgUrl}" alt="étiquette energie dpe ${dpeLetter}">
    <img id="textGes" src="${imgTextGes}" alt="Texte GES">
    <div ${styleElemInfos} class="dpeGenerator_infos ${dpeLetter}">
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

// Create all
if (container) {
  container.forEach((element) => {
    const dpeConsommation = element.getAttribute("dpe-consommation");
    const dpeEmissions = element.getAttribute("dpe-emissions");
    const dpeLetter = element.getAttribute("dpe-letter").toLowerCase();
    const dpeType = element.getAttribute("dpe-type");
    if (dpeType === "dpe") {
      createDpe(element, dpeConsommation, dpeEmissions, dpeLetter, dpeType);
    } else if (dpeType === "ges") {
      createGes(element, dpeEmissions, dpeLetter, dpeType);
    }
  });
}
