function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
    <div class="card">
      <h3>${school.name}</h3>
      <img src="${school.image}" width="250">
      <p>${school.address}</p>
    </div>
  `;

  output.innerHTML = build;
}


  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  function artist(){
  let artist = {
    "name":"Drake",
    "image":"https://therunneronline.wordpress.com/wp-content/uploads/2013/10/tumblr_mryav9qwp71re1804o1_1280.jpg",
    "album":"Nothing Was the Same",
    "url":"https://en.wikipedia.org/wiki/Drake_(musician)"
  };

  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = `
    <div class="card">
      <h3>${artist.name}</h3>
      <a href="${artist.url}" target="_blank">
        <img src="${artist.image}" width="150"
      </a>
      <p>Album: ${artist.album}</p>
    </div>
  `;

  output.innerHTML = build;

}





