var mainContainner = document.querySelector("#main-container")
var threeLine = document.querySelector("#nav-icon-line")
var navClose = document.querySelector("#nav-icon-close")
var navResponse = document.querySelector("#nav-resp")
var sliderText = document.querySelector(".slider-text")

threeLine.addEventListener("click", function() {
   navResponse.style.display = "flex";
   navResponse.style.transition= "all 0.2s ease-in";
   mainContainner.style.overflow = "hidden";
   sliderText.style.opacity = 0;
   threeLine.style.display = "none";
   navClose.style.display = "flex";
});

navClose.addEventListener("click", function() {
   navResponse.style.display = "none";
   navResponse.style.transition= "all 0.2s ease-in";
   mainContainner.style.overflowY = "auto";
   sliderText.style.opacity = 1;
   threeLine.style.display = "flex";
   navClose.style.display = "none";
});