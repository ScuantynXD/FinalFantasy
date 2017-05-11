var btn1 = document.querySelector(".modalbtn1");
var btn2 = document.querySelector(".modalbtn2");
var btn3 = document.querySelector(".modalbtn3");
var prev1 = document.querySelector(".prevent1")
var prev2 = document.querySelector(".prevent2")
var prev3 = document.querySelector(".prevent3")
var window1 = document.querySelector(".window1");
var window2 = document.querySelector(".window2");
var window3 = document.querySelector(".window3");
console.log("Привет");
prev1.addEventListener("click", function(event) {
    event.preventDefault();
});
prev2.addEventListener("click", function(event) {
    event.preventDefault();
});
prev3.addEventListener("click", function(event) {
    event.preventDefault();
});
btn1.addEventListener("click", function() {
    window1.classList.toggle("show");    
});
btn2.addEventListener("click", function() {
    window2.classList.toggle("show");
});
btn3.addEventListener("click", function() {
    window3.classList.toggle("show");
});