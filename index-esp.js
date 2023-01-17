//Death count in main block Por segundo
let fishDeathCountCountry = document.getElementById("fishdeathcount-country");
let CountryText = document.getElementById("Countrytext");
let deathCount = document.getElementById("deathcount");
let fishDeathCount = document.getElementById("fishdeathcount");

let deaths = 0;
let fishDeaths = 0;
let deathCountWorld;
let fishDeathCountWorld; 

function counter(){
    deathCountWorld =  deaths+=2355;
    deathCount.textContent = deathCountWorld.toLocaleString();
    fishDeathCountWorld = fishDeaths+=5.4;
    fishDeathCount.textContent = fishDeathCountWorld.toLocaleString();
}
setInterval(counter,1000);

//Collapsible button
let mainBlockPerAnimal = document.getElementById("mainblockperanimal");
let collapseArrowBtn = document.querySelector("#arrow");
let collapse = false;

function collapseanimals(){
if (collapse == false){
mainBlockPerAnimal.style.display = "inline";
collapse = true;
collapseArrowBtn.style.rotate = "180deg";
}
else if (collapse == true) {
mainBlockPerAnimal.style.display = "none";
collapse = false;
collapseArrowBtn.style.rotate = "0deg";
}
}

//Death count in main block per Animal Por segundo
let deathCountCowsEl = document.getElementById("deathcount-cows");
let deathCountCows = 0;
let deathCountCowsWorld;
let deathCountPigsEl = document.getElementById("deathcount-pigs")
let deathCountPigs = 0;
let deathCountPigsWorld;
let deathCountSheepEl = document.getElementById("deathcount-sheep");
let deathCountSheep = 0;
let deathCountSheepWorld;
let deathCountChickenEl = document.getElementById("deathcount-chicken");
let deathCountChicken = 0;
let deathCountChickenWorld;
let deathCountTurkeyEl = document.getElementById("deathcount-turkey");
let deathCountTurkey = 0;
let deathCountTurkeyWorld;
let deathCountFishEl = document.getElementById("deathcount-fish");
let deathCountFish = 0;
let deathCountFishWorld;




function counterPerAnimal(){
deathCountCowsWorld = deathCountCows += 9;
deathCountCowsEl.textContent = deathCountCowsWorld.toLocaleString();
deathCountPigsWorld = deathCountPigs += 48;
deathCountPigsEl.textContent = deathCountPigsWorld.toLocaleString();
deathCountSheepWorld = deathCountSheep += 18.7;
deathCountSheepEl.textContent = deathCountSheepWorld.toLocaleString(undefined, {maximumFractionDigits:0});
deathCountChickenWorld = deathCountChicken += 2244;
deathCountChickenEl.textContent = deathCountChickenWorld.toLocaleString();
deathCountTurkeyWorld = deathCountTurkey += 19.6;
deathCountTurkeyEl.textContent = deathCountTurkeyWorld.toLocaleString(undefined, {maximumFractionDigits:0});
deathCountFishWorld = deathCountFish += 5.4;
deathCountFishEl.textContent = deathCountFishWorld.toLocaleString() + " t";
}
setInterval(counterPerAnimal,1000);

//Death count per country Por segundo
//Div display
let countryDeathCountArg = document.getElementById("countrydeathcount-arg");
let countryDeathCountBra = document.getElementById("countrydeathcount-bra");
let countryDeathCountCan = document.getElementById("countrydeathcount-can");
let countryDeathCountChi = document.getElementById("countrydeathcount-chi");
let countryDeathCountEcu = document.getElementById("countrydeathcount-ecu");
let countryDeathCountMex = document.getElementById("countrydeathcount-mex");
let countryDeathCountSpa = document.getElementById("countrydeathcount-spa");
let countryDeathCountUsa = document.getElementById("countrydeathcount-usa");
//Changing Numbers
let deathCountArg= document.getElementById("deathcount-arg");
let fishDeathCountArg= document.getElementById("fishdeathcount-arg");
let deathCountBra= document.getElementById("deathcount-bra");
let fishDeathCountBra= document.getElementById("fishdeathcount-bra");
let deathCountCan = document.getElementById("deathcount-can")
let fishDeathCountCan= document.getElementById("fishdeathcount-can");
let deathCountChi = document.getElementById("deathcount-chi")
let fishDeathCountChi= document.getElementById("fishdeathcount-chi");
let deathCountEcu = document.getElementById("deathcount-ecu")
let fishDeathCountEcu= document.getElementById("fishdeathcount-ecu");
let deathCountMex = document.getElementById("deathcount-mex")
let fishDeathCountMex= document.getElementById("fishdeathcount-mex");
let deathCountSpa = document.getElementById("deathcount-spa")
let fishDeathCountSpa= document.getElementById("fishdeathcount-spa");
let deathCountUsa = document.getElementById("deathcount-usa")
let fishDeathCountUsa= document.getElementById("fishdeathcount-usa");

//Function per country
let deathsArg = 0;
let fishDeathsArg = 0;
let deathsArgNum;
let fishDeathsArgNum;

function counterArg(){
    deathsArgNum = deathsArg+=25;
    deathCountArg.textContent = deathsArgNum.toLocaleString();
    fishDeathsArgNum = fishDeathsArg+=0.03;
    fishDeathCountArg.textContent = fishDeathsArgNum.toLocaleString();
}
setInterval(counterArg,1000);


let deathsBra = 0;
let fishDeathsBra = 0;
let deathsBraNum;
let fishDeathsBraNum;

function counterBra(){
    deathsBraNum = deathsBra+=196;
    deathCountBra.textContent = deathsBraNum.toLocaleString();
    fishDeathsBraNum = fishDeathsBra+=0.04;
    fishDeathCountBra.textContent = fishDeathsBraNum.toLocaleString();
}
setInterval(counterBra,1000);

let deathsCan = 0;
let fishDeathsCan = 0;
let deathsCanNum;
let fishDeathsCanNum;

function counterCan(){
    deathsCanNum = deathsCan+=25;
    deathCountCan.textContent = deathsCanNum.toLocaleString();
    fishDeathsCanNum = fishDeathsCan+=0.03;
    fishDeathCountCan.textContent = fishDeathsCanNum.toLocaleString();
}
setInterval(counterCan,1000);

let deathsChi = 0;
let fishDeathsChi = 0;
let deathsChiNum;
let fishDeathsChiNum;

function counterChi(){
    deathsChiNum = deathsChi+=342;
    deathCountChi.textContent = deathsChiNum.toLocaleString();
    fishDeathsChiNum = fishDeathsChi+=2.01;
    fishDeathCountChi.textContent = fishDeathsChiNum.toLocaleString();
}
setInterval(counterChi,1000);

let deathsEcu = 0;
let fishDeathsEcu = 0;
let deathsEcuNum;
let fishDeathsEcuNum;

function counterEcu(){
    deathsEcuNum = deathsEcu+=5;
    deathCountEcu.textContent = deathsEcuNum.toLocaleString();
    fishDeathsEcuNum = fishDeathsEcu+=0.04;
    fishDeathCountEcu.textContent = fishDeathsEcuNum.toLocaleString();
}
setInterval(counterEcu,1000);

let deathsMex = 0;
let fishDeathsMex = 0;
let deathsMexNum;
let fishDeathsMexNum;

function counterMex(){
    deathsMexNum = deathsMex+=63;
    deathCountMex.textContent = deathsMexNum.toLocaleString();
    fishDeathsMexNum = fishDeathsMex+=0.06;
    fishDeathCountMex.textContent = fishDeathsMexNum.toLocaleString();
}
setInterval(counterMex,1000);

let deathsSpa = 0;
let fishDeathsSpa = 0;
let deathsSpaNum;
let fishDeathsSpaNum;

function counterSpa(){
    deathsSpaNum = deathsSpa+=25;
    deathCountSpa.textContent = deathsSpaNum.toLocaleString();
    fishDeathsSpaNum = fishDeathsSpa+=0.04;
    fishDeathCountSpa.textContent = fishDeathsSpaNum.toLocaleString();
}
setInterval(counterSpa,1000);

let deathsUsa = 0;
let fishDeathsUsa = 0;
let deathsUsaNum;
let fishDeathsUsaNum;

function counterUsa(){
    deathsUsaNum = deathsUsa+=309;
    deathCountUsa.textContent = deathsUsaNum.toLocaleString();
    fishDeathsUsaNum = fishDeathsUsa+=0.2;
    fishDeathCountUsa.textContent = fishDeathsUsaNum.toLocaleString();
}
setInterval(counterUsa,1000);



//Country Selector

let selectedCountry = document.getElementById("countrylist").value;

function getSelectedCountry(){
    let selectedCountry = document.getElementById("countrylist").value;
    console.log(selectedCountry);
    cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
    pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
    sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Ovejas"><div class="tooltip">Ovejas</div>`;
    chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
    turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
    fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;

    
    switch (selectedCountry){
        case "World":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Argentina":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="block";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Brazil":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="block";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Canada":
        stats.innerHTML = '<p>Select Animal</p>';
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="block";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "China":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="block";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Ecuador":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="block";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Mexico":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="block";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Spain":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="block";
        countryDeathCountUsa.style.display="none";
        break;

        case "Usa":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="block";
        break;
        default: alert("Select a country");
    };
};


// Animal Stats per country

let stats = document.getElementById("data-el");


let cowsDataWorld = `<ul class="list" >
<li>Anual:</li> <div>293,196,735</div>
<li>Mensual:</li> <div>24,433,061</div>
<li>Diario:</li> <div>803,279</div>
<li>Por hora:</li> <div>33,470</div>
<li>Por minuto:</li> <div>558</div>
<li>Por segundo:</li> <div>9</div>
</ul>`;
let cowsDataArgentina = `<ul class="list" >
<li>Anual: </li> <div>13,991,415</div>
<li>Mensual: </li> <div>1,165,951</div>
<li>Diario: </li> <div>38,333</div>
<li>Por hora: </li> <div>1,597</div>
<li>Por minuto: </li> <div>27</div>
<li>Por segundo: </li> <div>0.4</div>
</ul>`;
let cowsDataBrazilYear = 29887036;
let cowsDataBrazil = `<ul class="list" >
<li>Anual: </li> <div>${cowsDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(cowsDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(cowsDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(cowsDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(cowsDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(cowsDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;

let cowsDataCanada = `<ul class="list" >
<li>Anual: </li> <div>3,538,900</div>
<li>Mensual: </li> <div>294,908</div>
<li>Diario: </li> <div>9,696</div>
<li>Por hora: </li> <div>404</div>
<li>Por minuto: </li> <div>7</div>
<li>Por segundo: </li> <div>0.1</div>
</ul>`;
let cowsDataChina = `<ul class="list" >
<li>Anual: </li> <div>40,819,593</div>
<li>Mensual: </li> <div>3,401,633</div>
<li>Diario: </li> <div>111,835</div>
<li>Por hora: </li> <div>4,660</div>
<li>Por minuto: </li> <div>78</div>
<li>Por segundo: </li> <div>1.3</div>
</ul>`;
let cowsDataEcuador = `<ul class="list" >
<li>Anual: </li> <div>1,100,247</div>
<li>Mensual: </li> <div>91,687</div>
<li>Diario: </li> <div>3,014</div>
<li>Por hora: </li> <div>126</div>
<li>Por minuto: </li> <div>2</div>
<li>Por segundo: </li> <div>0.03</div>
</ul>`;
let cowsDataMexico = `<ul class="list" >
<li>Anual: </li> <div>8,410,000</div>
<li>Mensual: </li> <div>700,833</div>
<li>Diario: </li> <div>23,041</div>
<li>Por hora: </li> <div>960</div>
<li>Por minuto: </li> <div>16</div>
<li>Por segundo: </li> <div>0.27</div>
</ul>`;
let cowsDataSpain = `<ul class="list" >
<li>Anual: </li> <div>2,420,000</div>
<li>Mensual: </li> <div>201,667</div>
<li>Diario: </li> <div>6,630</div>
<li>Por hora: </li> <div>276</div>
<li>Por minuto: </li> <div>5</div>
<li>Por segundo: </li> <div>0.08</div>
</ul>`;
let cowsDataUsa = `<ul class="list" >
<li>Anual: </li> <div>33,366,100</div>
<li>Mensual: </li> <div>2,780,508</div>
<li>Diario: </li> <div>91,414</div>
<li>Por hora: </li> <div>3,809</div>
<li>Por minuto: </li> <div>63</div>
<li>Por segundo: </li> <div>1.1</div>
</ul>`;
let pigsDataWorld = `<ul class="list" >
<li>Anual: </li> <div>1,511,512,828</div>
<li>Mensual: </li> <div>125,959,402</div>
<li>Diario: </li> <div>4,141,131</div>
<li>Por hora: </li> <div>172,547</div>
<li>Por minuto: </li> <div>2,876</div>
<li>Por segundo: </li> <div>48</div>
</ul>`;
let pigsDataArgentina = `<ul class="list" >
<li>Anual: </li> <div>7,010,000</div>
<li>Mensual: </li> <div>584,167</div>
<li>Diario: </li> <div>19,205</div>
<li>Por hora: </li> <div>800</div>
<li>Por minuto: </li> <div>13</div>
<li>Por segundo: </li> <div>0.2</div>
</ul>`;
let pigsDataBrazilYear = 49356207;
let pigsDataBrazil = `<ul class="list" >
<li>Anual: </li> <div>${pigsDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(pigsDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(pigsDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(pigsDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(pigsDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(pigsDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let pigsDataCanada = `<ul class="list" >
<li>Anual: </li> <div>22,720,000</div>
<li>Mensual: </li> <div>1,893,333</div>
<li>Diario: </li> <div>62,247</div>
<li>Por hora: </li> <div>2,594</div>
<li>Por minuto: </li> <div>43</div>
<li>Por segundo: </li> <div>0.72</div>
</ul>`;
let pigsDataChina = `<ul class="list" >
<li>Anual: </li> <div>714,860,000</div>
<li>Mensual: </li> <div>59,571,667</div>
<li>Diario: </li> <div>1,958,521</div>
<li>Por hora: </li> <div>81,605</div>
<li>Por minuto: </li> <div>1,360</div>
<li>Por segundo: </li> <div>22.7</div>
</ul>`;
let pigsDataEcuador = `<ul class="list" >
<li>Anual: </li> <div>2,100,000</div>
<li>Mensual: </li> <div>175,000</div>
<li>Diario: </li> <div>5,753</div>
<li>Por hora: </li> <div>240</div>
<li>Por minuto: </li> <div>4</div>
<li>Por segundo: </li> <div>0.07</div>
</ul>`;
let pigsDataMexico = `<ul class="list" >
<li>Anual: </li> <div>20,290,000</div>
<li>Mensual: </li> <div>1,690,833</div>
<li>Diario: </li> <div>55,589</div>
<li>Por hora: </li> <div>2,316</div>
<li>Por minuto: </li> <div>39</div>
<li>Por segundo: </li> <div>0.64</div>
</ul>`;
let pigsDataSpain = `<ul class="list" >
<li>Anual: </li> <div>56,130,000</div>
<li>Mensual: </li> <div>4,677,500</div>
<li>Diario: </li> <div>153,781</div>
<li>Por hora: </li> <div>6,408</div>
<li>Por minuto: </li> <div>107</div>
<li>Por segundo: </li> <div>1.78</div>
</ul>`;
let pigsDataUsa = `<ul class="list" >
<li>Anual: </li> <div>131,640,000</div>
<li>Mensual: </li> <div>10,970,000</div>
<li>Diario: </li> <div>360,658</div>
<li>Por hora: </li> <div>15,027</div>
<li>Por minuto: </li> <div>250</div>
<li>Por segundo: </li> <div>4.17</div>
</ul>`;
let sheepDataWorldYear = 590507650;
let sheepDataWorld = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataWorldYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let sheepDataArgentinaYear = 3080000;
let sheepDataArgentina = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataArgentinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataBrazilYear = 6389554;
let sheepDataBrazil = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataCanadaYear = 744800;
let sheepDataCanada = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataCanadaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataChinaYear = 176850000;
let sheepDataChina = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataChinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataEcuadorYear = 372096;
let sheepDataEcuador = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataEcuadorYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataMexicoYear = 3170000;
let sheepDataMexico = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataMexicoYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataSpainYear = 9560000;
let sheepDataSpain = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataSpainYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataUsaYear = 2320000;
let sheepDataUsa = `<ul class="list" >
<li>Anual: </li> <div>${sheepDataUsaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(sheepDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(sheepDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(sheepDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(sheepDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(sheepDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let chickenDataWorld = `<ul class="list" >
<li>Anual: </li> <div>70,767,577,000</div>
<li>Mensual: </li> <div>5,897,298,083</div>
<li>Diario: </li> <div>193,883,773</div>
<li>Por hora: </li> <div>8,078,491</div>
<li>Por minuto: </li> <div>134,642</div>
<li>Por segundo: </li> <div>2,244</div>
</ul>`;
let chickenDataArgentina = `<ul class="list" >
<li>Anual: </li> <div>757,490,000</div>
<li>Mensual: </li> <div>63,124,167</div>
<li>Diario: </li> <div>2,075,315</div>
<li>Por hora: </li> <div>86,471</div>
<li>Por minuto: </li> <div>1,441</div>
<li>Por segundo: </li> <div>24</div>
</ul>`;
let chickenDataBrazilYear = 6006415000;
let chickenDataBrazil = `<ul class="list" >
<li>Anual: </li> <div>${chickenDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(chickenDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(chickenDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(chickenDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(chickenDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(chickenDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let chickenDataCanada = `<ul class="list" >
<li>Anual: </li> <div>754,950,000</div>
<li>Mensual: </li> <div>62,912,500</div>
<li>Diario: </li> <div>2,068,356</div>
<li>Por hora: </li> <div>86,182</div>
<li>Por minuto: </li> <div>1,436</div>
<li>Por segundo: </li> <div>24</div>
</ul>`;
let chickenDataChina = `<ul class="list" >
<li>Anual: </li> <div>9,690,000,000</div>
<li>Mensual: </li> <div>807,500,000</div>
<li>Diario: </li> <div>26,547,945</div>
<li>Por hora: </li> <div>1,106,164</div>
<li>Por minuto: </li> <div>18,436</div>
<li>Por segundo: </li> <div>307</div>
</ul>`;
let chickenDataEcuador = `<ul class="list" >
<li>Anual: </li> <div>155,680,000</div>
<li>Mensual: </li> <div>12,973,333</div>
<li>Diario: </li> <div>426,521</div>
<li>Por hora: </li> <div>17,772</div>
<li>Por minuto: </li> <div>296</div>
<li>Por segundo: </li> <div>5</div>
</ul>`;
let chickenDataMexico = `<ul class="list" >
<li>Anual: </li> <div>1,960,000,000</div>
<li>Mensual: </li> <div>163,333,333</div>
<li>Diario: </li> <div>5,369,863</div>
<li>Por hora: </li> <div>223,744</div>
<li>Por minuto: </li> <div>3,729</div>
<li>Por segundo: </li> <div>62</div>
</ul>`;
let chickenDataSpain = `<ul class="list" >
<li>Anual: </li> <div>696,390,000</div>
<li>Mensual: </li> <div>58,032,500</div>
<li>Diario: </li> <div>1,907,918</div>
<li>Por hora: </li> <div>79,497</div>
<li>Por minuto: </li> <div>1,325</div>
<li>Por segundo: </li> <div>22</div>
</ul>`;
let chickenDataUsaYear = 9346660000;
let chickenDataUsa = `<ul class="list" >
<li>Anual: </li> <div>${chickenDataUsaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(chickenDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(chickenDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(chickenDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(chickenDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(chickenDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let turkeyDataWorldYear = 617880000;
let turkeyDataWorld = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataWorldYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let turkeyDataArgentinaYear = 6980000;
let turkeyDataArgentina = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataArgentinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataBrazilYear = 86706000;
let turkeyDataBrazil = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataCanadaYear = 18730000;
let turkeyDataCanada = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataCanadaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataChinaYear = 176850000;
let turkeyDataChina = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataChinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataEcuadorYear = 758000;
let turkeyDataEcuador = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataEcuadorYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataMexicoYear = 2910000;
let turkeyDataMexico = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataMexicoYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataSpainYear = 27410000;
let turkeyDataSpain = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataSpainYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataUsaYear = 223000000;
let turkeyDataUsa = `<ul class="list" >
<li>Anual: </li> <div>${turkeyDataUsaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(turkeyDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(turkeyDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(turkeyDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(turkeyDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(turkeyDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataWorldYear = 171094560;
let fishDataWorld = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataWorldYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let fishDataArgentinaYear = 838630;
let fishDataArgentina = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataArgentinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataBrazilYear = 1299120;
let fishDataBrazil = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataBrazilYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataCanadaYear = 1026450;
let fishDataCanada = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataCanadaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataChinaYear = 63360572;
let fishDataChina = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataChinaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataEcuadorYear = 1112710;
let fishDataEcuador = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataEcuadorYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataMexicoYear = 1871950;
let fishDataMexico = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataMexicoYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataSpainYear = 1264820;
let fishDataSpain = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataSpainYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataUsaYear = 5475780;
let fishDataUsa = `(Medido en Toneladas)<fn>2</fn> <ul class="list" >
<li>Anual: </li> <div>${fishDataUsaYear.toLocaleString()}</div>
<li>Mensual: </li> <div>${(fishDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Diario: </li> <div>${(fishDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por hora: </li> <div>${(fishDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por minuto: </li> <div>${(fishDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Por segundo: </li> <div>${(fishDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;


let orangeBtn;

function cows(){
    orangeBtn = "cow";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World":  stats.innerHTML = cowsDataWorld;
        break;
        case "Argentina": stats.innerHTML = cowsDataArgentina;
        break;
        case "Brazil": stats.innerHTML = cowsDataBrazil;
        break;
        case "Canada": stats.innerHTML = cowsDataCanada;
        break;
        case "China": stats.innerHTML = cowsDataChina;
        break;
        case "Ecuador": stats.innerHTML = cowsDataEcuador;
        break;
        case "Mexico": stats.innerHTML = cowsDataMexico;
        break;
        case "Spain": stats.innerHTML = cowsDataSpain;
        break;
        case "Usa": stats.innerHTML = cowsDataUsa;
        break;
        default: alert("Select a country");
    }
};

function pigs(){
    orangeBtn = "pigs";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World": stats.innerHTML = pigsDataWorld;
        break;
        case "Argentina": stats.innerHTML = pigsDataArgentina;
        break;
        case "Brazil": stats.innerHTML = pigsDataBrazil;
        break;
        case "Canada": stats.innerHTML = pigsDataCanada;
        break;
        case "China": stats.innerHTML = pigsDataChina;
        break;
        case "Ecuador": stats.innerHTML = pigsDataEcuador;
        break;
        case "Spain": stats.innerHTML = pigsDataSpain;
        break;
        case "Usa": stats.innerHTML = pigsDataUsa;
        break;
        case "Usa": stats.innerHTML = pigsDataUsa;
        break;
        default: alert("Select a country");
    }
};

function sheep(){
    orangeBtn = "sheep";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World": stats.innerHTML = sheepDataWorld;
        break;
        case "Argentina": stats.innerHTML = sheepDataArgentina;
        break;
        case "Brazil": stats.innerHTML = sheepDataBrazil;
        break;
        case "Canada": stats.innerHTML = sheepDataCanada;
        break;
        case "China": stats.innerHTML = sheepDataChina;
        break;
        case "Ecuador": stats.innerHTML = sheepDataEcuador;
        break;
        case "Mexico": stats.innerHTML = sheepDataMexico;
        break;
        case "Spain": stats.innerHTML = sheepDataSpain;
        break;
        case "Usa": stats.innerHTML = sheepDataUsa;
        break;
        default: alert("Select a country");
    }
};

function chicken(){
    orangeBtn = "chicken";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World": stats.innerHTML = chickenDataWorld;
        break;
        case "Argentina": stats.innerHTML = chickenDataArgentina;
        break;
        case "Brazil": stats.innerHTML = chickenDataBrazil;
        break;
        case "Canada": stats.innerHTML = chickenDataCanada;
        break;
        case "China": stats.innerHTML = chickenDataChina;
        break;
        case "Ecuador": stats.innerHTML = chickenDataEcuador;
        break;
        case "Mexico": stats.innerHTML = chickenDataMexico;
        break;
        case "Spain": stats.innerHTML = chickenDataSpain;
        break;
        case "Usa": stats.innerHTML = chickenDataUsa;
        break;
        default: alert("Select a country");
    }
};

function turkey(){
    orangeBtn = "turkey";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World": stats.innerHTML = turkeyDataWorld;
        break;
        case "Argentina": stats.innerHTML = turkeyDataArgentina;
        break;
        case "Brazil": stats.innerHTML = turkeyDataBrazil;
        break;
        case "Canada": stats.innerHTML = turkeyDataCanada;
        break;
        case "China": stats.innerHTML = turkeyDataChina;
        break;
        case "Ecuador": stats.innerHTML = turkeyDataEcuador;
        break;
        case "Mexico": stats.innerHTML = turkeyDataMexico;
        break;
        case "Spain": stats.innerHTML = turkeyDataSpain;
        break;
        case "Usa": stats.innerHTML = turkeyDataUsa;
        break;
        default: alert("Select a country");
    }
};

function fish(){
    orangeBtn = "fish";
    let selectedCountry = document.getElementById("countrylist").value;
    switch (selectedCountry){
        case "World": stats.innerHTML = fishDataWorld;
        break;
        case "Argentina": stats.innerHTML = fishDataArgentina;
        break;
        case "Brazil": stats.innerHTML = fishDataBrazil;
        break;
        case "Canada": stats.innerHTML = fishDataCanada;
        break;
        case "China": stats.innerHTML = fishDataChina;
        break;
        case "Ecuador": stats.innerHTML = fishDataEcuador;
        break;
        case "Mexico": stats.innerHTML = fishDataMexico;
        break;
        case "Spain": stats.innerHTML = fishDataSpain;
        break;
        case "Usa": stats.innerHTML = fishDataUsa;
        break;
        default: alert("Select a country");
    }
};

let cowBtn = document.getElementById("cowbtn");
let pigsBtn = document.getElementById("pigsbtn");
let sheepBtn = document.getElementById("sheepbtn");
let chickenBtn = document.getElementById("chickenbtn");
let turkeyBtn = document.getElementById("turkeybtn");
let fishBtn = document.getElementById("fishbtn");

function orangeButtons(){
    switch(orangeBtn){
        case "cow":
            cowBtn.innerHTML = `<img src="images/cow-icon-orange.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Ovejas"><div class="tooltip">Ovejas</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;
        break;
        case "pigs":
            cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon-orange.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Ovejas"><div class="tooltip">Ovejas</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;
        break;
        case "sheep":
            cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon-orange.png" alt="Ovejas"><div class="tooltip">Ovejas</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;
        break;
        case "chicken":
            cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Ovejas"><div class="tooltip">Ovejas</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon-orange.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;
        break;
        case "turkey":
            cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Cerdos</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Ovejas"><div class="tooltip">Sheep</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon-orange.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Marinos"><div class="tooltip">Marinos</div>`;

        break;
        case "fish":
            cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Vacas"><div class="tooltip">Vacas</div>`;
            pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Cerdos"><div class="tooltip">Pigs</div>`;
            sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Sheep"><div class="tooltip">Sheep</div>`;
            chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Pollos"><div class="tooltip">Pollos</div>`;
            turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Pavos"><div class="tooltip">Pavos</div>`;
            fishBtn.innerHTML = `<img src="images/fish-icon-orange.png" alt="Marinos"><div class="tooltip">Marinos</div>`;

        break;
};
}