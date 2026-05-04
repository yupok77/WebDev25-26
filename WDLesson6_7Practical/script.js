let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  //console.log(data);
  

  let output = document.getElementById("output");
  let build = "";
  

  for(let i = 0; i < data.length; i++){
    let crash = data[i];

    build += `<div class="fitted card">
                <h3>${crash.crash_date}</h3>
                <hr>
                <p>${crash.crash_time}</p>
                <p>${crash.borough}</p>
                <p>${crash.zip_code}</p>
                <hr>
                <p><b>Injured</b>:${crash.number_of_persons_injured}</p>
                <p> ${crash.contributing_factor_vehicle_1}</p>
              </div>`;
  
  }

  
  output.innerHTML = build;
}

function filterByBorough() {
    let borough = document.getElementById("borough").value;
    let output = document.getElementById("output");
    let result = document.getElementById("result");

    let build = "";
    let ct = 0;

    
    for (let i = 0; i < data.length; i++) {
        let crash = data[i];

        if (crash.borough == borough) {
            build += `<div class="fitted card">
                        <h3>${crash.crash_date}</h3>
                        <hr>
                        <p>${crash.crash_time}</p>
                        <p>${crash.borough}</p>
                        <p>${crash.zip_code}</p>
                        <hr>
                        <p><b>Injured:</b>${crash.number_of_persons_injured }</p>
                        <p>${crash.contributing_factor_vehicle_1 }</p>
                      </div>`;
            ct++;
        }
    }

    result.innerHTML = `${ct} Results found for ${borough}`;
    output.innerHTML = build;
}


function filterByFactor() {
    let factor = document.getElementById("factor").value; // read input
    let output = document.getElementById("output");
    let result = document.getElementById("result");

    let build = "";
    let ct = 0;

    for (let i = 0; i < data.length; i++) {
        let crash = data[i];

        // exact match on contributing factor
        if (crash.contributing_factor_vehicle_1 == factor) {
            build += `<div class="fitted card">
                        <h3>${crash.crash_date}</h3>
                        <hr>
                        <p>${crash.crash_time}</p>
                        <p>${crash.borough}</p>
                        <p>${crash.zip_code}</p>
                        <hr>
                        <p><b>Injured:</b>${crash.number_of_persons_injured}</p>
                        <p>${crash.contributing_factor_vehicle_1}</p>
                      </div>`;
            ct++;
        }
    }

    result.innerHTML = `${ct} Results found for ${factor}`;
    output.innerHTML = build;
}



function filterMultiple() {
    let borough = document.getElementById("boroughMulti").value;
    let factor = document.getElementById("factorMulti").value;

    let output = document.getElementById("output");
    let result = document.getElementById("result");

    let build = "";
    let ct = 0;

    for (let i = 0; i < data.length; i++) {
        let crash = data[i];

        if (crash.borough == borough && crash.contributing_factor_vehicle_1 == factor) {
            build += `<div class="fitted card">
                        <h3>${crash.crash_date}</h3>
                        <hr>
                        <p>${crash.crash_time}</p>
                        <p>${crash.borough}</p>
                        <p>${crash.zip_code}</p>
                        <hr>
                        <p><b>Injured:</b>${crash.number_of_persons_injured}</p>
                        <p>${crash.contributing_factor_vehicle_1}</p>
                      </div>`;
            ct++;
        }
    }

    result.innerHTML = `${ct} Results found for ${borough} and ${factor}`;
    output.innerHTML = build;
}