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
console.log("Привет");
btn1.addEventListener("click", function() {
    window1.classList.toggle("show");
    window2.classList.remove("show");
    window3.classList.remove("show");
    btn1.classList.toggle("active"); 
    btn2.classList.remove("avtive");
    btn3.classList.remove("active");
});
btn2.addEventListener("click", function() {
    window2.classList.toggle("show");
    window1.classList.remove("show");
    window3.classList.remove("show");
    btn2.classList.toggle("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active"); 
});
btn3.addEventListener("click", function() {
    window3.classList.toggle("show");
    window1.classList.remove("show");
    window2.classList.remove("show");
    btn3.classList.toggle("active");
    btn1.classList.remove("active"); 
    btn2.classList.remove("avtive"); 
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