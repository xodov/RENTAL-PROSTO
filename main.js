var myImage = document.getElementById("main1");
var imageArray = ["images/bg.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg", "images/bg5.jpg", "images/bg6.jpg"];
var imageIndex = 0;


function changeImage() {
  myImage.style.backgroundImage = 'url(' + imageArray[imageIndex] + ')';
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

var timeChange = setInterval(changeImage, 3000)