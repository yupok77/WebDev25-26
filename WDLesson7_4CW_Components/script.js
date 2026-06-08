function init(){  
  
  let avengers = [
    {"name":"Hulk",
     "image":"images/hulk.png",
     "description":"This is Hulk."},
    {"name":"Antman",
     "image":"images/antman.png",
     "description":"This is Antman."},
    {"name":"Black Panther",
     "image":"images/blackpanther.jpg",
     "description":"This is Black Panther."}
  ]
  let avengers_images = ["images/antman.png","images/black_widow.png","images/blackpanther.jpg","images/captain_america.png","images/drstrange.jpg","images/hulk.png","images/ironman.png","images/scarlet_witch.png","images/thor.png","images/wasp.png"];

  //Task 1: Create a gallery using the images in the avengers_images array. 
  

  //Task 2: Create a modal to display the logo image when you click on the text Marvel Avengers!!.
  

  //The loop below produces the content for the flipcards from data in the avengers array
  for(let i = 0; i < avengers.length; i++){
    let avenger = avengers[i];
    //String interpolate the name, image and description into the HTML for each variable below
    let front = `<div class="container center">
                <div class="card">
                    <h2>${avenger.name}</h2>
                    <img src="${avenger.image}">
                </div>
            </div>`;
    let back = `<div class="container center">                    
                    <div class="card">
                       <img src="${avenger.image}">
                       <hr>
                       <p>${avenger.description}</p>
                    </div>
                  </div>`;

    //Task 3: Create a flip card using 'front' and 'back' HTML produced above. Render the flip card to flipcard_output.
    
  }
    
  //The loop below produces the content for the collapsible sections for each avenger in the avengers array.
  for(let i = 0; i < avengers.length;i++){
    let avenger = avengers[i];
    //String interpolate the description and image into each of the HTML elements below
    let content = ` <div class="container center">
                    <div class="card">    
                        <p>${avenger.description}</p>
                    </div>
                    <div class="card">
                       <img src="${avenger.image}">
                    </div>
                  </div>`;

    //Task 4: Create a collapsible section using the avenger's name and the content produced above. Render the collapsible object to collapsible_output
    
  }
 
}
