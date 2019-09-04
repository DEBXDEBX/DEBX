let bookMarkWrapper = document.querySelector("#bookMarkWrapper");
let spinX = document.querySelector("#spinX");
let clickAudio = document.querySelector("#clickAudio");
// Toggle Bookmarks
spinX.addEventListener("click", e => {
  clickAudio.play();
  $(bookMarkWrapper).slideToggle("slow");
});
