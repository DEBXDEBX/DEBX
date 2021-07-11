let bookMarkWrapper = document.querySelector("#bookMarkWrapper");
let spinX = document.querySelector("#spinX");
let clickAudio = document.querySelector("#clickAudio");
let clown = document.querySelector("#clown");
let quoteWrapper = document.querySelector("#quoteWrapper");
// Toggle Bookmarks
spinX.addEventListener("click", (e) => {
  clickAudio.play();
  $(bookMarkWrapper).slideToggle("slow");
  window.scrollTo(0, 0);
});

clown.addEventListener("click", (e) => {
  clickAudio.play();
  $(quoteWrapper).slideToggle("slow");
});
