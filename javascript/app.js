var nav_is_open = false;

document.addEventListener("DOMContentLoaded", function (event) {
    navOpener();
});

function myFunction(x) {
    x.classList.toggle("change");
}

function navOpener() {
    menu_icon = document.getElementById("menu-icon");
    menu_icon.addEventListener("click", function () {

        if (nav_is_open == false) {

            document.getElementById("nav").style.transform = "translate(0, 0)";
            nav_is_open = true;
            console.log("opened");

        } else {

            document.getElementById("nav").style.transform = "translate(0, -500px)";
            nav_is_open = false;
            console.log("closed");
        }
    });
}