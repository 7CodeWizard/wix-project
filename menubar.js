var hum = document.getElementById("icon");
var nav = document.querySelector(".links ");
var list = document.querySelectorAll("li");
hum.addEventListener("click",()=>{
  nav.classList.toggle("active");
  
  hum.classList.toggle("fa-times");
})
list.forEach((list) => {
  list.addEventListener("click", () => {
    nav.classList.remove("active");
    hum.classList.remove("fa-times");
  });
});