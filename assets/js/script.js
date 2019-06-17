let bookMarkWrapper = document.querySelector("#bookMarkWrapper");
let spinX = document.querySelector("#spinX");

// Toggle Bookmarks
spinX.addEventListener("click", e => {
  // bookMarkContainer.style.display =
  //   bookMarkContainer.style.display === "flex" ? "none" : "flex";
  if (bookMarkWrapper.style.display === "none") {
    $(bookMarkWrapper).slideDown("slow");
  } else {
    $(bookMarkWrapper).slideUp("slow");
  }
});
