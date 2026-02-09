let chart5 = "total";

//Fetching the data from json file through the animalstatspercountry.js function
console.log("*** Developed by Roger Paredes ***"),
  console.log(
    "If you find errors feel free to write to roger@apocalypsisopus.com, thank you :)"
  );
// Use the shared promise exposed by the API module to avoid duplicate fetches
if (window.AKS_dataPromise) {
  window.AKS_dataPromise.catch(e => console.error('fetch failed', e));
}
window.AKS_dataPromise.then(([data, fetchHtml]) => {
  //   // Testing the fetched data
  //   console.log("World Cattle 2nd file:", data.Worldwide.Cattle);
  //   console.log("Cattle Argentina", fetchHtml.cowsDataArgentina);
  // console.log(
  //   "Fish per sec: ",
  //   (data.Worldwide.LandAnimals / 365 / 24 / 60 / 60).toLocaleString(
  //     undefined,{maximumFractionDigits: 2,}));

  //Death count in main block per second since page loaded

  function indexStuff() {
    // console.log("Testing Fish Worldwide HTML: ", fetchHtml.fishDataWorld);
    /*Language Function*/
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
        fetchHtml.landAnimalsWorld / 365 / 24 / 60 / 60;
      deathCount.textContent = deathCountWorld.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathCountWorld = fishDeaths +=
        fetchHtml.fishTotalWorld / 365 / 24 / 60 / 60;
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

    //Collapsible Worldwide Stats per year Charts

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
    // show "billion" in English or "mil millones" in Spanish
    (function () {
      const landAnimalsBillion = (Number(fetchHtml.landAnimalsWorld) / 1e9) || 0;
      const langAttr = $("body").attr("lang");
      const label = (typeof language !== "undefined" && language === "spa") || langAttr === "es"
        ? " mil millones"
        : " billion";
      $("#landanimalschart-wrapper p span").text(landAnimalsBillion.toFixed(1) + label);
    })();
    $("#landAnimalsPerCapitaLegend span").text(
      (fetchHtml.landAnimalsWorld / fetchHtml.Population2022).toFixed(1)
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
      (fetchHtml.fishTotalWorld / 1000000).toFixed(1)
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
      fetchHtml.fishKgPerCapitaWorld.toFixed(1)
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
        updateTotalKg2022Legend();
      } else if (collapseCapitaChart == true) {
        capitaChartWrapper.style.display = "none";
        collapseCapitaChart = false;
        collapseArrowBtnChart5.style.rotate = "0deg";
      }
    }
    $("#collapse2-TotalCapita").on("click", collapsePerCapitachart);
    // console.log("Toggle chart initial stats " + chart5);

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
        updateTotalKg2022Legend();
      }
      // console.log("Toggle chart " + chart5);
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
        fetchHtml.cowsTotalWorld / 365 / 24 / 60 / 60;
      deathCountCowsEl.textContent = deathCountCowsWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountPigsWorld = deathCountPigs += 48; // 2020 data
      deathCountPigsWorld = deathCountPigs +=
        fetchHtml.pigsTotalWorld / 365 / 24 / 60 / 60;
      deathCountPigsEl.textContent = deathCountPigsWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountSheepWorld = deathCountSheep += 18.7; // 2020 data
      deathCountSheepWorld = deathCountSheep +=
        fetchHtml.sheepTotalWorld / 365 / 24 / 60 / 60;
      deathCountSheepEl.textContent = deathCountSheepWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountChickenWorld = deathCountChicken += 2244; // 2020 data
      deathCountChickenWorld = deathCountChicken +=
        fetchHtml.chickenTotalWorld / 365 / 24 / 60 / 60;
      deathCountChickenEl.textContent = deathCountChickenWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountTurkeyWorld = deathCountTurkey += 19.6; // 2020 data
      deathCountTurkeyWorld = deathCountTurkey +=
        fetchHtml.turkeyTotalWorld / 365 / 24 / 60 / 60;
      deathCountTurkeyEl.textContent = deathCountTurkeyWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        }
      );
      // deathCountFishWorld = deathCountFish += 5.4; // 2019 data
      deathCountFishWorld = deathCountFish +=
        fetchHtml.fishTotalWorld / 365 / 24 / 60 / 60;
      deathCountFishEl.textContent = deathCountFishWorld.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 1,
        }
      );
    }
    setInterval(counterPerAnimal, 1000);

    //Death count per country per second
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
    let deathsAfr = 0;
    let fishDeathsAfr = 0;
    function counterAfr() {
      let deathsAfrNum = (deathsAfr +=
        fetchHtml.landAnimalsAfrica / 365 / 24 / 60 / 60);
      $("#deathcount-afr").text(
        deathsAfrNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsAfrNum = (fishDeathsAfr +=
        fetchHtml.fishTotalAfrica / 365 / 24 / 60 / 60);
      $("#fishdeathcount-afr").text(
        fishDeathsAfrNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterAfr, 1000);

    let deathsAme = 0;
    let fishDeathsAme = 0;
    function counterAme() {
      let deathsAmeNum = (deathsAme +=
        fetchHtml.landAnimalsAmericas / 365 / 24 / 60 / 60);
      $("#deathcount-ame").text(
        deathsAmeNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsAmeNum = (fishDeathsAme +=
        fetchHtml.fishTotalAmericas / 365 / 24 / 60 / 60);
      $("#fishdeathcount-ame").text(
        fishDeathsAmeNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterAme, 1000);

    let deathsAsi = 0;
    let fishDeathsAsi = 0;
    function counterAsi() {
      let deathsAsiNum = (deathsAsi +=
        fetchHtml.landAnimalsAsia / 365 / 24 / 60 / 60);
      $("#deathcount-asi").text(
        deathsAsiNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsAsiNum = (fishDeathsAsi +=
        fetchHtml.fishTotalAsia / 365 / 24 / 60 / 60);
      $("#fishdeathcount-asi").text(
        fishDeathsAsiNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterAsi, 1000);
    // console.log("Land Animals in Europe", fetchHtml.landAnimalsEurope);
    let deathsEur = 0;
    let fishDeathsEur = 0;
    function counterEur() {
      let deathsEurNum = (deathsEur +=
        fetchHtml.landAnimalsEurope / 365 / 24 / 60 / 60);
      $("#deathcount-eur").text(
        deathsEurNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsEurNum = (fishDeathsEur +=
        fetchHtml.fishTotalEurope / 365 / 24 / 60 / 60);
      $("#fishdeathcount-eur").text(
        fishDeathsEurNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterEur, 1000);

    let deathsOce = 0;
    let fishDeathsOce = 0;
    function counterOce() {
      let deathsOceNum = (deathsOce +=
        fetchHtml.landAnimalsOceania / 365 / 24 / 60 / 60);
      $("#deathcount-oce").text(
        deathsOceNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsOceNum = (fishDeathsOce +=
        fetchHtml.fishTotalOceania / 365 / 24 / 60 / 60);
      $("#fishdeathcount-oce").text(
        fishDeathsOceNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterOce, 1000);

    let deathsArg = 0;
    let fishDeathsArg = 0;
    let deathsArgNum;
    let fishDeathsArgNum;
    function counterArg() {
      //   deathsArgNum = deathsArg += 25; //2020 data
      deathsArgNum = deathsArg +=
        fetchHtml.landAnimalsArgentina / 365 / 24 / 60 / 60;
      deathCountArg.textContent = deathsArgNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsArgNum = fishDeathsArg += 0.03; //2019 data
      fishDeathsArgNum = fishDeathsArg +=
        fetchHtml.fishTotalArgentina / 365 / 24 / 60 / 60;
      fishDeathCountArg.textContent = fishDeathsArgNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterArg, 1000);

    let deathsAus = 0;
    let fishDeathsAus = 0;
    function counterAus() {
      let deathsAusNum = (deathsAus +=
        fetchHtml.landAnimalsAustralia / 365 / 24 / 60 / 60);
      $("#deathcount-aus").text(
        deathsAusNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsAusNum = (fishDeathsAus +=
        fetchHtml.fishTotalAustralia / 365 / 24 / 60 / 60);
      $("#fishdeathcount-aus").text(
        fishDeathsAusNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterAus, 1000);

    let deathsBra = 0;
    let fishDeathsBra = 0;
    let deathsBraNum;
    let fishDeathsBraNum;

    function counterBra() {
      //   deathsBraNum = deathsBra += 196; //2020 data
      deathsBraNum = deathsBra +=
        fetchHtml.landAnimalsBrazil / 365 / 24 / 60 / 60;
      deathCountBra.textContent = deathsBraNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsBraNum = fishDeathsBra += 0.04; //2019 data
      fishDeathsBraNum = fishDeathsBra +=
        fetchHtml.fishTotalBrazil / 365 / 24 / 60 / 60;
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
      deathsCanNum = deathsCan +=
        fetchHtml.landAnimalsCanada / 365 / 24 / 60 / 60;
      deathCountCan.textContent = deathsCanNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsCanNum = fishDeathsCan += 0.03;//2019 data
      fishDeathsCanNum = fishDeathsCan +=
        fetchHtml.fishTotalBrazil / 365 / 24 / 60 / 60;
      fishDeathCountCan.textContent = fishDeathsCanNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterCan, 1000);

    let deathsChile = 0;
    let fishDeathsChile = 0;

    function counterChile() {
      let deathsChileNum = (deathsChile +=
        fetchHtml.landAnimalsChile / 365 / 24 / 60 / 60);
      $("#deathcount-chile").text(
        deathsChileNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsChileNum = (fishDeathsChile +=
        fetchHtml.fishTotalChile / 365 / 24 / 60 / 60);
      $("#fishdeathcount-chile").text(
        fishDeathsChileNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterChile, 1000);

    let deathsChi = 0;
    let fishDeathsChi = 0;
    let deathsChiNum;
    let fishDeathsChiNum;

    function counterChi() {
      //   deathsChiNum = deathsChi += 342;//2020 data
      deathsChiNum = deathsChi +=
        fetchHtml.landAnimalsChina / 365 / 24 / 60 / 60;
      deathCountChi.textContent = deathsChiNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsChiNum = fishDeathsChi += 2.01;//2019 data
      fishDeathsChiNum = fishDeathsChi +=
        fetchHtml.fishTotalChina / 365 / 24 / 60 / 60;
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
        fetchHtml.landAnimalsColombia / 365 / 24 / 60 / 60;
      deathCountCol.textContent = deathsColNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      //   fishDeathsColNum = fishDeathsCol += 0.01; //2019 data
      fishDeathsColNum = fishDeathsCol +=
        fetchHtml.fishTotalColombia / 365 / 24 / 60 / 60;
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
      deathsEcuNum = deathsEcu +=
        fetchHtml.landAnimalsEcuador / 365 / 24 / 60 / 60;
      deathCountEcu.textContent = deathsEcuNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsEcuNum = fishDeathsEcu += 0.04; //2019 data
      fishDeathsEcuNum = fishDeathsEcu +=
        fetchHtml.fishTotalEcuador / 365 / 24 / 60 / 60;
      fishDeathCountEcu.textContent = fishDeathsEcuNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterEcu, 1000);

    let deathsFra = 0;
    let fishDeathsFra = 0;

    function counterFra() {
      let deathsFraNum = (deathsFra +=
        fetchHtml.landAnimalsFrance / 365 / 24 / 60 / 60);
      $("#deathcount-fra").text(
        deathsFraNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsFraNum = (fishDeathsFra +=
        fetchHtml.fishTotalFrance / 365 / 24 / 60 / 60);
      $("#fishdeathcount-fra").text(
        fishDeathsFraNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterFra, 1000);

    let deathsGer = 0;
    let fishDeathsGer = 0;
    let deathsGerNum;
    let fishDeathsGerNum;

    function counterGer() {
      deathsGerNum = deathsGer +=
        fetchHtml.landAnimalsGermany / 365 / 24 / 60 / 60;
      deathCountGer.textContent = deathsGerNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathsGerNum = fishDeathsGer +=
        fetchHtml.fishTotalGermany / 365 / 24 / 60 / 60;
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
      deathsIndNum = deathsInd +=
        fetchHtml.landAnimalsIndia / 365 / 24 / 60 / 60;
      deathCountInd.textContent = deathsIndNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsIndNum = fishDeathsInd += 0.37; //2019 data
      fishDeathsIndNum = fishDeathsInd +=
        fetchHtml.fishTotalIndia / 365 / 24 / 60 / 60;
      fishDeathCountInd.textContent = fishDeathsIndNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterInd, 1000);

    let deathsJap = 0;
    let fishDeathsJap = 0;

    function counterJap() {
      let deathsJapNum = (deathsJap +=
        fetchHtml.landAnimalsJapan / 365 / 24 / 60 / 60);
      $("#deathcount-jap").text(
        deathsJapNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsJapNum = (fishDeathsJap +=
        fetchHtml.fishTotalJapan / 365 / 24 / 60 / 60);
      $("#fishdeathcount-jap").text(
        fishDeathsJapNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterJap, 1000);

    let deathsMex = 0;
    let fishDeathsMex = 0;
    let deathsMexNum;
    let fishDeathsMexNum;

    function counterMex() {
      // deathsMexNum = deathsMex += 63; //2020 data
      deathsMexNum = deathsMex +=
        fetchHtml.landAnimalsMexico / 365 / 24 / 60 / 60;
      deathCountMex.textContent = deathsMexNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsMexNum = fishDeathsMex += 0.06; //2019 data
      fishDeathsMexNum = fishDeathsMex +=
        fetchHtml.fishTotalMexico / 365 / 24 / 60 / 60;
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
      deathsRusNum = deathsRus +=
        fetchHtml.landAnimalsRussia / 365 / 24 / 60 / 60;
      deathCountRus.textContent = deathsRusNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsRusNum = fishDeathsRus += 0.16; //2019 data
      fishDeathsRusNum = fishDeathsRus +=
        fetchHtml.fishTotalRussia / 365 / 24 / 60 / 60;
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
      deathsSpaNum = deathsSpa +=
        fetchHtml.landAnimalsSpain / 365 / 24 / 60 / 60;
      deathCountSpa.textContent = deathsSpaNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsSpaNum = fishDeathsSpa += 0.04; //2019 data
      fishDeathsSpaNum = fishDeathsSpa +=
        fetchHtml.fishTotalSpain / 365 / 24 / 60 / 60;
      fishDeathCountSpa.textContent = fishDeathsSpaNum.toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
    }
    setInterval(counterSpa, 1000);

    let deathsSouthafrica = 0;
    let fishDeathsSouthafrica = 0;

    function counterSouthafrica() {
      let deathsSouthafricaNum = (deathsSouthafrica +=
        fetchHtml.landAnimalsSouthAfrica / 365 / 24 / 60 / 60);
      $("#deathcount-southafrica").text(
        deathsSouthafricaNum.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })
      );
      let fishDeathsSouthafricaNum = (fishDeathsSouthafrica +=
        fetchHtml.fishTotalSouthAfrica / 365 / 24 / 60 / 60);
      $("#fishdeathcount-southafrica").text(
        fishDeathsSouthafricaNum.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      );
    }
    setInterval(counterSouthafrica, 1000);

    let deathsUk = 0;
    let fishDeathsUk = 0;
    let deathsUkNum;
    let fishDeathsUkNum;
    function counterUk() {
      deathsUkNum = deathsUk += fetchHtml.landAnimalsUk / 365 / 24 / 60 / 60;
      deathCountUk.textContent = deathsUkNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      fishDeathsUkNum = fishDeathsUk +=
        fetchHtml.fishTotalUk / 365 / 24 / 60 / 60;
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
      deathsUsaNum = deathsUsa += fetchHtml.landAnimalsUsa / 365 / 24 / 60 / 60;
      deathCountUsa.textContent = deathsUsaNum.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
      // fishDeathsUsaNum = fishDeathsUsa += 0.2; //2019 data
      fishDeathsUsaNum = fishDeathsUsa +=
        fetchHtml.fishTotalUsa / 365 / 24 / 60 / 60;
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
    let selectedCountry;

    function getSelectedCountry() {
      selectedCountry = document.getElementById("countrylist").value;
      let animalsPerCapita = document.getElementById("animalspercapita");
      let countryName;
      let countryNameText;

      console.log(selectedCountry);
      orangeBtn = "none";

      let countriesIndividualStats = [
        $("#countrydeathcount-afr"),
        $("#countrydeathcount-ame"),
        $("#countrydeathcount-asi"),
        $("#countrydeathcount-eur"),
        $("#countrydeathcount-oce"),
        $("#countrydeathcount-arg"),
        $("#countrydeathcount-aus"),
        $("#countrydeathcount-bra"),
        $("#countrydeathcount-can"),
        $("#countrydeathcount-chi"),
        $("#countrydeathcount-chile"),
        $("#countrydeathcount-col"),
        $("#countrydeathcount-ecu"),
        $("#countrydeathcount-fra"),
        $("#countrydeathcount-ger"),
        $("#countrydeathcount-ind"),
        $("#countrydeathcount-jap"),
        $("#countrydeathcount-mex"),
        $("#countrydeathcount-rus"),
        $("#countrydeathcount-spa"),
        $("#countrydeathcount-southafrica"),
        $("#countrydeathcount-uk"),
        $("#countrydeathcount-usa"),
      ];

      switch (selectedCountry) {
        case "World":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " worldwide";
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " mundialmente";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          meatKg = worldMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Africa":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Africa";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-afr").show();

          meatKg = africaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Americas":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en América";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-ame").show();

          meatKg = americasMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Asia":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Asia";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-asi").show();

          meatKg = asiaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Europe":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Europa";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-eur").show();

          meatKg = europeMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Oceania":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Oceanía";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-oce").show();

          meatKg = oceaniaMeatKgCapita;
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-arg").show();
          meatKg = argMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Australia":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Australia";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-aus").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-bra").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-can").show();
          meatKg = canMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Chile":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Chile";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-chile").show();
          meatKg = chileMeatKgCapita;
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-chi").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-col").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-ecu").show();
          meatKg = ecuMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "France":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Francia";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-fra").show();
          meatKg = fraMeatKgCapita;
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-ger").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-ind").show();
          meatKg = indMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Japan":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in " + selectedCountry;
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Japón";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-jap").show();
          meatKg = japMeatKgCapita;
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-mex").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-rus").show();
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
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-spa").show();
          meatKg = spaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "SouthAfrica":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in South Africa";
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en Sudáfrica";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-southafrica").show();
          meatKg = southAfricaMeatKgCapita;
          animalsPerCapita.style.display = "block";
          animalsPerCapita.innerHTML = fetchHtml.capitaMeatKgText;
          capitaChart();
          countryName = document.getElementById("countryname");
          countryName.textContent = countryNameText;
          break;

        case "Uk":
          if (language == "eng") {
            stats.innerHTML = "<p>Select Animal</p>";
            countryNameText = " in the United Kingdom";
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en el Reino Unido";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-uk").show();
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
            countryNameText = " in the United States";
          } else if (language == "spa") {
            stats.innerHTML = "<p>Elige un animal</p>";
            countryNameText = " en los Estados Unidos";
          }
          countriesIndividualStats.forEach((country) => {
            country.hide();
          });
          $("#countrydeathcount-usa").show();
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

    const countries = [
      "World",
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
      "Argentina",
      "Australia",
      "Brazil",
      "Canada",
      "Chile",
      "China",
      "Colombia",
      "Ecuador",
      "France",
      "Germany",
      "India",
      "Japan",
      "Mexico",
      "Russia",
      "Spain",
      "SouthAfrica",
      "Uk",
      "Usa",
    ];

    function cows() {
      orangeBtn = "cow";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry !== "---") {
        const cowsData = `cowsData${selectedCountry}`;
        stats.innerHTML = fetchHtml[cowsData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
      }
    }

    function pigs() {
      orangeBtn = "pigs";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry != "---") {
        const pigsData = `pigsData${selectedCountry}`;
        stats.innerHTML = fetchHtml[pigsData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
      }
    }

    function sheep() {
      orangeBtn = "sheep";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry != "---") {
        const sheepData = `sheepData${selectedCountry}`;
        stats.innerHTML = fetchHtml[sheepData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
      }
    }

    function chicken() {
      orangeBtn = "chicken";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry != "---") {
        const chickenData = `chickenData${selectedCountry}`;
        stats.innerHTML = fetchHtml[chickenData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
      }
    }

    function turkey() {
      orangeBtn = "turkey";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry != "---") {
        const turkeyData = `turkeyData${selectedCountry}`;
        stats.innerHTML = fetchHtml[turkeyData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
      }
    }

    function fish() {
      orangeBtn = "fish";
      let selectedCountry = document.getElementById("countrylist").value;
      if (selectedCountry != "---") {
        const fishData = `fishData${selectedCountry}`;
        stats.innerHTML = fetchHtml[fishData];
      } else if (language == "eng") {
        alert("Choose a location");
        stats.innerHTML = "Choose a location";
      } else if (language == "spa") {
        alert("Elige una ubicación");
        stats.innerHTML = "Elige una ubicación";
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
      pbtPopup(selectedCountry);
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

    //PBT PopUp-----------------------------------------------
    let hasShownPopup = false;
    let pbtPopup = (selectedCountry) => {
      // Helper to create and show the popup for the current selectedCountry/language
      function createAndShowPbt() {
        let pbt = document.createElement("div");

        if (selectedCountry == "Canada" && language == "eng") {
          pbt.innerHTML = `
                <div class="pbt-popup-container"><button class="pbt-close-btn"><img src="images/x.png"></button><a href="https://animaljustice.ca/get-involved" target="_blanc"><img style="border-radius:16px; box-shadow: 0 0 10px #000" src="images/AJustice_PopUp.png" alt="Get Involved with Animal Justice"></a></div>
                `;
        } else if (language == "eng") {
          pbt.innerHTML = `
                  <div class="pbt-popup-container"><button class="pbt-close-btn"><img src="images/x.png"></button><a href="https://plantbasedtreaty.org/" target="_blanc"><img style="border-radius:16px; box-shadow: 0 0 10px #000" src="images/PBT_PopUp.gif" alt="Sign the Plant Based Treaty"></a></div>
                `;
        } else if (language == "spa") {
          pbt.innerHTML = `
                  <div class="pbt-popup-container"><button class="pbt-close-btn"><img src="images/x.png"></button><a href="https://plantbasedtreaty.org/" target="_blanc"><img style="border-radius:16px; box-shadow: 0 0 10px #000" src="images/PBT_PopUp_spa.gif" alt="Firma el Plant Based Treaty"></a></div>
                `;
        } else {
          // default fallback content (English)
          pbt.innerHTML = `
                  <div class="pbt-popup-container"><button class="pbt-close-btn"><img src="images/x.png"></button><a href="https://plantbasedtreaty.org/" target="_blanc"><img style="border-radius:16px; box-shadow: 0 0 10px #000" src="images/PBT_PopUp.gif" alt="Sign the Plant Based Treaty"></a></div>
                `;
        }

        pbt.classList.add("pbt-popup");

        const imgPBT = pbt.querySelector("img");
        imgPBT.onload = function () {
          pbtDisplayPopup();
        };

        function pbtDisplayPopup() {
          // mark as shown for non-Canada flows (keeps the "show once" behavior)
          hasShownPopup = true;

          // Close button functionality
          pbt.querySelector(".pbt-close-btn").addEventListener("click", function () {
            if (document.body.contains(pbt)) document.body.removeChild(pbt);
            document.removeEventListener("click", handleDocumentClick);
          });

          // Detect all clicks on the document
          function handleDocumentClick(event) {
            // If user clicks inside the element, do nothing
            if (event.target.closest(".pbt-popup-container")) return;
            // If user clicks outside the element, hide it!
            if (document.body.contains(pbt)) document.body.removeChild(pbt);
            document.removeEventListener("click", handleDocumentClick);
          }

          document.addEventListener("click", handleDocumentClick);

          document.body.appendChild(pbt); // Append the element to the body
        }
      }

      // If user selected Canada in English, always show the popup (bypass hasShownPopup).
      if (selectedCountry == "Canada" && language == "eng") {
        createAndShowPbt();
        return;
      }

      // Otherwise keep the existing "show once" behavior
      if (!hasShownPopup) {
        createAndShowPbt();
      }
    };

    // Background Watermark Img animation triggered on click of collapsible buttons
    $('#collapse1, #collapse2-LandChart, #collapse2-LandChartCapita, #collapse2-SeaChart, #collapse2-SeaChartCapita, #collapse2-TotalCapita').on('click', function() {
      setTimeout(function() {
        const bg = document.querySelector('.backgroundimg');
        if (bg && bg.classList) bg.classList.add('fadeIn');
      }, 1000);
    });
  };

  $("#priv-btn").on("click", function () {
    let privacy = document.getElementById("privacy");
    if (privacy.style.display === "none" || privacy.style.display === "") {
      privacy.style.display = "block";
    } else {
      privacy.style.display = "none";
    }
  });

  indexStuff();
});
// export { indexStuff };
