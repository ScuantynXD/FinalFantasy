var btn1 = document.querySelector(".modalbtn1");
var btn2 = document.querySelector(".modalbtn2");
var btn3 = document.querySelector(".modalbtn3");
var window1 = document.querySelector(".window1");
var window2 = document.querySelector(".window2");
var window3 = document.querySelector(".window3");
var left = document.querySelector(".slideleft");
var right = document.querySelector(".slideright");
var left2 = document.querySelector(".slideleft2");
var right2 = document.querySelector(".slideright2");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
btn1.addEventListener("click", function() {
    window1.classList.toggle("show");    
});
btn2.addEventListener("click", function() {
    window2.classList.toggle("show");
});
btn3.addEventListener("click", function() {
    window3.classList.toggle("show");
});
left.addEventListener("click", function() {
    slider1.classList.toggle("show");
    slider2.classList.toggle("show");
});
right.addEventListener("click", function() {
    slider1.classList.toggle("show");
    slider2.classList.toggle("show");
});
left2.addEventListener("click", function() {
    slider1.classList.toggle("show");
    slider2.classList.toggle("show");
});
right2.addEventListener("click", function() {
    slider1.classList.toggle("show");
    slider2.classList.toggle("show");
});