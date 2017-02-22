var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector(".login-field");

link.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("modal-content-show");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
})
