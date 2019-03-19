var aboutSection = document.createElement("p");
aboutSection.innerHTML="Welcome to the portfolio site of Ben Schulz. I am a recent graduate of the CS program at Univeristy of Denver. One of my minors is Emergent Digital Practices (EDP). A field that cultivates the use of constantly evolving digital tools to produce creative works. This website portfolio is dedicated to documenting noteworthy projects I have completed during my time in the EDP program.\n\nPlease have a look through my work.\nThank you!";
aboutSection.setAttribute("name", "BIO");

var lynchImage = document.createElement("img");
var collageImage = document.createElement("img");
var snakeImage = document.createElement("img");
var starImage = document.createElement("img");
var spiritImage = document.createElement("img");

var faceImage = document.createElement("img");
var frontierImage = document.createElement("img");

var imagingImages = [lynchImage, collageImage, snakeImage, starImage, spiritImage];
var codingImages = [faceImage, frontierImage];

lynchImage.setAttribute("src", "images/imaging/lynch.png");
lynchImage.setAttribute("name", "David Lynch Vector Portrait");
collageImage.setAttribute("src", "images/imaging/collage.jpg");
collageImage.setAttribute("name", "Gothic Style Panel Collage");
snakeImage.setAttribute("src", "images/imaging/appleSnake.jpg");
snakeImage.setAttribute("name", "Apple and Snake Vector Sticker Template");
starImage.setAttribute("src", "images/imaging/armStar.jpg");
starImage.setAttribute("name", "Arm of Asclepius Sticker Template");
spiritImage.setAttribute("src", "images/imaging/spirit.jpg");
spiritImage.setAttribute("Name", "Spirit Animal Vector Portrait");

for (image of imagingImages) {
  image.setAttribute("alt", "Image Not Loaded :(");
}

faceImage.setAttribute("src", "images/coding/face.png");
faceImage.setAttribute("name", "Portait of Pablo by Dora Maar in Processing");
frontierImage.setAttribute("src", "images/coding/frontier.jpg");
frontierImage.setAttribute("name", "Screenshots of Game in Processing");

for (image of codingImages) {
  image.setAttribute("alt", "Image Not Loaded :(");
}

var imageArea = document.getElementById("imageArea");
var label = document.getElementById("label");
label.innerHTML = "" + aboutSection.getAttribute("name");

var aboutButton = document.getElementById("about_button");
var imagingButton = document.getElementById("imaging_button");
var codingButton = document.getElementById("coding_button");
var leftButton = document.getElementById("nav_left");
var rightButton = document.getElementById("nav_right");

var about = true;
var imaging = false;
var coding = false;

var imagingIndex = 0;
var codingIndex = 0;

aboutButton.setAttribute("onclick", "showAbout()");
aboutButton.setAttribute("style", "color:black; background-color:green;");
imageArea.appendChild(aboutSection);

imagingButton.setAttribute("onclick", "showImaging()");

codingButton.setAttribute("onclick", "showCoding()");

leftButton.setAttribute("onclick", "prevImage()");
rightButton.setAttribute("onclick", "nextImage()");
leftButton.setAttribute("class" , "disabled");
rightButton.setAttribute("class" , "disabled");

var aboutClicked = function() {
  aboutButton.setAttribute("style", "color:black; background-color:green;");
  imagingButton.setAttribute("style", "color:green; background-color:black;");
  codingButton.setAttribute("style", "color:green; background-color:black;");
}

var showAbout = function() {
  if (!about) {
    aboutClicked();
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(aboutSection);
    label.innerHTML = "" + aboutSection.getAttribute("name");
    leftButton.setAttribute("class" , "disabled");
    rightButton.setAttribute("class" , "disabled");
    about = true;
    imaging = false;
    coding = false;
  }
}

var imagingClicked = function() {
  aboutButton.setAttribute("style", "color:green; background-color:black;");
  imagingButton.setAttribute("style", "color:black; background-color:green;");
  codingButton.setAttribute("style", "color:green; background-color:black;");
}

var showImaging = function() {
  if (!imaging) {
    imagingClicked();
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(imagingImages[imagingIndex]);
    label.innerHTML = "" + imagingImages[imagingIndex].getAttribute("name");
    leftButton.setAttribute("class" , "");
    rightButton.setAttribute("class" , "");
    imaging = true;
    about=false;
    coding = false;
  }
}

var codingClicked = function() {
  aboutButton.setAttribute("style", "color:green; background-color:black;");
  imagingButton.setAttribute("style", "color:green; background-color:black;");
  codingButton.setAttribute("style", "color:black; background-color:green;");
}

var showCoding = function() {
  if (!coding) {
    codingClicked();
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(codingImages[codingIndex]);
    label.innerHTML = "" + codingImages[codingIndex].getAttribute("name");
    leftButton.setAttribute("class" , "");
    rightButton.setAttribute("class" , "");
    coding = true;
    about = false;
    imaging = false;
  }
}

var nextImage = function() {
  if (imaging) {
    if (imagingIndex < imagingImages.length-1) {
      imagingIndex++;
    } else {
      imagingIndex = 0;
    }
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(imagingImages[imagingIndex]);
    label.innerHTML = "" + imagingImages[imagingIndex].getAttribute("name");
  } else if (coding) {
    if (codingIndex < codingImages.length-1) {
      codingIndex++;
    } else {
      codingIndex = 0;
    }
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(codingImages[codingIndex]);
    label.innerHTML = "" + codingImages[codingIndex].getAttribute("name");
  }
}

var prevImage = function() {
  if (imaging) {
    if (imagingIndex > 0) {
      imagingIndex--;
    } else {
      imagingIndex = imagingImages.length-1;
    }
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(imagingImages[imagingIndex]);
    label.innerHTML = "" + imagingImages[imagingIndex].getAttribute("name");
  } else if (coding) {
    if (codingIndex > 0 ) {
      codingIndex--;
    } else {
      codingIndex = codingImages.length-1;
    }
    while (imageArea.hasChildNodes()) {
      imageArea.removeChild(imageArea.lastChild);
    }
    imageArea.appendChild(codingImages[codingIndex]);
    label.innerHTML = "" + codingImages[codingIndex].getAttribute("name");
  }
}
