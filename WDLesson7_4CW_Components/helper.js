let $ = (selector) => document.querySelector(selector);
//Concept Source - https://www.w3schools.com/howto/howto_css_modals.asp

// Modal
function createModal(text, content, container) {
  const button = document.createElement("div");
  button.innerHTML = text;

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");

  const modal_content = document.createElement("div");
  modal_content.setAttribute("class", "modal-content");

  const modal_header = document.createElement("div");
  modal_header.setAttribute("class", "modal-header");

  const modal_body = document.createElement("div");
  modal_body.setAttribute("class", "modal-body");

  // FIX: Check the local variable 'content', not 'this.content'
  if (typeof content === "object" && content !== null) {
    modal_body.append(content);
  } else {
    modal_body.innerHTML = content;
  }
  
  const closeButton = document.createElement("span");
  closeButton.setAttribute("class", "close");
  closeButton.innerHTML = "&times;"; // FIX: Added missing semicolon

  // Event Listeners
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // DOM Assembly
  modal_header.append(closeButton);
  modal_content.append(modal_header);
  modal_content.append(modal_body);
  modal.append(modal_content);

  $(`#${container}`).append(button);
  $(`#${container}`).append(modal);

  // Return control methods like your other components
  return {
    open: () => modal.style.display = "block",
    close: () => modal.style.display = "none",
    element: modal
  };
}

// Gallery
function createGallery(images, container, speed = 1000) {
  let index = 0;
  let timer = null;

  const obj = document.createElement("img");
  obj.src = images[0];

  function next() {
    index++;
    obj.src = images[index % images.length];
  }

  function play() {
    // Clear any existing timer to prevent multiple loops running concurrently
    stop(); 
    next();
    timer = setTimeout(play, speed);
  }

  function stop() {
    clearTimeout(timer);
  }

  obj.addEventListener("click", next);
  $(`#${container}`).append(obj);

  play();

  return {
    next,
    play,
    stop
  };
}

// Flip Card
function createFlipCard(front, back, container) {
  const obj = document.createElement("div");
  obj.setAttribute("class", "flip-card");

  obj.innerHTML = `
    <div class="flip-front">${front}</div>
    <div class="flip-back">${back}</div>
  `;

  function flip() {
    obj.classList.toggle("flip");
  }

  obj.addEventListener("click", flip);
  $(`#${container}`).append(obj);

  return {
    element: obj,
    flip
  };
}

function createCollapsible(text, content, container) {
  const button = document.createElement("button");
  button.setAttribute("class", "collapsible");
  button.innerHTML = text;

  const div = document.createElement("div");
  div.setAttribute("class", "content");

  // Support both DOM elements and HTML strings for content consistency
  if (typeof content === "object" && content !== null) {
    div.append(content);
  } else {
    div.innerHTML = content;
  }

  // Toggle logic
  function toggle() {
    button.classList.toggle("active");
    if (div.style.display === "block") {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  }

  button.addEventListener("click", toggle);

  // Append directly to the container
  $(`#${container}`).append(button);
  $(`#${container}`).append(div);

  // Return API control handles matching your architectural style
  return {
    button,
    content: div,
    toggle
  };
}