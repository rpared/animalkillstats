function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        table = $(data).find("div#0 table").html();
        jsonData = makeJsonFromTable(table);
        resolve(jsonData);
      });
  });
}

makeJsonFromTable = function (table) {
  var tbl = $(table);
  var tblbody = tbl[1]; // Google Sheet web table does not use thead
  var tblhead = $(tbl[1]).find("tr")[0]; // getting the table headers from the first row in the tbody
  var header = [];
  var JObjectArray = [];

  // creating the array of headers
  $.each($(tblhead).find("td"), function (i, j) {
    header.push($(j).text());
  });

  // parsing the rows to grab the data
  $.each($(tblbody).find("tr"), function (key, value) {
    var jObject = {};
    for (var x = 0; x < header.length; x++) {
      jObject[header[x]] = $(this).find("td").eq(x).text(); //adding the data for each header array element
    }
    JObjectArray.push(jObject);
  });
  JObjectArray.shift(); // drop the first element that repeats the table headers

  // reformat the object by region
  let newData = {};
  JObjectArray.forEach((entry) => {
    let regionValues = {};
    for (let key in entry) {
      if (key !== "region") {
        regionValues[key] = entry[key];
      }
    }
    newData[entry.region] = regionValues;
  });
  return newData;
};
