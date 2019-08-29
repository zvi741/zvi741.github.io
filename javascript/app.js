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

            document.getElementById("nav").style.transform = "translate(0, 13vh)";
            nav_is_open = true;
        } else {

            document.getElementById("nav").style.transform = "translate(0, -500px)";
            nav_is_open = false;
        }
    });
}

/*alert(document.getElementsByTagName('html')[0].innerHTML);*/

var i = 0;
var txt = "בואו נגרום לו גם להיראות כך";
var speed = 150;
var speedd = 1500;
var forward = true;
window.onload = function () {
    setTimeout(typeWriter, 500);
};

function typeWriter() {

    if (forward) {
        if (i < txt.length) {
            document.getElementById("look_good").innerHTML += txt.charAt(i);
            i++;

            if (i == txt.length) {
                forward = false;
                setTimeout(typeWriter, speedd);
            } else {
                setTimeout(typeWriter, speed);
            }
        };
    } else {
        if (i > 0) {
            txt = txt.slice(0, -1);
            document.getElementById("look_good").innerHTML = txt;
            i--;
            if (i == 0) {
                setTimeout(typeWriter, speedd);
                forward = true;
                txt = "בואו נגרום לו גם להיראות כך";
            } else {
                setTimeout(typeWriter, speed);
            }
        };
    };
};
