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
var timeChange = setInterval(changeImage, 5000)


var button = document.getElementById('btn1');

function buttonChange1() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg.jpg')"
  }
}

function buttonChange2() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg2.jpg')"
  }
}

function buttonChange3() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg3.jpg')"
  }
}

function buttonChange4() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg4.jpg')"
  }
}

function buttonChange5() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg5.jpg')"
  }
}

function buttonChange6() {
  if (button.onclick) {
    myImage.style.backgroundImage = "url('images/bg6.jpg')"
  }
}

window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader')
  preloader.style.display = 'none'
})