const modal = document.querySelector(".modal-container")
const btn = document.querySelector(".btn-modal")
const main = document.querySelector("#main")


btn.addEventListener('click', function(){
    console.log("click!");
    modal.style.top = "-100%";
    modal.style.width = "0%";
    main.style.display = "block"

});