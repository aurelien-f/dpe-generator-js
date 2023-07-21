# Getting started

Génère un affichage DPE ou GES (Performance énergétique et Performance climatique) réglementaire (2023)

![Exemple de schéma DPE ou GES ](https://i.postimg.cc/v8KwcF6x/dpe-ges.jpg)

## Install

    npm i dpe-generator

## Scripts

### Footer

    <script  type="text/javascript"  src="../node_modules/dpe-generator/dist/dpe-generator.umd.cjs"></script>
    
### Head

    <link  href="../node_modules/dpe-generator/dist/style.css"  type="text/css"  rel="stylesheet"  media="screen,projection" />
    
## How to use ?
Exemple de code pour un affichage DPE :
    `<div class="dpe-generator-js" dpe-type="dpe" dpe-letter="g" dpe-consommation="450" dpe-emissions="90"></div>`

Exemple de code pour un affichage GES :
    `<div class="dpe-generator-js" dpe-type="ges" dpe-letter="f" dpe-emissions="80"></div>`

**Init** le module avec la class : `.dpe-generator-js`

**Options :** 
- **dpe-type :** Type d'affichage -> dpe ou ges
- **dpe-letter :** Lettre -> a / b /  c /  d /  e /  f /  g
- **dpe-consommation :** Valeur de la consommation énergétique -> ex : 450
- **dpe-emissions :** Valeur des émissions de C02 -> ex : 90

Le module s'adapte par rapport à la largeur du container. Affichage le plus clair à 500px de largeur. 