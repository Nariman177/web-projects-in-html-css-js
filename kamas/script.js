auto();
all_images = new Array (
"img/Audi.jpg",
"img/BMW.png",
"img/bugati.jpg",
"img/lam.jpg");
var ImgNum = 0;
var ImgLength = all_images.length - 1;
var delay = 2500;
var lock = false;
var run;

function chgImg(direction) {
 if (document.images) {
  ImgNum = ImgNum + direction;
  if (ImgNum > ImgLength) { ImgNum = 0; }
  if (ImgNum < 0) { ImgNum = ImgLength; }
  document.slide_show.src = all_images[ImgNum];
 }
}

function auto() {
 if (lock == true) {
  lock = false;
  window.clearInterval(run);
 }
 else if (lock == false) {
  lock = true;
  run = setInterval("chgImg(1)", delay);
 }
}
