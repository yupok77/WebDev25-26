/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/


function interest(){

  let p = parseFloat(document.getElementById("p").value);
  let r = parseFloat(document.getElementById("r").value);
  let n = parseInt(document.getElementById("n").value);
  let year = parseInt(document.getElementById("t").value);

  let output = document.getElementById("output");

  r = r / 100;   

  let build = "<h2> Yearly Balance</h2>";

  for(let t = 1; t <= year; t+=1){

  let amount = p * Math.pow((1 + r/n), n * t);

  build += `Year ${t}: $${amount.toFixed(2)}<br>`;
  }

  output.innerHTML = build;
}
