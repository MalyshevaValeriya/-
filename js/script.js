var orderLink = document.querySelectorAll(".buy");
var orderPopup = document.querySelector(".modal-ordering");
var orderClose = orderPopup.querySelector(".modal-close");
var CloseOrder = orderPopup.querySelector(".continue-button");
var basket = document.querySelector(".basket");
var bookmarks = document.querySelector(".bookmarks");
var bookmark = document.querySelectorAll(".bookmark");
var userBookmarks = document.querySelector(".user-bookmarks");
var userBuys = document.querySelector(".user-buys");

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

CloseOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

for (var i=0; i<orderLink.length; i++) {
  orderLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.add("basket-active");
    orderPopup.classList.add("modal-show");
    userBuys.innerHTML = Number(userBuys.innerHTML) + 1;
  });
};


for (var i=0; i<bookmark.length; i++) {
  bookmark[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarks.classList.add("bookmarks-active");
    userBookmarks.innerHTML = Number(userBookmarks.innerHTML) + 1;
  });
};

var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("[name=user-message]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage) {
    evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.add("modal-error");
}
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
       if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

var map =  document.querySelector(".map")
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

 map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });


