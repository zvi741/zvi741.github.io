var nav_is_open = false;

function cl(x) {
    console.log(x);
}

document.addEventListener("DOMContentLoaded", function (event) {

    navOpener();
    setTimeout(typeWriter, 500);
    fadeInFunc("img-fader");
    fadeInFunc("span-fader");
    $("[href^='#']").click(function () {
        id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(id).offset().top - 70
        }, 1000);
        checkIfNavOpen();
        menuIconToggle(document.getElementById("menu-icon"));
    });
});

function menuIconToggle(x) {
    x.classList.toggle("change");
}

function checkIfNavOpen() {

    if (nav_is_open == false) {

        /*document.getElementById("nav").style.transform = "translate(0, 12vh)";*/
        document.getElementById("nav").style.height = "30%";

        nav_is_open = true;

    } else {

        /*document.getElementById("nav").style.transform = "translate(0, -250px)";*/

        document.getElementById("nav").style.height = "0%";
        nav_is_open = false;
    };
}

function navOpener() {

    menu_icon = document.getElementById("menu-icon");
    menu_icon.addEventListener("click", function () {

        checkIfNavOpen();
    });
}

/*alert(document.getElementsByTagName('html')[0].innerHTML);*/


var i = 0;
var txt = "בואו נגרום לו גם להיראות כך";
var speed = 150;
var speedd = 1500;
var forward = true;
/*window.onload = function () {
    setTimeout(typeWriter, 500);
};*/

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

/*console.log($(document).height() / 2);*/

function inView(el) {
    let box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
}

function fadeInFunc(fadingInClass) {
    var x = document.getElementsByClassName(fadingInClass);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains("img-fadein-animation")) {
            true;
        } else if (inView(x[i])) {
            /*x[i].classList.add("apear");*/
            if (x[i].id == "about-img") {
                setTimeout(x[i].classList.add("about-img-fadein-animation"), 300);
            } else if (x[i].tagName != "SPAN") {
                setTimeout(x[i].classList.add("img-fadein-animation"), 300);
            } else {
                setTimeout(x[i].classList.add("span-fadein-animation"), 300);
            };
        };
    };
}

function tiltButtonFunc(tiltingButton) {
    var button = document.getElementById(tiltingButton);
    if (inView(button)) {
        setTimeout(button.classList.add("button-fadein-animation"), 300);
    };
}

window.onload = function () {

    /*
        setTimeout(typeWriter, 500);
        fadeInFunc("img-fader");
        fadeInFunc("span-fader");*/
};

$(window).scroll(function () {
    fadeInFunc("img-fader");
    fadeInFunc("span-fader");
    tiltButtonFunc("form-button");
});

