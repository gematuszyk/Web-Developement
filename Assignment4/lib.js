var background = document.querySelector('body');
var title = document.querySelector('h1');
var imgId = document.querySelector('#imageFloat');
var newText = document.querySelector("#name");
var hueBrowserRatio;
var lightnessBrowserRatio;

var img1 = document.querySelector('#myImg1');
var img2 = document.querySelector('#myImg2');
var img3 = document.querySelector('#myImg3');
var img4 = document.querySelector('#myImg4');

function sizeImages() {
  var images = document.querySelectorAll('.thisImg'), imageArray = Array.prototype.slice.call(images);
  imageArray.forEach(function (img) { // Now itterate over each image in the array
    img.style.padding= '10px';
    img.style.width=(window.innerWidth-'160')/4;
    img.style.height='500px'; // Set the height and width
    img.style.opacity="0.3";
  });
  newText.style.opacity='1';
  newText.style.fontSize='50px';
  newText.style.display="inline";
  newText.style.opacity="0";
}

function colorScale() {
  var browserWidth = window.innerWidth;
  var browserHeight = window.innerHeight;
   console.log('Browser width: ' + browserWidth);
  // console.log('Browser height: ' + browserHeight);

  hueBrowserRatio = browserWidth / 360;
  lightnessBrowserRatio = browserHeight / 100;
 //   console.log('Hue/browser ratio: ' + hueBrowserRatio);
 // console.log('Lightness/browser ratio: ' + lightnessBrowserRatio);
}

function mousePosition(event) {
  var xPos = event.pageX;
  var yPos = event.pageY;
  //  console.log('Mouse X: ' + xPos);
  //  console.log('Mouse Y: ' + yPos);

  updateColor(xPos, yPos);
}


function updateColor(xPos, yPos) {
  // Map hue to mouse position relative to browser width
  var hue;
  if(xPos>((((window.innerWidth-'160')/4)*3)+100) && yPos >101) {
    hue="#FFFFED";
    img4.style.opacity="1";
    img1.style.opacity="0.3";
    img2.style.opacity="0.3";
    img3.style.opacity="0.3";
    newText.style.opacity="1";
    newText.innerHTML = "Oahu";
  }
  if((xPos<((((window.innerWidth-'160')/4)*3)+100)&&xPos>((((window.innerWidth-'160')/4)*2)+74)) && yPos >101) {
    hue="#E6FFFF";
    img3.style.opacity="1";
    img1.style.opacity="0.3";
    img2.style.opacity="0.3";
    img4.style.opacity="0.3";
    newText.style.opacity="1";
    newText.innerHTML = "Maui";
  }
  if((xPos<((((window.innerWidth-'160')/4)*2)+74)&&xPos>(((window.innerWidth-'160')/4)+54)) && yPos >101) {
    hue= "#DEE2FF";
    img2.style.opacity="1";
    img1.style.opacity="0.3";
    img3.style.opacity="0.3";
    img4.style.opacity="0.3";
    newText.style.opacity="1";
    newText.innerHTML = "The Big Island";
  }
  if((xPos<(((window.innerWidth-'160')/4)+54)&&xPos>0) && yPos >101) {
    hue="#E8FFE8";
    img1.style.opacity="1";
    img2.style.opacity="0.3";
    img3.style.opacity="0.3";
    img4.style.opacity="0.3";
    newText.style.opacity="1";
    newText.innerHTML = "Kauia";
  }
  if(yPos<100) {
    background.style.backgroundColor="white";
    img1.style.opacity="0.3";
    img2.style.opacity="0.3";
    img3.style.opacity="0.3";
    img4.style.opacity="0.3";
    newText.style.opacity="0";
    newText.innerHTML = "a";
    size.innerHTML=""
    population.innerHTML=""
    bestBeach.innerHTML=""
    chose.innerHTMl="";
    island="";
    imgChosen=0;
  }
  var lightness = 90;
  //console.log('Lightness: ' + lightness + '%');

  background.style.backgroundColor =  hue ;
}



// Update scale when the page loads
window.onload = colorScale;
window.onload= sizeImages;

// Update scale when the window is resized
window.onresize = colorScale;
window.onresize = sizeImages;

//---------------------------------- MOUSE EVENT LISTENER ----------------//

// Detect mouse movements
window.addEventListener('mousemove', mousePosition, false);

// Detect touch movement
window.addEventListener('touchmove', mousePosition, false);

//--------------------------------- UI CLICK EVENT LISTENER -------------------//

var size = document.querySelector("#size");
var pop = document.querySelector("#population");
var beach = document.querySelector("#bestBeach");
var stats = document.querySelectorAll("h4"), statsArray = Array.prototype.slice.call(stats);
statsArray.forEach(function(stat) {
  stat.style.display='inline';
  stat.style.paddingLeft="10px";
  stat.style.fontSize = '22px';
});
myImg1.addEventListener('click', function() {
  size.innerHTML="Size: 552 mi<sup>2<sup>";
  pop.innerHTML="Population: 65,689";
  beach.innerHTML="Best Beach: Kalihiwai Beach";
});
myImg2.addEventListener('click', function() {
  size.innerHTML="Size: 4,028 mi<sup>2<sup>";
  pop.innerHTML="Population: 186,738";
  beach.innerHTML="Best Beach: Hapuna Beach State Park";
});
myImg3.addEventListener('click', function() {
  size.innerHTML="Size: 727 mi<sup>2<sup>";
  pop.innerHTML="Population: 144,444";
  beach.innerHTML="Best Beach: Ho'okipa Beach Park";
});
myImg4.addEventListener('click', function() {
  size.innerHTML="Size: 597 mi<sup>2<sup>";
  pop.innerHTML="Population: 953,207";
  beach.innerHTML="Best Beach: Lanikai Beach";
});

//-------------------------------- KEYBOARD EVENT LISTENER -----------------------//

var chosen = false;
var imgChosen = 0;
var chose = document.querySelector("#chosen");
var direc = document.querySelector("#direc");
chose.style.textAlign="center";
chose.style.fontSize="50px";
var island="";
window.addEventListener('keydown', (event) => {
  direc.innerHTML="Press Enter to choose an Island";
  const keyName = event.key;
  console.log('hi');
  console.log(chosen);
  if (keyName === 'Enter'&& chosen === false) {
    // not alert when only Control key is pressed.
    console.log(chosen);
    alert(`Select an island by toggling with any key and then pressing Enter`);
  } else if (keyName !== 'Enter') {
    imgChosen += 1;
    chosen = true;
  } else if (keyName === 'Enter'&& chosen === true) {
    chose.innerHTML = "The Island you have chosen is..." + island;
  }
  if(imgChosen % 4 === 1) {
    img1.style.opacity="1";
    img2.style.opacity="0.3";
    img3.style.opacity="0.3";
    img4.style.opacity="0.3";
    island="Kauai";
  } else if (imgChosen % 4 === 2) {
    img2.style.opacity="1";
    img1.style.opacity="0.3";
    img3.style.opacity="0.3";
    img4.style.opacity="0.3";
    island="The Big Island";
  } else if (imgChosen % 4 === 3) {
    img3.style.opacity="1";
    img1.style.opacity="0.3";
    img2.style.opacity="0.3";
    img4.style.opacity="0.3";
    newText.style.opacity="1";
    newText.innerHTML = "Maui";
    island="Maui";
  } else if (imgChosen % 4 === 0) {
    img4.style.opacity="1";
    img1.style.opacity="0.3";
    img2.style.opacity="0.3";
    img3.style.opacity="0.3";
    island="Oahu";
  }
}, false);
