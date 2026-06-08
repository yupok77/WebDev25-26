let data;

async function init() {

  let info = await fetch("data.json");
  data = await info.json();

}

/* ------------------------
   BOROUGH ANALYSIS
-------------------------*/

function arrestsByBorough() {

  let m = 0;
  let q = 0;
  let b = 0;
  let k = 0;
  let s = 0;

  for (let i = 0; i < data.length; i++) {

    let arrest = data[i];

    if (arrest.arrest_boro == "M") {
      m++;
    }
    else if (arrest.arrest_boro == "Q") {
      q++;
    }
    else if (arrest.arrest_boro == "B") {
      b++;
    }
    else if (arrest.arrest_boro == "K") {
      k++;
    }
    else if (arrest.arrest_boro == "S") {
      s++;
    }
  }

  let chartData = [
    ["Manhattan", m],
    ["Queens", q],
    ["Bronx", b],
    ["Brooklyn", k],
    ["Staten Island", s]
  ];

  let chartType =
    document.getElementById("chartType").value;

  displayChart(chartData, chartType);

  document.getElementById("discussion").innerHTML =
    "This chart compares arrests across NYC boroughs. The borough with the tallest bar or largest section represents the highest number of arrests in the dataset.";
}


/* ------------------------
   AGE GROUP ANALYSIS
-------------------------*/

function arrestsByAge() {

  let a1824 = 0;
  let a2544 = 0;
  let a4564 = 0;
  let a65 = 0;

  for (let i = 0; i < data.length; i++) {

    let arrest = data[i];

    if (arrest.age_group == "18-24") {
      a1824++;
    }
    else if (arrest.age_group == "25-44") {
      a2544++;
    }
    else if (arrest.age_group == "45-64") {
      a4564++;
    }
    else if (arrest.age_group == "65+") {
      a65++;
    }
  }

  let chartData = [
    ["18-24", a1824],
    ["25-44", a2544],
    ["45-64", a4564],
    ["65+", a65]
  ];

  let chartType =
    document.getElementById("chartType").value;

  displayChart(chartData, chartType);

  document.getElementById("discussion").innerHTML =
    "This chart shows arrests by age group. It helps identify which age range appears most frequently in arrest records.";
}


/* ------------------------
   DISPLAY CHART
-------------------------*/

function displayChart(dataArray, chartType) {

  c3.generate({

    bindto: "#output",

    data: {
      columns: dataArray,
      type: chartType
    }

  });

}