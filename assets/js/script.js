let bookMarkContainer = document.querySelector("#bookMarksContainer");
let spinX = document.querySelector("#spinX");

// Toggle Bookmarks
spinX.addEventListener("click", e => {
  bookMarkContainer.style.display =
    bookMarkContainer.style.display === "flex" ? "none" : "flex";
});
