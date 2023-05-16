let menyu =document.querySelector(".menyu")
let nav =document.querySelector("nav")

menyu.addEventListener("click",function(){
    nav.classList.toggle("active")
})
nav.addEventListener("click",function(){
    nav.classList.toggle("active")
})