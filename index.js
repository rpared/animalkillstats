//Death count in main block per second
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

//Collapsible button Worldwide Animals since page loaded
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

//Collapsible button Worldwide Charts
let ChartsWrapper = document.getElementById("charts-wrapper");
let collapseArrowBtn1 = document.querySelector("#arrow1");
let collapseCharts = false;

function collapsecharts(){
if (collapseCharts == false){
    ChartsWrapper.style.display = "inline";
    collapseCharts = true;
    collapseArrowBtn1.style.rotate = "180deg";
}
else if (collapseCharts == true) {
    ChartsWrapper.style.display = "none";
    collapseCharts = false;
    collapseArrowBtn1.style.rotate = "0deg";
}
}




//Collapsible button Land Animals
let LandAnimalsChartWrapper = document.getElementById("landanimalschart-wrapper");
let collapseArrowBtnChart1 = document.querySelector("#arrow-chart1");
let collapseLandChart = false;

function collapselandchart(){
if (collapseLandChart == false){
    LandAnimalsChartWrapper.style.display = "inline";
    collapseLandChart = true;
    collapseArrowBtnChart1.style.rotate = "180deg";
}
else if (collapseLandChart == true) {
    LandAnimalsChartWrapper.style.display = "none";
    collapseLandChart = false;
    collapseArrowBtnChart1.style.rotate = "0deg";
}
}

//Collapsible button Land Animals Per Person
let LandAnimalsChartWrapper1 = document.getElementById("landanimalschart1-wrapper");
let collapseArrowBtnChart2 = document.querySelector("#arrow-chart2");
let collapseLandChart1 = false;

function collapselandchart1(){
if (collapseLandChart1 == false){
    LandAnimalsChartWrapper1.style.display = "inline";
    collapseLandChart1 = true;
    collapseArrowBtnChart2.style.rotate = "180deg";
}
else if (collapseLandChart1 == true) {
    LandAnimalsChartWrapper1.style.display = "none";
    collapseLandChart1 = false;
    collapseArrowBtnChart2.style.rotate = "0deg";
}
}

//Collapsible button Sea Animals
let SeaAnimalsChartWrapper = document.getElementById("seaanimalschart-wrapper");
let collapseArrowBtnChart3 = document.querySelector("#arrow-chart3");
let collapseSeaChart = false;


function collapseseachart(){
    if (collapseSeaChart == false){
        SeaAnimalsChartWrapper.style.display = "inline";
        collapseSeaChart = true;
        collapseArrowBtnChart3.style.rotate = "180deg";
    }
    else if (collapseSeaChart == true) {
        SeaAnimalsChartWrapper.style.display = "none";
        collapseSeaChart = false;
        collapseArrowBtnChart3.style.rotate = "0deg";
    }
}

//Collapsible button Sea Animals Per PErson
let SeaAnimalsChartWrapper1 = document.getElementById("seaanimalschart1-wrapper");
let collapseArrowBtnChart4 = document.querySelector("#arrow-chart4");
let collapseSeaChart1 = false;


function collapseseachart1(){
    if (collapseSeaChart1 == false){
        SeaAnimalsChartWrapper1.style.display = "inline";
        collapseSeaChart1 = true;
        collapseArrowBtnChart4.style.rotate = "180deg";
    }
    else if (collapseSeaChart1 == true) {
        SeaAnimalsChartWrapper1.style.display = "none";
        collapseSeaChart1 = false;
        collapseArrowBtnChart4.style.rotate = "0deg";
    }
}



//Death count in main block per Animal per second
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

//Death count per country per second
//Div display
let countryDeathCountArg = document.getElementById("countrydeathcount-arg");
let countryDeathCountBra = document.getElementById("countrydeathcount-bra");
let countryDeathCountCan = document.getElementById("countrydeathcount-can");
let countryDeathCountChi = document.getElementById("countrydeathcount-chi");
let countryDeathCountCol = document.getElementById("countrydeathcount-col");
let countryDeathCountEcu = document.getElementById("countrydeathcount-ecu");
let countryDeathCountInd = document.getElementById("countrydeathcount-ind");
let countryDeathCountMex = document.getElementById("countrydeathcount-mex");
let countryDeathCountRus = document.getElementById("countrydeathcount-rus");
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
let deathCountCol = document.getElementById("deathcount-col")
let fishDeathCountCol= document.getElementById("fishdeathcount-col");
let deathCountEcu = document.getElementById("deathcount-ecu")
let fishDeathCountEcu= document.getElementById("fishdeathcount-ecu");
let deathCountInd = document.getElementById("deathcount-ind")
let fishDeathCountInd= document.getElementById("fishdeathcount-ind");
let deathCountMex = document.getElementById("deathcount-mex")
let fishDeathCountMex= document.getElementById("fishdeathcount-mex");
let deathCountRus = document.getElementById("deathcount-rus")
let fishDeathCountRus= document.getElementById("fishdeathcount-rus");
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

let deathsCol = 0;
let fishDeathsCol = 0;
let deathsColNum;
let fishDeathsColNum;

function counterCol(){
    deathsColNum = deathsCol+=32;
    deathCountCol.textContent = deathsColNum.toLocaleString();
    fishDeathsColNum = fishDeathsCol+=0.01;
    fishDeathCountCol.textContent = fishDeathsColNum.toLocaleString();
}
setInterval(counterCol,1000);

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

let deathsInd = 0;
let fishDeathsInd = 0;
let deathsIndNum;
let fishDeathsIndNum;

function counterInd(){
    deathsIndNum = deathsInd+=87;
    deathCountInd.textContent = deathsIndNum.toLocaleString();
    fishDeathsIndNum = fishDeathsInd+=0.37;
    fishDeathCountInd.textContent = fishDeathsIndNum.toLocaleString();
}
setInterval(counterInd,1000);

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

let deathsRus = 0;
let fishDeathsRus = 0;
let deathsRusNum;
let fishDeathsRusNum;

function counterRus(){
    deathsRusNum = deathsRus+=81.3;
    deathCountRus.textContent = deathsRusNum.toLocaleString();
    fishDeathsRusNum = fishDeathsRus+=0.16;
    fishDeathCountRus.textContent = fishDeathsRusNum.toLocaleString();
}
setInterval(counterRus,1000);

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
    cowBtn.innerHTML = `<img src="images/cow-icon.png" alt="Cattle"><div class="tooltip">Cattle</div>`;
    pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Pigs"><div class="tooltip">Pigs</div>`;
    sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Sheep"><div class="tooltip">Sheep</div>`;
    chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Chicken"><div class="tooltip">Chicken</div>`;
    turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Turkey"><div class="tooltip">Turkey</div>`;
    fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Fish"><div class="tooltip">Fish</div>`;

    
    switch (selectedCountry){
        case "World":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Argentina":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="block";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Brazil":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="block";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
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
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "China":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="block";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Colombia":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="block";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Ecuador":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="block";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "India":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="block";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Mexico":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="block";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Russia":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="block";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="none";
        break;

        case "Spain":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="block";
        countryDeathCountUsa.style.display="none";
        break;

        case "Usa":
        stats.innerHTML = '<p>Select Animal</p>';
        countryDeathCountArg.style.display="none";
        countryDeathCountBra.style.display="none";
        countryDeathCountCan.style.display="none";
        countryDeathCountChi.style.display="none";
        countryDeathCountCol.style.display="none";
        countryDeathCountEcu.style.display="none";
        countryDeathCountInd.style.display="none";
        countryDeathCountMex.style.display="none";
        countryDeathCountRus.style.display="none";
        countryDeathCountSpa.style.display="none";
        countryDeathCountUsa.style.display="block";
        break;
        default: alert("Select a country");
    };
};


// Animal Stats per country

let stats = document.getElementById("data-el");


let cowsDataWorld = `<p>Cattle Worldwide</p><ul class="list" >
<li>Yearly:</li> <div>293,196,735</div>
<li>Monthly:</li> <div>24,433,061</div>
<li>Daily:</li> <div>803,279</div>
<li>Hourly:</li> <div>33,470</div>
<li>Per minute:</li> <div>558</div>
<li>Per second:</li> <div>9</div>
</ul>`;
let cowsDataArgentina = `<p>Cattle in Argentina</p><ul class="list" >
<li>Yearly: </li> <div>13,991,415</div>
<li>Monthly: </li> <div>1,165,951</div>
<li>Daily: </li> <div>38,333</div>
<li>Hourly: </li> <div>1,597</div>
<li>Per minute: </li> <div>27</div>
<li>Per second: </li> <div>0.4</div>
</ul>`;
let cowsDataBrazilYear = 29887036;
let cowsDataBrazil = `<p>Cattle in Brazil</p><ul class="list" >
<li>Yearly: </li> <div>${cowsDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(cowsDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(cowsDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(cowsDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(cowsDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(cowsDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;

let cowsDataCanada = `<p>Cattle in Canada</p><ul class="list" >
<li>Yearly: </li> <div>3,538,900</div>
<li>Monthly: </li> <div>294,908</div>
<li>Daily: </li> <div>9,696</div>
<li>Hourly: </li> <div>404</div>
<li>Per minute: </li> <div>7</div>
<li>Per second: </li> <div>0.1</div>
</ul>`;
let cowsDataChina = `<p>Cattle in China</p><ul class="list" >
<li>Yearly: </li> <div>40,819,593</div>
<li>Monthly: </li> <div>3,401,633</div>
<li>Daily: </li> <div>111,835</div>
<li>Hourly: </li> <div>4,660</div>
<li>Per minute: </li> <div>78</div>
<li>Per second: </li> <div>1.3</div>
</ul>`;
let cowsDataColombiaYear = 3257033;
let cowsDataColombia = `<p>Cattle in Colombia</p><ul class="list" >
<li>Yearly: </li> <div>${cowsDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(cowsDataColombiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(cowsDataColombiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(cowsDataColombiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(cowsDataColombiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(cowsDataColombiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let cowsDataEcuador = `<p>Cattle in Ecuador</p><ul class="list" >
<li>Yearly: </li> <div>1,100,247</div>
<li>Monthly: </li> <div>91,687</div>
<li>Daily: </li> <div>3,014</div>
<li>Hourly: </li> <div>126</div>
<li>Per minute: </li> <div>2</div>
<li>Per second: </li> <div>0.03</div>
</ul>`;
let cowsDataIndiaYear = 8898832;
let cowsDataIndia = `<p>Cattle in India</p><ul class="list" >
<li>Yearly: </li> <div>${cowsDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(cowsDataIndiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(cowsDataIndiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(cowsDataIndiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(cowsDataIndiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(cowsDataIndiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let cowsDataMexico = `<p>Cattle in Mexico</p><ul class="list" >
<li>Yearly: </li> <div>8,410,000</div>
<li>Monthly: </li> <div>700,833</div>
<li>Daily: </li> <div>23,041</div>
<li>Hourly: </li> <div>960</div>
<li>Per minute: </li> <div>16</div>
<li>Per second: </li> <div>0.27</div>
</ul>`;
let cowsDataRussiaYear = 7862288;
let cowsDataRussia = `<p>Cattle in Russia</p><ul class="list" >
<li>Yearly: </li> <div>${cowsDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(cowsDataRussiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(cowsDataRussiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(cowsDataRussiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(cowsDataRussiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(cowsDataRussiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let cowsDataSpain = `<p>Cattle in the Spain</p><ul class="list" >
<li>Yearly: </li> <div>2,420,000</div>
<li>Monthly: </li> <div>201,667</div>
<li>Daily: </li> <div>6,630</div>
<li>Hourly: </li> <div>276</div>
<li>Per minute: </li> <div>5</div>
<li>Per second: </li> <div>0.08</div>
</ul>`;
let cowsDataUsa = `<p>Cattle in the USA</p><ul class="list" >
<li>Yearly: </li> <div>33,366,100</div>
<li>Monthly: </li> <div>2,780,508</div>
<li>Daily: </li> <div>91,414</div>
<li>Hourly: </li> <div>3,809</div>
<li>Per minute: </li> <div>63</div>
<li>Per second: </li> <div>1.1</div>
</ul>`;
let pigsDataWorld = `<p>Pigs Worldwide</p><ul class="list" >
<li>Yearly: </li> <div>1,511,512,828</div>
<li>Monthly: </li> <div>125,959,402</div>
<li>Daily: </li> <div>4,141,131</div>
<li>Hourly: </li> <div>172,547</div>
<li>Per minute: </li> <div>2,876</div>
<li>Per second: </li> <div>48</div>
</ul>`;
let pigsDataArgentina = `<p>Pigs in Argentina</p><ul class="list" >
<li>Yearly: </li> <div>7,010,000</div>
<li>Monthly: </li> <div>584,167</div>
<li>Daily: </li> <div>19,205</div>
<li>Hourly: </li> <div>800</div>
<li>Per minute: </li> <div>13</div>
<li>Per second: </li> <div>0.2</div>
</ul>`;
let pigsDataBrazilYear = 49356207;
let pigsDataBrazil = `<p>Pigs in Brazil</p><ul class="list" >
<li>Yearly: </li> <div>${pigsDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(pigsDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(pigsDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(pigsDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(pigsDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(pigsDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let pigsDataCanada = `<p>Pigs in Canada</p><ul class="list" >
<li>Yearly: </li> <div>22,720,000</div>
<li>Monthly: </li> <div>1,893,333</div>
<li>Daily: </li> <div>62,247</div>
<li>Hourly: </li> <div>2,594</div>
<li>Per minute: </li> <div>43</div>
<li>Per second: </li> <div>0.72</div>
</ul>`;
let pigsDataChina = `<p>Pigs in China</p><ul class="list" >
<li>Yearly: </li> <div>714,860,000</div>
<li>Monthly: </li> <div>59,571,667</div>
<li>Daily: </li> <div>1,958,521</div>
<li>Hourly: </li> <div>81,605</div>
<li>Per minute: </li> <div>1,360</div>
<li>Per second: </li> <div>22.7</div>
</ul>`;
let pigsDataColombiaYear = 5002299;
let pigsDataColombia = `<p>Pigs in Colombia</p><ul class="list" >
<li>Yearly: </li> <div>${pigsDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(pigsDataColombiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(pigsDataColombiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(pigsDataColombiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(pigsDataColombiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(pigsDataColombiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let pigsDataEcuador = `<p>Pigs in Ecuador</p><ul class="list" >
<li>Yearly: </li> <div>2,100,000</div>
<li>Monthly: </li> <div>175,000</div>
<li>Daily: </li> <div>5,753</div>
<li>Hourly: </li> <div>240</div>
<li>Per minute: </li> <div>4</div>
<li>Per second: </li> <div>0.07</div>
</ul>`;
let pigsDataIndiaYear = 9597994;
let pigsDataIndia = `<p>Pigs in India</p><ul class="list" >
<li>Yearly: </li> <div>${pigsDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(pigsDataIndiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(pigsDataIndiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(pigsDataIndiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(pigsDataIndiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(pigsDataIndiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let pigsDataMexico = `<p>Pigs in Mexico</p><ul class="list" >
<li>Yearly: </li> <div>20,290,000</div>
<li>Monthly: </li> <div>1,690,833</div>
<li>Daily: </li> <div>55,589</div>
<li>Hourly: </li> <div>2,316</div>
<li>Per minute: </li> <div>39</div>
<li>Per second: </li> <div>0.64</div>
</ul>`;
let pigsDataRussiaYear = 46363647;
let pigsDataRussia = `<p>Pigs in Russia</p><ul class="list" >
<li>Yearly: </li> <div>${pigsDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(pigsDataRussiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(pigsDataRussiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(pigsDataRussiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(pigsDataRussiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(pigsDataRussiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let pigsDataSpain = `<p>Pigs in Spain</p><ul class="list" >
<li>Yearly: </li> <div>56,130,000</div>
<li>Monthly: </li> <div>4,677,500</div>
<li>Daily: </li> <div>153,781</div>
<li>Hourly: </li> <div>6,408</div>
<li>Per minute: </li> <div>107</div>
<li>Per second: </li> <div>1.78</div>
</ul>`;
let pigsDataUsa = `<p>Pigs in the USA</p><ul class="list" >
<li>Yearly: </li> <div>131,640,000</div>
<li>Monthly: </li> <div>10,970,000</div>
<li>Daily: </li> <div>360,658</div>
<li>Hourly: </li> <div>15,027</div>
<li>Per minute: </li> <div>250</div>
<li>Per second: </li> <div>4.17</div>
</ul>`;
let sheepDataWorldYear = 590507650;
let sheepDataWorld = `<p>Sheep Worldwide</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataWorldYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let sheepDataArgentinaYear = 3080000;
let sheepDataArgentina = `<p>Sheep in Argentina</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataArgentinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataBrazilYear = 6389554;
let sheepDataBrazil = `<p>Sheep in Brazil</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataCanadaYear = 744800;
let sheepDataCanada = `<p>Sheep in Canada</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataCanadaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataChinaYear = 176850000;
let sheepDataChina = `<p>Sheep in China</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataChinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataColombiaYear = 38434;
let sheepDataColombia = `<p>Sheep in Colombia</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataColombiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataColombiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataColombiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataColombiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
<li>Per second: </li> <div>${(sheepDataColombiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataEcuadorYear = 372096;
let sheepDataEcuador = `<p>Sheep in Ecuador</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataEcuadorYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataIndiaYear = 21136270;
let sheepDataIndia = `<p>Sheep in India</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataIndiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataIndiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataIndiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataIndiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataIndiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataMexicoYear = 3170000;
let sheepDataMexico = `<p>Sheep in Mexico</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataMexicoYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataRussiaYear = 11186861;
let sheepDataRussia = `<p>Sheep in Russia</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataRussiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataRussiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataRussiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataRussiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataRussiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataSpainYear = 9560000;
let sheepDataSpain = `<p>Sheep in Spain</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataSpainYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let sheepDataUsaYear = 2320000;
let sheepDataUsa = `<p>Sheep in the USA</p><ul class="list" >
<li>Yearly: </li> <div>${sheepDataUsaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(sheepDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(sheepDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(sheepDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(sheepDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(sheepDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let chickenDataWorld = `<p>Chicken Worldwide</p><ul class="list" >
<li>Yearly: </li> <div>70,767,577,000</div>
<li>Monthly: </li> <div>5,897,298,083</div>
<li>Daily: </li> <div>193,883,773</div>
<li>Hourly: </li> <div>8,078,491</div>
<li>Per minute: </li> <div>134,642</div>
<li>Per second: </li> <div>2,244</div>
</ul>`;
let chickenDataArgentina = `<p>Chicken in Argentina</p><ul class="list" >
<li>Yearly: </li> <div>757,490,000</div>
<li>Monthly: </li> <div>63,124,167</div>
<li>Daily: </li> <div>2,075,315</div>
<li>Hourly: </li> <div>86,471</div>
<li>Per minute: </li> <div>1,441</div>
<li>Per second: </li> <div>24</div>
</ul>`;
let chickenDataBrazilYear = 6006415000;
let chickenDataBrazil = `<p>Chicken in Brazil</p><ul class="list" >
<li>Yearly: </li> <div>${chickenDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(chickenDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(chickenDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(chickenDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(chickenDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(chickenDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let chickenDataCanada = `<p>Chicken in Canada</p><ul class="list" >
<li>Yearly: </li> <div>754,950,000</div>
<li>Monthly: </li> <div>62,912,500</div>
<li>Daily: </li> <div>2,068,356</div>
<li>Hourly: </li> <div>86,182</div>
<li>Per minute: </li> <div>1,436</div>
<li>Per second: </li> <div>24</div>
</ul>`;
let chickenDataChina = `<p>Chicken in China</p><ul class="list" >
<li>Yearly: </li> <div>9,690,000,000</div>
<li>Monthly: </li> <div>807,500,000</div>
<li>Daily: </li> <div>26,547,945</div>
<li>Hourly: </li> <div>1,106,164</div>
<li>Per minute: </li> <div>18,436</div>
<li>Per second: </li> <div>307</div>
</ul>`;
let chickenDataColombiaYear = 1011486000;
let chickenDataColombia = `<p>Chicken in Colombia</p><ul class="list" >
<li>Yearly: </li> <div>${chickenDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(chickenDataColombiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(chickenDataColombiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(chickenDataColombiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(chickenDataColombiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(chickenDataColombiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let chickenDataEcuador = `<p>Chicken in Ecuador</p><ul class="list" >
<li>Yearly: </li> <div>155,680,000</div>
<li>Monthly: </li> <div>12,973,333</div>
<li>Daily: </li> <div>426,521</div>
<li>Hourly: </li> <div>17,772</div>
<li>Per minute: </li> <div>296</div>
<li>Per second: </li> <div>5</div>
</ul>`;
let chickenDataIndiaYear = 2625635000;
let chickenDataIndia = `<p>Chicken in India</p><ul class="list" >
<li>Yearly: </li> <div>${chickenDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(chickenDataIndiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(chickenDataIndiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(chickenDataIndiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(chickenDataIndiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(chickenDataIndiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let chickenDataMexico = `<p>Chicken in Mexico</p><ul class="list" >
<li>Yearly: </li> <div>1,960,000,000</div>
<li>Monthly: </li> <div>163,333,333</div>
<li>Daily: </li> <div>5,369,863</div>
<li>Hourly: </li> <div>223,744</div>
<li>Per minute: </li> <div>3,729</div>
<li>Per second: </li> <div>62</div>
</ul>`;
let chickenDataRussiaYear = 2497984000;
let chickenDataRussia = `<p>Chicken in Russia</p><ul class="list" >
<li>Yearly: </li> <div>${chickenDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(chickenDataRussiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(chickenDataRussiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(chickenDataRussiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(chickenDataRussiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(chickenDataRussiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let chickenDataSpain = `<p>Chicken in Spain</p> <ul class="list" >
<li>Yearly: </li> <div>696,390,000</div>
<li>Monthly: </li> <div>58,032,500</div>
<li>Daily: </li> <div>1,907,918</div>
<li>Hourly: </li> <div>79,497</div>
<li>Per minute: </li> <div>1,325</div>
<li>Per second: </li> <div>22</div>
</ul>`;
let chickenDataUsaYear = 9346660000;
let chickenDataUsa = `<p>Chicken in USA</p><ul class="list" >
<li>Yearly: </li> <div>${chickenDataUsaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(chickenDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(chickenDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(chickenDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(chickenDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(chickenDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
</ul>`;
let turkeyDataWorldYear = 617880000;
let turkeyDataWorld = `<p>Turkeys Worldwide</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataWorldYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let turkeyDataArgentinaYear = 6980000;
let turkeyDataArgentina = `<p>Turkeys in Argentina</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataArgentinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataBrazilYear = 86706000;
let turkeyDataBrazil = `<p>Turkeys in Brazil</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataCanadaYear = 18730000;
let turkeyDataCanada = `<p>Turkeys in Canada</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataCanadaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataChinaYear = 176850000;
let turkeyDataChina = `<p>Turkeys in China</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataChinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataColombiaYear = "no data, sorry";
let turkeyDataColombia = `<p>Turkeys in Colombia</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataColombiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataColombiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataColombiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataColombiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataColombiaYear).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataEcuadorYear = 758000;
let turkeyDataEcuador = `<p>Turkeys in Ecuador</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataEcuadorYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataIndiaYear = "no data, sorry";
let turkeyDataIndia = `<p>Turkeys in India</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataIndiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataIndiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataIndiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataIndiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataIndiaYear).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataMexicoYear = 2910000;
let turkeyDataMexico = `<p>Turkeys in Mexico</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataMexicoYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataRussiaYear = "no data, sorry";
let turkeyDataRussia = `<p>Turkeys in Russia</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataRussiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataRussiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataRussiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataRussiaYear).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataRussiaYear).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataSpainYear = 27410000;
let turkeyDataSpain = `<p>Turkeys in Spain</p><ul class="list" >
<li>Yearly: </li> <div>${turkeyDataSpainYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let turkeyDataUsaYear = 223000000;
let turkeyDataUsa = `<p>Turkeys in the USA</p> <ul class="list" >
<li>Yearly: </li> <div>${turkeyDataUsaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(turkeyDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(turkeyDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(turkeyDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(turkeyDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(turkeyDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataWorldYear = 171094560;
let fishDataWorld = `<p>Sea animals Worldwide<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataWorldYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataWorldYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataWorldYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataWorldYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataWorldYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataWorldYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:1})}</div>
</ul>`;
let fishDataArgentinaYear = 838630;
let fishDataArgentina = `<p>Sea animals in Argentina<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataArgentinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataArgentinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataArgentinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataArgentinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataArgentinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataArgentinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataBrazilYear = 1299120;
let fishDataBrazil = `<p>Sea animals in Brazil<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataBrazilYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataBrazilYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataBrazilYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataBrazilYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataBrazilYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataBrazilYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataCanadaYear = 1026450;
let fishDataCanada = `<p>Sea animals in Canada<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataCanadaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataCanadaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataCanadaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataCanadaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataCanadaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataCanadaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataChinaYear = 63360572;
let fishDataChina = `<p>Sea animals in China<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataChinaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataChinaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataChinaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataChinaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataChinaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataChinaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataColombiaYear = 187450;
let fishDataColombia = `<p>Sea animals in Colombia<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataColombiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataColombiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataColombiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataColombiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataColombiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
<li>Per second: </li> <div>${(fishDataColombiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataEcuadorYear = 1112710;
let fishDataEcuador = `<p>Sea animals in Ecuador<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataEcuadorYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataEcuadorYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataEcuadorYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataEcuadorYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataEcuadorYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataEcuadorYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataIndiaYear = 11607680;
let fishDataIndia = `<p>Sea animals in India<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataIndiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataIndiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataIndiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataIndiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataIndiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataIndiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataMexicoYear = 1871950;
let fishDataMexico = `<p>Sea animals in Mexico<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataMexicoYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataMexicoYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataMexicoYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataMexicoYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataMexicoYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataMexicoYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataSpainYear = 1264820;
let fishDataSpain = `<p>Sea animals in Spain<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataSpainYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataSpainYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataSpainYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataSpainYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataSpainYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataSpainYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataRussiaYear = 5054340;
let fishDataRussia = `<p>Sea animals in Russia<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataRussiaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataRussiaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataRussiaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataRussiaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataRussiaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataRussiaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
</ul>`;
let fishDataUsaYear = 5475780;
let fishDataUsa = `<p>Sea animals in the USA<br> (measured in Tons)<fn>2</fn></p> <ul class="list" >
<li>Yearly: </li> <div>${fishDataUsaYear.toLocaleString()}</div>
<li>Monthly: </li> <div>${(fishDataUsaYear/12).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Daily: </li> <div>${(fishDataUsaYear/365).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Hourly: </li> <div>${(fishDataUsaYear/365/24).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per minute: </li> <div>${(fishDataUsaYear/365/24/60).toLocaleString(undefined, {maximumFractionDigits:0})}</div>
<li>Per second: </li> <div>${(fishDataUsaYear/365/24/60/60).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
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
        case "Colombia": stats.innerHTML = cowsDataColombia;
        break;
        case "Ecuador": stats.innerHTML = cowsDataEcuador;
        break;
        case "India": stats.innerHTML = cowsDataIndia;
        break;
        case "Mexico": stats.innerHTML = cowsDataMexico;
        break;
        case "Russia": stats.innerHTML = cowsDataRussia;
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
        case "Colombia": stats.innerHTML = pigsDataColombia;
        break;
        case "Ecuador": stats.innerHTML = pigsDataEcuador;
        break;
        case "India": stats.innerHTML = pigsDataIndia;
        break;
        case "Mexico": stats.innerHTML = pigsDataMexico;
        break;
        case "Russia": stats.innerHTML = pigsDataRussia;
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
        case "Colombia": stats.innerHTML = sheepDataColombia;
        break;
        case "Ecuador": stats.innerHTML = sheepDataEcuador;
        break;
        case "India": stats.innerHTML = sheepDataIndia;
        break;
        case "Mexico": stats.innerHTML = sheepDataMexico;
        break;
        case "Russia": stats.innerHTML = sheepDataRussia;
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
        case "Colombia": stats.innerHTML = chickenDataColombia;
        break;
        case "Ecuador": stats.innerHTML = chickenDataEcuador;
        break;
        case "India": stats.innerHTML = chickenDataIndia;
        break;
        case "Mexico": stats.innerHTML = chickenDataMexico;
        break;
        case "Russia": stats.innerHTML = chickenDataRussia;
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
        case "Colombia": stats.innerHTML = turkeyDataColombia;
        break;
        case "Ecuador": stats.innerHTML = turkeyDataEcuador;
        break;
        case "India": stats.innerHTML = turkeyDataIndia;
        break;
        case "Mexico": stats.innerHTML = turkeyDataMexico;
        break;
        case "Russia": stats.innerHTML = turkeyDataRussia;
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
        case "Colombia": stats.innerHTML = fishDataColombia;
        break;
        case "Ecuador": stats.innerHTML = fishDataEcuador;
        break;
        case "India": stats.innerHTML = fishDataIndia;
        break;
        case "Mexico": stats.innerHTML = fishDataMexico;
        break;
        case "Russia": stats.innerHTML = fishDataRussia;
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

//Orange Btns

let cowBtn = document.getElementById("cowbtn");
let pigsBtn = document.getElementById("pigsbtn");
let sheepBtn = document.getElementById("sheepbtn");
let chickenBtn = document.getElementById("chickenbtn");
let turkeyBtn = document.getElementById("turkeybtn");
let fishBtn = document.getElementById("fishbtn");
let cowBtnImg = document.getElementById("cowbtnimg");
let pigsBtnImg = document.getElementById("pigbtnimg");
let sheepBtnImg = document.getElementById("sheepbtnimg");
let chickenBtnImg = document.getElementById("chickenbtnimg");
let turkeyBtnImg = document.getElementById("turkeybtnimg");
let fishBtnImg = document.getElementById("fishbtnimg");


function orangeButtons(){
    switch(orangeBtn){
        case "cow":
            cowBtnImg.src = "images/cow-icon-orange.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon.png";
            // cowBtn.innerHTML  = `<img src="images/cow-icon-orange.png" alt="Cattle"><div class="tooltip">Cattle</div>`;
            // pigsBtn.innerHTML = `<img src="images/pig-icon.png" alt="Pigs"><div class="tooltip">Pigs</div>`;
            // sheepBtn.innerHTML = `<img src="images/sheep-icon.png" alt="Sheep"><div class="tooltip">Sheep</div>`;
            // chickenBtn.innerHTML = `<img src="images/chicken-icon.png" alt="Chicken"><div class="tooltip">Chicken</div>`;
            // turkeyBtn.innerHTML = `<img src="images/turkey-icon.png" alt="Turkey"><div class="tooltip">Turkey</div>`;
            // fishBtn.innerHTML = `<img src="images/fish-icon.png" alt="Sea animals"><div class="tooltip">Sea animals</div>`;
        break;
        case "pigs":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon-orange.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon.png";
        break;

        case "sheep":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon-orange.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon.png";
        break;

        case "chicken":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon-orange.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon.png";
        break;

        case "turkey":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon-orange.png";
            fishBtnImg.src = "images/fish-icon.png";
        break;

        case "fish":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon-orange.png";
        break;
};
}
