let data, info, output;

async function init(){
  let link = "311.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function complaintsByBorough(){
  //Discussion 1: Define variables to keep tally of complaints by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  //Discussion 2: Traverse the data and use a decision to aggregate data by borough.
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.borough == "QUEENS"){
      q++;
    }else if(complaint.borough == "MANHATTAN"){
      m++;
    }else if(complaint.borough == "BROOKLYN"){
      bk++;
    }else if(complaint.borough == "BRONX"){
      bx++;
    }else if(complaint.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Discussion 3: Setup the aggregated data as array of arrays to generate chart.
  // 1st position in each array is the label for the data
  let chartData = [
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];
  
  //Discussion 4: Retrieve chart type via user selection from drop-down.
  let chartType = document.getElementById("chartType").value;
  
  //Discussion 5: Display chart using displayChart() function.
  displayChart(chartData, "output", chartType);
}


// displayChart() accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}