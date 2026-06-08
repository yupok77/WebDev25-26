let data;
let mapObj;

async function init() {

  let info = await fetch("data.json");
  data = await info.json();

  displayCards(data);

  get("result").innerHTML =
    `${data.length} Results found`;
}

function displayCards(records) {

  let build = "";

  for (let i = 0; i < records.length; i++) {
    build += card(records[i]);
  }

  get("leftPanel").innerHTML = build;
}

/* =========================
   FILTER 1: BOROUGH ONLY
========================= */
function filterByBorough() {

  let borough =
    get("borough").value.toUpperCase();

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {

    let arrest = data[i];

    if (arrest.arrest_boro == borough) {
      build += card(arrest);
      ct++;
    }
  }

  get("leftPanel").innerHTML = build;
  get("result").innerHTML =
    `${ct} Results found`;
}

/* =========================
   FILTER 2: AGE + SEX
========================= */
function filterByAgeSex() {

  let ageGroup = get("ageGroup").value;
  let sex = get("sex").value;

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {

    let arrest = data[i];

    if (
      (arrest.age_group == ageGroup) &&
      (arrest.perp_sex == sex)
    ) {
      build += card(arrest);
      ct++;
    }
  }

  get("leftPanel").innerHTML = build;
  get("result").innerHTML =
    `${ct} Results found`;
}

/* SHOW ALL */
function showAll() {
  displayCards(data);

  get("result").innerHTML =
    `${data.length} Results found`;
}

/* MAP */
function showMap(lat, lon) {

  let location = [lat, lon];

  if (!mapObj) {

    mapObj = L.map("map").setView(location, 13);

    L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
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

/* CARD */
function card(arrest) {

  return `
  <div class="card fitted">

    <h3>${arrest.ofns_desc}</h3>

    <p><b>Borough:</b> ${arrest.arrest_boro}</p>
    <p><b>Age Group:</b> ${arrest.age_group}</p>
    <p><b>Race:</b> ${arrest.perp_race}</p>
    <p><b>Sex:</b> ${arrest.perp_sex}</p>

    <a class="button"
      onclick="showMap(${arrest.latitude}, ${arrest.longitude})">
      View Map
    </a>

  </div>
  `;
}



