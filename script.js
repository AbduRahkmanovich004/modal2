'use strict';
let modalBtn3 = document.querySelectorAll(".show-modal")
let modal = document.querySelector(".modal")
let closeModalBtn = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")


const openModal = () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeModal = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
for(let i = 0;modalBtn3.length>i;i++){
    modalBtn3[i].addEventListener("click",openModal)
}
closeModalBtn.addEventListener("click",closeModal)
overlay.addEventListener("click",closeModal)
document.addEventListener("keydown",(even)=>{
    if(even.key==="Escape") closeModal()
})

