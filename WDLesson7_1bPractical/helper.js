//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.

function card(cardInfo) {
    let build = `
        <div class="fitted card">
            <h3>Plate: ${cardInfo.plate} (${cardInfo.state})</h3>
            <p>Violation: ${cardInfo.violation}</p>
            <p>Issue Date: ${cardInfo.issue_date}</p>
            <p>Violation Time: ${cardInfo.violation_time}</p>
            <p>Fine Amount: $${cardInfo.fine_amount}</p>
            <p>Issuing Agency: ${cardInfo.issuing_agency}</p>
        </div>
    `;
    return build;
}