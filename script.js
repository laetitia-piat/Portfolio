const modal = document.querySelector(".modal-container")

const btn = document.querySelector(".btn-modal")

btn.addEventListener('click', function(){
    console.log("click!");
    modal.style.top = "-100%";
});