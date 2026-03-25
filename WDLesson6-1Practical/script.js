/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [12.99, 14.99, 19.99, 17.99];
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"];

let seafood_images = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [9.99, 15.99, 24.99, 18.99, 13.99, 16.99];
let seafood_titles = ["Clams","Crabs","Lobster","Scallops","Shrimp","Tuna"];

let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [5.99, 6.99, 4.99];
let dessert_titles = ["Flan","Passion Berry Dessert","Oreo Cup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  
  for(let i = 0; i < meat_images.length; i++){
    build += `<div class="card">`;
    build += `<h3>${meat_titles[i]}</h3>`;
    build += `<img src="images/${meat_images[i]}">`;
    build += `<p>$${meat_prices[i]}</p>`;
    build += `</div>`;
  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build = ""
  for(let i = 0; i < seafood_images.length; i++){
    build += `<div class="card">`;
    build += `<h3>${seafood_titles[i]}</h3>`;
    build += `<img src="images/${seafood_images[i]}">`;
    build += `<p>$${seafood_prices[i]}</p>`;
    build += `</div>`;
  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  build = ""
  for(let i = 0; i < dessert_images.length; i++){
    build += `<div class="card">`;
    build += `<h3>${dessert_titles[i]}</h3>`;
    build += `<img src="images/${dessert_images[i]}">`;
    build += `<p>$${dessert_prices[i]}</p>`;
    build += `</div>`;
  
  }
  d.innerHTML = build;

 
}
