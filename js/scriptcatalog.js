var sorttext2 = document.querySelector(".sortingtext2");
var sorttext3 = document.querySelector(".sortingtext3");
var sorttext4 = document.querySelector(".sortingtext4");
var sortup = document.querySelector(".sortup");
var sortdown = document.querySelector(".sortdown");
var cataloglist1 = document.querySelector(".cataloglistbtn1");
var cataloglist2 = document.querySelector(".cataloglistbtn2");
var cataloglist3 = document.querySelector(".cataloglistbtn3");
var cataloglist4 = document.querySelector(".cataloglistbtn4");
console.log("Привет");
sorttext2.addEventListener("click", function() {
    sorttext2.classList.toggle("active");
    sorttext3.classList.remove("active");
    sorttext4.classList.remove("active");    
});
sorttext3.addEventListener("click", function() {
    sorttext3.classList.toggle("active");
    sorttext2.classList.remove("active");
    sorttext4.classList.remove("active");    
});
sorttext4.addEventListener("click", function() {
    sorttext4.classList.toggle("active");
    sorttext2.classList.remove("active");
    sorttext3.classList.remove("active");    
});
sortup.addEventListener("click", function() {
    sortup.classList.toggle("active");
    sortdown.classList.remove("active");        
});
sortdown.addEventListener("click", function() {
    sortdown.classList.toggle("active");
    sortup.classList.remove("active");        
});
cataloglist1.addEventListener("click", function() {
    cataloglist1.classList.toggle("active");
    cataloglist2.classList.remove("active");
    cataloglist3.classList.remove("active");
    cataloglist4.classList.remove("active");            
});
cataloglist2.addEventListener("click", function() {
    cataloglist2.classList.toggle("active");
    cataloglist1.classList.remove("active");
    cataloglist3.classList.remove("active");
    cataloglist4.classList.remove("active");            
});
cataloglist3.addEventListener("click", function() {
    cataloglist3.classList.toggle("active");
    cataloglist1.classList.remove("active");
    cataloglist2.classList.remove("active");
    cataloglist4.classList.remove("active");            
});
cataloglist4.addEventListener("click", function() {
    cataloglist4.classList.toggle("active");
    cataloglist1.classList.remove("active");
    cataloglist2.classList.remove("active");
    cataloglist3.classList.remove("active");            
});