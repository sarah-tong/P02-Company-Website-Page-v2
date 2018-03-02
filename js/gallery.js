"use strict"
window.onload = function () {

    var tritonMain = document.getElementById("triton-main");
    var triton01 = document.getElementById("triton-01");
    var triton02 = document.getElementById("triton-02");
    var triton03 = document.getElementById("triton-03");
    var triton04 = document.getElementById("triton-04");
    
    triton01.addEventListener("click", function () {
        tritonMain.src = "img/gifs/product2.gif";
    });

    triton02.addEventListener("click", function () {
        tritonMain.src = "img/computer-images/triton_02.png";
    });

    triton03.addEventListener("click", function () {
        tritonMain.src = "img/computer-images/triton_03.png";
    });

    triton04.addEventListener("click", function () {
        tritonMain.src = "img/computer-images/triton_04.png";
    });
};