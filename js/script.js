var orderLink = document.querySelector(".buy");
var orderPopup = document.querySelector(".modal-ordering");
var orderClose = orderPopup.querySelector(".modal-close");
var CloseOrder = orderPopup.querySelector(".continue-button");
var basket = document.querySelector(".basket");
var buy = document.querySelector(".buy");
var bookmarks = document.querySelector(".bookmarks");
var bookmark = document.querySelector(".bookmark");

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");
});

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

CloseOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.add("basket-active");
});

bookmark.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookmarks.classList.add("bookmarks-active");
});

var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

console.log(basket);
console.log(bookmarks)
