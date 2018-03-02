"use strict";

var acc = document.getElementsByClassName("product-info-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};

window.onload = function () {
    var calibreMain = document.getElementById("calibre-main");
    var calibre01 = document.getElementById("calibre-01");
    var calibre02 = document.getElementById("calibre-02");
    var calibre03 = document.getElementById("calibre-03");
    var calibre04 = document.getElementById("calibre-04");

    var tritonMain = document.getElementById("triton-main");
    var triton01 = document.getElementById("triton-01");
    var triton02 = document.getElementById("triton-02");
    var triton03 = document.getElementById("triton-03");
    var triton04 = document.getElementById("triton-04");
    

    calibre01.addEventListener("click", function () {
        calibreMain.src = "img/gifs/product.gif";
    });

    calibre02.addEventListener("click", function () {
        calibreMain.src = "img/computer-images/calibre_02.png";
    });

    calibre03.addEventListener("click", function () {
        calibreMain.src = "img/computer-images/calibre_03.png";
    });

    calibre04.addEventListener("click", function () {
        calibreMain.src = "img/computer-images/calibre_04.png";
    });

    
//    triton01.addEventListener("click", function () {
//        tritonMain.src = "img/gifs/product2.gif";
//    });
//
//    triton02.addEventListener("click", function () {
//        tritonMain.src = "img/computer-images/triton_02.png";
//    });
//
//    triton03.addEventListener("click", function () {
//        tritonMain.src = "img/computer-images/triton_03.png";
//    });
//
//    triton04.addEventListener("click", function () {
//        tritonMain.src = "img/computer-images/triton_04.png";
//    });
};