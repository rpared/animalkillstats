

//Death count in main block per second since page loaded
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

//Collapsible section Worldwide Animals since page loaded
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

//Collapsible Worldwide Charts
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


//Collapsible Land Animals
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

//Collapsible Land Animals Per Person
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

//Collapsible Sea Animals
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

//Collapsible Sea Animals Per PErson
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

//Functions per Country >> Death count per country per second
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

//Language Function
let language;

function languageEsp(){
    language = "esp";
}
function languageEng(){
    language = "eng";
}


//Country Selector

let selectedCountry = document.getElementById("countrylist").value;
let stats = document.getElementById("data-el");
let orangeBtn;

function getSelectedCountry(){
    let selectedCountry = document.getElementById("countrylist").value;
    console.log(selectedCountry);
    orangeBtn = "none";
    
    switch (selectedCountry){
        case "World":
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};
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
        if (language == "eng"){stats.innerHTML = '<p>Select Animal</p>';}
        else if (language == "esp") {stats.innerHTML = '<p>Elige un animal</p>'};;
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
        default: alert("Select a location");
    };
};

// Animal Btns
// They call for variables stated in the file: animalstatspercountry.js

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
        default: alert("Select a location");
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
        default: alert("Select a location");
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
        default: alert("Select a location");
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
        default: alert("Select a location");
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
        default: alert("Select a location");
    }
};

//Orange Btns 
// (the variable orangeBtn is declared in the country selector so it changes while selecting country)


let cowBtnImg = document.getElementById("cowbtnimg");
let pigsBtnImg = document.getElementById("pigbtnimg");
let sheepBtnImg = document.getElementById("sheepbtnimg");
let chickenBtnImg = document.getElementById("chickenbtnimg");
let turkeyBtnImg = document.getElementById("turkeybtnimg");
let fishBtnImg = document.getElementById("fishbtnimg");


function orangeButtons(){
    switch(orangeBtn){
        case "none":
            cowBtnImg.src = "images/cow-icon.png";
            pigsBtnImg.src = "images/pig-icon.png";
            sheepBtnImg.src = "images/sheep-icon.png";
            chickenBtnImg.src = "images/chicken-icon.png";
            turkeyBtnImg.src = "images/turkey-icon.png";
            fishBtnImg.src = "images/fish-icon.png";
        break;
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