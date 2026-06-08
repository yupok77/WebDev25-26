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
let data;
let mapObj;

async function init() {

  let info = await fetch("data.json");

  data = await info.json();

  displayCards(data);
}

function displayCards(records) {

  let leftPanel = get("leftPanel");

  let build = "";

  for (let i = 0; i < records.length; i++) {
    build += card(records[i]);
  }

  leftPanel.innerHTML = build;
}

/* ✅ FILTER FUNCTION (your required style) */
function applyFilters() {

  let borough = get("borough").value.toUpperCase();
  let ageGroup = get("ageGroup").value;
  let sex = get("sex").value;

  let build = "";

  for (let i = 0; i < data.length; i++) {

    let arrest = data[i];

    if (
      (borough === "" || arrest.arrest_boro == borough) &&
      (ageGroup === "" || arrest.age_group == ageGroup) &&
      (sex === "" || arrest.perp_sex == sex)
    ) {
      build += card(arrest);
    }
  }

  get("leftPanel").innerHTML = build;
}

/* SHOW ALL */
function showAll() {
  displayCards(data);
}

/* MAP FUNCTION */
function showMap(lat, lon) {

  let location = [lat, lon];

  if (!mapObj) {

    mapObj = L.map("map").setView(location, 13);

    L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap"
      }
    ).addTo(mapObj);

  } else {

    mapObj.setView(location, 13);
  }

  L.marker(location).addTo(mapObj);

  setTimeout(() => {
    mapObj.invalidateSize();
  }, 100);
}

/* CARD FUNCTION */
function card(arrest) {

  let build = `
  <div class="card fitted">

      <h3>${arrest.ofns_desc}</h3>

      <hr>

      <p><b>Borough:</b> ${arrest.arrest_boro}</p>

      <p><b>Age Group:</b> ${arrest.age_group}</p>

      <p><b>Race:</b> ${arrest.perp_race}</p>

      <p><b>Sex:</b> ${arrest.perp_sex}</p>

      <p><b>Law Category:</b> ${arrest.law_cat_cd}</p>

      <p><b>Precinct:</b> ${arrest.arrest_precinct}</p>

      <a class="button"
        onclick="showMap(${arrest.latitude}, ${arrest.longitude})">
        View Map
      </a>

  </div>
  `;

  return build;
}