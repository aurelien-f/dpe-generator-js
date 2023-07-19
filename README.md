# Getting started

Génère un affichage DPE (Performance énergétique et Performance climatique) réglementaire (2023)

![Exemple de schéma DPE ](https://i.postimg.cc/QxTS2zPj/Capture-d-e-cran-2023-07-19-a-09-35-28.png)

## Install

    npm i dpe-generator

## Import the components

### Footer

    <script  type="text/javascript"  src="../node_modules/dpe-generator/dist/dpe-generator.umd.cjs"></script>
    
### Head

    <link  href="../node_modules/dpe-generator/dist/style.css"  type="text/css"  rel="stylesheet"  media="screen,projection" />
    
## How to use ?

    <div class="dpe-generator-js" dpe-type="dpe" dpe-letter="G" dpe-consommation="450" dpe-emissions="90"></div>

**Init** the module with class : `.dpe-generator-js`

**Options :** 
**dpe-type :** Type de module -> dpe *(ges en cours de dev)*
**dpe-letter :** Lettre -> a / b /  c /  d /  e /  f /  g
**dpe-consommation :** Valeur de la consommation -> ex : 450
**dpe-emissions :** Valeur de la consommation -> ex : 90

Le module est responsive sur une base de 500px de largeur. 