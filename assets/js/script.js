let bookMarkWrapper = document.querySelector("#bookMarkWrapper");
let spinX = document.querySelector("#spinX");

// Toggle Bookmarks
spinX.addEventListener("click", e => {
  $(bookMarkWrapper).slideToggle("slow");
});
