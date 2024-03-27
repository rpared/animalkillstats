let chart5 = "total";

//Fetching the data from json file through the animalstatspercountry.js function

fetchData().then(([data, fetchHtml]) => {
  //   // Testing the fetched data
  //   console.log("World Cattle 2nd file:", data.Worldwide.Cattle);
  //   console.log("Cattle Argentina", fetchHtml.cowsDataArgentina);
  // console.log(
  //   "Fish per sec: ",
  //   (data.Worldwide.LandAnimals / 365 / 24 / 60 / 60).toLocaleString(
  //     undefined,{maximumFractionDigits: 2,}));

  //Death count in main block per second since page loaded

  function indexStuff() {
    console.log("The test values are: ", fetchHtml.fishDataWorldTest);
    //Language Function
    let language;
    $(document).ready(() => {
      setLanguage();
    });

    let setLanguage = () => {
      const bodyLanguage = $("body").attr("lang"); // Get the "lang" attribute value
      if (bodyLanguage === "en") {
        language = "eng";
      } else if (bodyLanguage === "es") {
        // Optionally, add more language checks
        language = "spa";
      }
      console.log(language);
    };

    //Worldwide Deaths Per Second Counters
    let fishDeathCountCountry = document.getElementById(
      "fishdeathcount-country"
    );
    let CountryText = document.getElementById("Countrytext");
    let deathCount = document.getElementById("deathcount");
    let fishDeathCount = document.getElementById("fishdeathcount");

    let deaths = 0;
    let fishDeaths = 0;
    let deathCountWorld;
    let fishDeathCountWorld;

    function counter() {
      deathCountWorld = deaths +=
        data.Worldwide.LandAnimals / 365 / 24 / 60 / 60;
      deathCount.textContent = deathCountWorld.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathCountWorld = fishDeaths +=
        data.Worldwide.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCount.textContent = fishDeathCountWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 1,
        }
      );
    }
    setInterval(counter, 1000);

    //Collapsible section Worldwide Animals since page loaded
    let mainBlockPerAnimal = document.getElementById("mainblockperanimal");
    let collapseArrowBtn = document.querySelector("#arrow");
    let collapse = false;

    function collapseanimals() {
      if (collapse == false) {
        mainBlockPerAnimal.style.display = "inline";
        collapse = true;
        collapseArrowBtn.style.rotate = "180deg";
      } else if (collapse == true) {
        mainBlockPerAnimal.style.display = "none";
        collapse = false;
        collapseArrowBtn.style.rotate = "0deg";
      }
    }

    $("#collapse1").on("click", collapseanimals);

    //Collapsible Worldwide Charts

    let ChartsWrapper = document.getElementById("charts-wrapper");
    let collapseArrowBtn1 = document.querySelector("#arrow1");
    let collapseCharts = false;

    let LandAnimalsChartWrapper = document.getElementById(
      "landanimalschart-wrapper"
    );
    let LandAnimalsChartWrapper1 = document.getElementById(
      "landanimalschart1-wrapper"
    );
    let SeaAnimalsChartWrapper = document.getElementById(
      "seaanimalschart-wrapper"
    );
    let SeaAnimalsChartWrapper1 = document.getElementById(
      "seaanimalschart1-wrapper"
    );
    let capitaChartWrapper = document.getElementById("capitachart-wrapper");
    let worldChartsWrappers = [
      LandAnimalsChartWrapper,
      LandAnimalsChartWrapper1,
      SeaAnimalsChartWrapper,
      SeaAnimalsChartWrapper1,
      capitaChartWrapper,
    ];

    let collapseArrowBtnChart1 = document.querySelector("#arrow-chart1");
    let collapseArrowBtnChart2 = document.querySelector("#arrow-chart2");
    let collapseArrowBtnChart3 = document.querySelector("#arrow-chart3");
    let collapseArrowBtnChart4 = document.querySelector("#arrow-chart4");
    let collapseArrowBtnChart5 = document.querySelector("#arrow-chart5");
    let worldArrowBtns = [
      collapseArrowBtnChart1,
      collapseArrowBtnChart2,
      collapseArrowBtnChart3,
      collapseArrowBtnChart4,
      collapseArrowBtnChart5,
    ];

    let collapseLandChart = false;
    let collapseLandChart1 = false;
    let collapseSeaChart = false;
    let collapseSeaChart1 = false;
    let collapseCapitaChart = false;
    let eachChartCollapseBoolean = [
      collapseLandChart,
      collapseLandChart1,
      collapseSeaChart,
      collapseSeaChart1,
      collapseCapitaChart,
    ];

    function collapsecharts() {
      if (collapseCharts == false) {
        ChartsWrapper.style.display = "inline";
        collapseCharts = true;
        collapseArrowBtn1.style.rotate = "180deg";
      } else if (collapseCharts == true) {
        ChartsWrapper.style.display = "none";
        collapseCharts = false;
        collapseArrowBtn1.style.rotate = "0deg";

        for (i = 0; i < worldChartsWrappers.length; i++) {
          worldChartsWrappers[i].style.display = "none";
          worldArrowBtns[i].style.rotate = "0deg";
        }
        collapseLandChart = false;
        collapseLandChart1 = false;
        collapseSeaChart = false;
        collapseSeaChart1 = false;
        collapseCapitaChart = false;
      }
    }

    $("#collapse2").on("click", collapsecharts);
    //Collapsible Land Animals

    function collapselandchart() {
      if (collapseLandChart == false) {
        LandAnimalsChartWrapper.style.display = "inline";
        collapseLandChart = true;
        collapseArrowBtnChart1.style.rotate = "180deg";
      } else if (collapseLandChart == true) {
        LandAnimalsChartWrapper.style.display = "none";
        collapseLandChart = false;
        collapseArrowBtnChart1.style.rotate = "0deg";
      }
    }
    $("#collapse2-LandChart").on("click", collapselandchart);

    //Collapsible Land Animals Per Person

    function collapselandchart1() {
      if (collapseLandChart1 == false) {
        LandAnimalsChartWrapper1.style.display = "inline";
        collapseLandChart1 = true;
        collapseArrowBtnChart2.style.rotate = "180deg";
      } else if (collapseLandChart1 == true) {
        LandAnimalsChartWrapper1.style.display = "none";
        collapseLandChart1 = false;
        collapseArrowBtnChart2.style.rotate = "0deg";
      }
    }
    $("#landAnimalsPerCapitaLegend span").text(
      (data.Worldwide.LandAnimals / data.Worldwide.Population2021).toFixed(1)
    );
    $("#collapse2-LandChartCapita").on("click", collapselandchart1);

    //Collapsible Sea Animals

    function collapseseachart() {
      if (collapseSeaChart == false) {
        SeaAnimalsChartWrapper.style.display = "inline";
        collapseSeaChart = true;
        collapseArrowBtnChart3.style.rotate = "180deg";
      } else if (collapseSeaChart == true) {
        SeaAnimalsChartWrapper.style.display = "none";
        collapseSeaChart = false;
        collapseArrowBtnChart3.style.rotate = "0deg";
      }
    }
    $("#seaAnimalsLegend span").text(
      (data.Worldwide.FishTonnes / 1000000).toFixed(1)
    );
    $("#collapse2-SeaChart").on("click", collapseseachart);

    //Collapsible Sea Animals Per Person

    function collapseseachart1() {
      if (collapseSeaChart1 == false) {
        SeaAnimalsChartWrapper1.style.display = "inline";
        collapseSeaChart1 = true;
        collapseArrowBtnChart4.style.rotate = "180deg";
      } else if (collapseSeaChart1 == true) {
        SeaAnimalsChartWrapper1.style.display = "none";
        collapseSeaChart1 = false;
        collapseArrowBtnChart4.style.rotate = "0deg";
      }
    }
    $("#seaAnimalsPerCapitaLegend span").text(
      data.Worldwide.FishConsumptionKg.toFixed(1)
    );
    $("#collapse2-SeaChartCapita").on("click", collapseseachart1);

    //Collapsible Total Animals Per Capita with Toggle
    function collapsePerCapitachart() {
      if (collapseCapitaChart == false) {
        capitaChartWrapper.style.display = "inline";
        collapseCapitaChart = true;
        collapseArrowBtnChart5.style.rotate = "180deg";
        chart5 = "total";
        toggleBtnCapita.innerText = fetchHtml.toggleBtnTextAnimals;
        toggleLegend5.innerHTML = fetchHtml.toggleLegend5TotalsText;
      } else if (collapseCapitaChart == true) {
        capitaChartWrapper.style.display = "none";
        collapseCapitaChart = false;
        collapseArrowBtnChart5.style.rotate = "0deg";
      }
    }
    $("#collapse2-TotalCapita").on("click", collapsePerCapitachart);
    console.log("Toggle chart initial stats " + chart5);

    let toggleBtnCapita = document.getElementById("togglebtncapita");
    let toggleLegend5 = document.getElementById("togglelegend5");

    function perAnimalTogglechart() {
      if (chart5 == "total") {
        chart5 = "per animal";
        toggleBtnCapita.innerText = fetchHtml.toggleBtnTextTotal;

        toggleLegend5.innerHTML = fetchHtml.toggleLegend5AnimalsText;
      } else if (chart5 == "per animal") {
        chart5 = "total";

        toggleBtnCapita.innerText = fetchHtml.toggleBtnTextAnimals;
        toggleLegend5.innerHTML = fetchHtml.toggleLegend5TotalsText;
      }
      console.log("Toggle chart " + chart5);
    }
    $("#togglebtncapita").on("click", function () {
      perAnimalTogglechart();
      chart5Toggle();
    });

    //Death count in main block per Animal per second
    let deathCountCowsEl = document.getElementById("deathcount-cows");
    let deathCountCows = 0;
    let deathCountCowsWorld;
    let deathCountPigsEl = document.getElementById("deathcount-pigs");
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

    function counterPerAnimal() {
      // deathCountCowsWorld = deathCountCows += 9; // 2020 data
      deathCountCowsWorld = deathCountCows +=
        data.Worldwide.Cattle / 365 / 24 / 60 / 60;
      deathCountCowsEl.textContent = deathCountCowsWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountPigsWorld = deathCountPigs += 48; // 2020 data
      deathCountPigsWorld = deathCountPigs +=
        data.Worldwide.Pigs / 365 / 24 / 60 / 60;
      deathCountPigsEl.textContent = deathCountPigsWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountSheepWorld = deathCountSheep += 18.7; // 2020 data
      deathCountSheepWorld = deathCountSheep +=
        data.Worldwide.Sheep / 365 / 24 / 60 / 60;
      deathCountSheepEl.textContent = deathCountSheepWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountChickenWorld = deathCountChicken += 2244; // 2020 data
      deathCountChickenWorld = deathCountChicken +=
        data.Worldwide.Chicken / 365 / 24 / 60 / 60;
      deathCountChickenEl.textContent = deathCountChickenWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountTurkeyWorld = deathCountTurkey += 19.6; // 2020 data
      deathCountTurkeyWorld = deathCountTurkey +=
        data.Worldwide.Turkey / 365 / 24 / 60 / 60;
      deathCountTurkeyEl.textContent = deathCountTurkeyWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountFishWorld = deathCountFish += 5.4; // 2019 data
      deathCountFishWorld = deathCountFish +=
        data.Worldwide.FishTonnes / 365 / 24 / 60 / 60;
      deathCountFishEl.textContent = deathCountFishWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 1,
        }
      );
    }
    setInterval(counterPerAnimal, 1000);

    //Death count per country per second
    //Div display
    let countryDeathCountArg = document.getElementById("countrydeathcount-arg");
    let countryDeathCountBra = document.getElementById("countrydeathcount-bra");
    let countryDeathCountCan = document.getElementById("countrydeathcount-can");
    let countryDeathCountChi = document.getElementById("countrydeathcount-chi");
    let countryDeathCountCol = document.getElementById("countrydeathcount-col");
    let countryDeathCountEcu = document.getElementById("countrydeathcount-ecu");
    let countryDeathCountGer = document.getElementById("countrydeathcount-ger");
    let countryDeathCountInd = document.getElementById("countrydeathcount-ind");
    let countryDeathCountMex = document.getElementById("countrydeathcount-mex");
    let countryDeathCountRus = document.getElementById("countrydeathcount-rus");
    let countryDeathCountSpa = document.getElementById("countrydeathcount-spa");
    let countryDeathCountUk = document.getElementById("countrydeathcount-uk");
    let countryDeathCountUsa = document.getElementById("countrydeathcount-usa");
    //Changing Numbers
    let deathCountArg = document.getElementById("deathcount-arg");
    let fishDeathCountArg = document.getElementById("fishdeathcount-arg");
    let deathCountBra = document.getElementById("deathcount-bra");
    let fishDeathCountBra = document.getElementById("fishdeathcount-bra");
    let deathCountCan = document.getElementById("deathcount-can");
    let fishDeathCountCan = document.getElementById("fishdeathcount-can");
    let deathCountChi = document.getElementById("deathcount-chi");
    let fishDeathCountChi = document.getElementById("fishdeathcount-chi");
    let deathCountCol = document.getElementById("deathcount-col");
    let fishDeathCountCol = document.getElementById("fishdeathcount-col");
    let deathCountEcu = document.getElementById("deathcount-ecu");
    let fishDeathCountEcu = document.getElementById("fishdeathcount-ecu");
    let deathCountGer = document.getElementById("deathcount-ger");
    let fishDeathCountGer = document.getElementById("fishdeathcount-ger");
    let deathCountInd = document.getElementById("deathcount-ind");
    let fishDeathCountInd = document.getElementById("fishdeathcount-ind");
    let deathCountMex = document.getElementById("deathcount-mex");
    let fishDeathCountMex = document.getElementById("fishdeathcount-mex");
    let deathCountRus = document.getElementById("deathcount-rus");
    let fishDeathCountRus = document.getElementById("fishdeathcount-rus");
    let deathCountSpa = document.getElementById("deathcount-spa");
    let fishDeathCountSpa = document.getElementById("fishdeathcount-spa");
    let deathCountUk = document.getElementById("deathcount-uk");
    let fishDeathCountUk = document.getElementById("fishdeathcount-uk");
    let deathCountUsa = document.getElementById("deathcount-usa");
    let fishDeathCountUsa = document.getElementById("fishdeathcount-usa");

    // Counter Functions per Country >> Death count per country per second
    let deathsArg = 0;
    let fishDeathsArg = 0;
    let deathsArgNum;
    let fishDeathsArgNum;

    function counterArg() {
      //   deathsArgNum = deathsArg += 25; //2020 data
      deathsArgNum = deathsArg +=
        data.Argentina.LandAnimals / 365 / 24 / 60 / 60;
      deathCountArg.textContent = deathsArgNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsArgNum = fishDeathsArg += 0.03; //2019 data
      fishDeathsArgNum = fishDeathsArg +=
        data.Argentina.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountArg.textContent = fishDeathsArgNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterArg, 1000);

    let deathsBra = 0;
    let fishDeathsBra = 0;
    let deathsBraNum;
    let fishDeathsBraNum;

    function counterBra() {
      //   deathsBraNum = deathsBra += 196; //2020 data
      deathsBraNum = deathsBra += data.Brazil.LandAnimals / 365 / 24 / 60 / 60;
      deathCountBra.textContent = deathsBraNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsBraNum = fishDeathsBra += 0.04; //2019 data
      fishDeathsBraNum = fishDeathsBra +=
        data.Brazil.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountBra.textContent = fishDeathsBraNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterBra, 1000);

    let deathsCan = 0;
    let fishDeathsCan = 0;
    let deathsCanNum;
    let fishDeathsCanNum;

    function counterCan() {
      //   deathsCanNum = deathsCan += 25;//2020 data
      deathsCanNum = deathsCan += data.Canada.LandAnimals / 365 / 24 / 60 / 60;
      deathCountCan.textContent = deathsCanNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsCanNum = fishDeathsCan += 0.03;//2019 data
      fishDeathsCanNum = fishDeathsCan +=
        data.Canada.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountCan.textContent = fishDeathsCanNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterCan, 1000);

    let deathsChi = 0;
    let fishDeathsChi = 0;
    let deathsChiNum;
    let fishDeathsChiNum;

    function counterChi() {
      //   deathsChiNum = deathsChi += 342;//2020 data
      deathsChiNum = deathsChi += data.China.LandAnimals / 365 / 24 / 60 / 60;
      deathCountChi.textContent = deathsChiNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsChiNum = fishDeathsChi += 2.01;//2019 data
      fishDeathsChiNum = fishDeathsChi +=
        data.China.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountChi.textContent = fishDeathsChiNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterChi, 1000);

    let deathsCol = 0;
    let fishDeathsCol = 0;
    let deathsColNum;
    let fishDeathsColNum;

    function counterCol() {
      //   deathsColNum = deathsCol += 32;//2020 data
      deathsColNum = deathsCol +=
        data.Colombia.LandAnimals / 365 / 24 / 60 / 60;
      deathCountCol.textContent = deathsColNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsColNum = fishDeathsCol += 0.01; //2019 data
      fishDeathsColNum = fishDeathsCol +=
        data.Colombia.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountCol.textContent = fishDeathsColNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterCol, 1000);

    let deathsEcu = 0;
    let fishDeathsEcu = 0;
    let deathsEcuNum;
    let fishDeathsEcuNum;

    function counterEcu() {
      // deathsEcuNum = deathsEcu += 5; //2020 data
      deathsEcuNum = deathsEcu += data.Ecuador.LandAnimals / 365 / 24 / 60 / 60;
      deathCountEcu.textContent = deathsEcuNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsEcuNum = fishDeathsEcu += 0.04; //2019 data
      fishDeathsEcuNum = fishDeathsEcu +=
        data.Ecuador.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountEcu.textContent = fishDeathsEcuNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterEcu, 1000);

    let deathsGer = 0;
    let fishDeathsGer = 0;
    let deathsGerNum;
    let fishDeathsGerNum;

    function counterGer() {
      deathsGerNum = deathsGer += data.Germany.LandAnimals / 365 / 24 / 60 / 60;
      deathCountGer.textContent = deathsGerNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathsGerNum = fishDeathsGer +=
        data.Germany.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountGer.textContent = fishDeathsGerNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterGer, 1000);

    let deathsInd = 0;
    let fishDeathsInd = 0;
    let deathsIndNum;
    let fishDeathsIndNum;

    function counterInd() {
      // deathsIndNum = deathsInd += 87; //2020 data
      deathsIndNum = deathsInd += data.India.LandAnimals / 365 / 24 / 60 / 60;
      deathCountInd.textContent = deathsIndNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsIndNum = fishDeathsInd += 0.37; //2019 data
      fishDeathsIndNum = fishDeathsInd +=
        data.India.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountInd.textContent = fishDeathsIndNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterInd, 1000);

    let deathsMex = 0;
    let fishDeathsMex = 0;
    let deathsMexNum;
    let fishDeathsMexNum;

    function counterMex() {
      // deathsMexNum = deathsMex += 63; //2020 data
      deathsMexNum = deathsMex += data.Mexico.LandAnimals / 365 / 24 / 60 / 60;
      deathCountMex.textContent = deathsMexNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsMexNum = fishDeathsMex += 0.06; //2019 data
      fishDeathsMexNum = fishDeathsMex +=
        data.Mexico.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountMex.textContent = fishDeathsMexNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterMex, 1000);

    let deathsRus = 0;
    let fishDeathsRus = 0;
    let deathsRusNum;
    let fishDeathsRusNum;

    function counterRus() {
      // deathsRusNum = deathsRus += 81.3; //2020 data
      deathsRusNum = deathsRus += data.Russia.LandAnimals / 365 / 24 / 60 / 60;
      deathCountRus.textContent = deathsRusNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsRusNum = fishDeathsRus += 0.16; //2019 data
      fishDeathsRusNum = fishDeathsRus +=
        data.Russia.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountRus.textContent = fishDeathsRusNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterRus, 1000);

    let deathsSpa = 0;
    let fishDeathsSpa = 0;
    let deathsSpaNum;
    let fishDeathsSpaNum;

    function counterSpa() {
      // deathsSpaNum = deathsSpa += 25; //2020 data
      deathsSpaNum = deathsSpa += data.Spain.LandAnimals / 365 / 24 / 60 / 60;
      deathCountSpa.textContent = deathsSpaNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsSpaNum = fishDeathsSpa += 0.04; //2019 data
      fishDeathsSpaNum = fishDeathsSpa +=
        data.Spain.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountSpa.textContent = fishDeathsSpaNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterSpa, 1000);

    let deathsUk = 0;
    let fishDeathsUk = 0;
    let deathsUkNum;
    let fishDeathsUkNum;

    function counterUk() {
      deathsUkNum = deathsUk +=
        data.UnitedKingdom.LandAnimals / 365 / 24 / 60 / 60;
      deathCountUk.textContent = deathsUkNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathsUkNum = fishDeathsUk +=
        data.UnitedKingdom.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountUk.textContent = fishDeathsUkNum.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      });
    }
    setInterval(counterUk, 1000);

    let deathsUsa = 0;
    let fishDeathsUsa = 0;
    let deathsUsaNum;
    let fishDeathsUsaNum;

    function counterUsa() {
      // deathsUsaNum = deathsUsa += 309; //2020 data
      deathsUsaNum = deathsUsa +=
        data.UnitedStates.LandAnimals / 365 / 24 / 60 / 60;
      deathCountUsa.textContent = deathsUsaNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsUsaNum = fishDeathsUsa += 0.2; //2019 data
      fishDeathsUsaNum = fishDeathsUsa +=
        data.UnitedStates.FishTonnes / 365 / 24 / 60 / 60;
      fishDeathCountUsa.textContent = fishDeathsUsaNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterUsa, 1000);

    //Country Selector

    let stats = document.getElementById("data-el");
    let orangeBtn;

    function getSelectedCountry() {
      let selectedCountry = document.getElementById("countrylist").value;
      let animalsPerCapita = document.getElementById("animalspercapita");
      let countryName;
      let countryNameText;

      console.log(selectedCountry);
      orangeBtn = "none";

      switch (selectedCountry) {
        case "World":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " worldwide";
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " mundialmente";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          // animalsPerCapita.style.display ="none";
          meatKg = worldMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Argentina":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Argentina";
          }
          countryDeathCountArg.style.display = "block";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = argMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Brazil":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Brasil";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "block";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = braMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Canada":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Canadá";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "block";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = canMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "China":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en China";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "block";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = chiMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Colombia":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Colombia";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "block";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = colMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Ecuador":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Ecuador";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "block";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = ecuMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Germany":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Alemania";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "block";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = gerMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "India":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en India";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "block";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = indMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Mexico":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en México";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "block";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = mexMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Russia":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Rusia";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "block";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = rusMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Spain":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en España";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "block";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "none";
          meatKg = spaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Uk":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in the " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Reino Unido";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "block";
          countryDeathCountUsa.style.display = "none";
          meatKg = ukMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Usa":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in the " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Estados Unidos";
          }
          countryDeathCountArg.style.display = "none";
          countryDeathCountBra.style.display = "none";
          countryDeathCountCan.style.display = "none";
          countryDeathCountChi.style.display = "none";
          countryDeathCountCol.style.display = "none";
          countryDeathCountEcu.style.display = "none";
          countryDeathCountGer.style.display = "none";
          countryDeathCountInd.style.display = "none";
          countryDeathCountMex.style.display = "none";
          countryDeathCountRus.style.display = "none";
          countryDeathCountSpa.style.display = "none";
          countryDeathCountUk.style.display = "none";
          countryDeathCountUsa.style.display = "block";
          meatKg = usaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;
        default:
          alert("Select a location");
      }
    }

    // Animal Btns
    // They call for value pairs in the object fetchHtml in the file: animalstatspercountry.js

    function cows() {
      orangeBtn = "cow";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.cowsDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.cowsDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.cowsDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.cowsDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.cowsDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.cowsDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.cowsDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.cowsDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.cowsDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.cowsDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.cowsDataRussia;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.cowsDataSpain;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.cowsDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.cowsDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "spa") {
            alert("Elige una ubicación");
          }
      }
    }

    function pigs() {
      orangeBtn = "pigs";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.pigsDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.pigsDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.pigsDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.pigsDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.pigsDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.pigsDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.pigsDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.pigsDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.pigsDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.pigsDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.pigsDataRussia;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.pigsDataSpain;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.pigsDataUsa;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.pigsDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.pigsDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "spa") {
            alert("Elige una ubicación");
          }
      }
    }

    function sheep() {
      orangeBtn = "sheep";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.sheepDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.sheepDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.sheepDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.sheepDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.sheepDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.sheepDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.sheepDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.sheepDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.sheepDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.sheepDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.sheepDataRussia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.sheepDataMexico;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.sheepDataSpain;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.sheepDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.sheepDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "esp") {
            alert("Elige una ubicación");
          }
      }
    }

    function chicken() {
      orangeBtn = "chicken";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.chickenDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.chickenDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.chickenDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.chickenDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.chickenDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.chickenDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.chickenDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.chickenDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.chickenDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.chickenDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.chickenDataRussia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.chickenDataMexico;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.chickenDataSpain;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.chickenDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.chickenDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "esp") {
            alert("Elige una ubicación");
          }
      }
    }

    function turkey() {
      orangeBtn = "turkey";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.turkeyDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.turkeyDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.turkeyDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.turkeyDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.turkeyDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.turkeyDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.turkeyDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.turkeyDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.turkeyDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.turkeyDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.turkeyDataRussia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.turkeyDataMexico;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.turkeyDataSpain;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.turkeyDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.turkeyDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "esp") {
            alert("Elige una ubicación");
          }
      }
    }

    function fish() {
      orangeBtn = "fish";
      let selectedCountry = document.getElementById("countrylist").value;
      switch (selectedCountry) {
        case "World":
          stats.innerHTML = fetchHtml.fishDataWorld;
          break;
        case "Argentina":
          stats.innerHTML = fetchHtml.fishDataArgentina;
          break;
        case "Brazil":
          stats.innerHTML = fetchHtml.fishDataBrazil;
          break;
        case "Canada":
          stats.innerHTML = fetchHtml.fishDataCanada;
          break;
        case "China":
          stats.innerHTML = fetchHtml.fishDataChina;
          break;
        case "Colombia":
          stats.innerHTML = fetchHtml.fishDataColombia;
          break;
        case "Ecuador":
          stats.innerHTML = fetchHtml.fishDataEcuador;
          break;
        case "Germany":
          stats.innerHTML = fetchHtml.fishDataGer;
          break;
        case "India":
          stats.innerHTML = fetchHtml.fishDataIndia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.fishDataMexico;
          break;
        case "Russia":
          stats.innerHTML = fetchHtml.fishDataRussia;
          break;
        case "Mexico":
          stats.innerHTML = fetchHtml.fishDataMexico;
          break;
        case "Spain":
          stats.innerHTML = fetchHtml.fishDataSpain;
          break;
        case "Uk":
          stats.innerHTML = fetchHtml.fishDataUk;
          break;
        case "Usa":
          stats.innerHTML = fetchHtml.fishDataUsa;
          break;
        default:
          if (language == "eng") {
            alert("Choose a location");
          } else if (language == "esp") {
            alert("Elige una ubicación");
          }
      }
    }
    //Event Listeners for Animal stats per country:
    $("#cowbtn").on("click", function () {
      cows(), orangeButtons();
    });
    $("#pigsbtn").on("click", function () {
      pigs(), orangeButtons();
    });
    $("#sheepbtn").on("click", function () {
      sheep(), orangeButtons();
    });
    $("#chickenbtn").on("click", function () {
      chicken(), orangeButtons();
    });
    $("#turkeybtn").on("click", function () {
      turkey(), orangeButtons();
    });
    $("#fishbtn").on("click", function () {
      fish(), orangeButtons();
    });

    //Orange Btns
    // (the variable orangeBtn is declared in the country selector so it changes while selecting country)

    let cowBtnImg = document.getElementById("cowbtnimg");
    let pigsBtnImg = document.getElementById("pigbtnimg");
    let sheepBtnImg = document.getElementById("sheepbtnimg");
    let chickenBtnImg = document.getElementById("chickenbtnimg");
    let turkeyBtnImg = document.getElementById("turkeybtnimg");
    let fishBtnImg = document.getElementById("fishbtnimg");

    function orangeButtons() {
      switch (orangeBtn) {
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
      }
    }
    $("#countrylist").on("change", function () {
      getSelectedCountry();
      orangeButtons();
    });

    ////Collapsible Footer Our World in Data Embeded Charts

    // Target elements
    const footerButtons = document.querySelectorAll(".collapse-footer-button");
    const footerEmbededCharts = document.querySelectorAll(
      ".footer-embedded-element"
    );

    // Storing collapsed states in an object for clarity and organization
    const collapsedStatesFooter = {};

    function toggleFooter(index) {
      const button = footerButtons[index];
      const element = footerEmbededCharts[index];
      collapsedStatesFooter[index] = !collapsedStatesFooter[index]; // Toggle the boolean state

      element.style.display = collapsedStatesFooter[index] ? "inline" : "none";
      button.style.transform = collapsedStatesFooter[index]
        ? "rotate(180deg)"
        : "rotate(0deg)";
    }

    footerButtons.forEach((button, index) => {
      button.addEventListener("click", () => toggleFooter(index));
    });
  }
  indexStuff();
});
// export { indexStuff };
