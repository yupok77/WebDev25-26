//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, info, output; // global variables

async function init(){  
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  let build = "";
  let ct = 0;

  //Challenge 2: Test the function card() developed in Challenge 1 by displaying only the first violation to the webpage.
if(data.length > 0){
      build += card(data[0]); 
  }
  output.innerHTML = build;


  //Challenge 3: Display all the violations to the web page using the function card().
 build = "";
  for(let i = 0; i < data.length; i++){
      build += card(data[i]); // show all violations
  }
  output.innerHTML = build;
}
 


// Challenge 4: Create a function to filter the information and display only the cards that satisfy specfic condition(s).
function filterByCountyAndAgency(){
  let county = get("county").value;
  let agency = get("agency").value;
  let build = "";

  for(let i = 0; i < data.length; i++){
      let violation = data[i];
      if(violation.county == county && violation.issuing_agency == agency){
          build += card(violation);
      }
  }
  output.innerHTML = build;
}

function filterByViolationOrPlate(){
  let violationType = get("violation_type").value;
  let plate = get("plate").value;
  let build = "";

  for(let i = 0; i < data.length; i++){
      let violation = data[i];
      if(violation.violation == violationType || violation.plate == plate){
          build += card(violation);
      }
  }
  output.innerHTML = build;
}