/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) Give each info card div of card a class of card
2) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
3) Create an appropriate random price to display for each pizza (say 15 to 35) and no html needed
4) Enter quantity is a text input (no need id)
5) Buy is a button input (no event listener)

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3 - 6n

//init() function is called when the page loads in index.html
function init(){
    let output = document.getElementById("output");
    let build = "";
    for(let i = 1; i <= 5; i++){ 
      let price = Math.floor(Math.random()*21 + 15);
      
      build += `<div class="card">`

      build += `<img src="images/title${i}.png" class="title">`

      build += `<img src="images/pizza${i}.jpg" class="pizza">`

      build += `<p>$${price}
               <input type="text" placeholder="Enter Quantity">
               </p>`

      build += `<input type="button" value="Buy">`

      build += `</div>`
      }

  output.innerHTML = build;
 }


  



