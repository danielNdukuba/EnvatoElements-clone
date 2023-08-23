
let select = document.getElementById("select");
let list = document.getElementById("nav-list");
let options = document.getElementsByClassName("options");
let selectText = document.getElementById("selectText");
let modalBtn = document.getElementById("modal-btn");
let modal = document.getElementById("modal");
let close = document.getElementById("close-modal");
let body = document.getElementById("body");

select.onclick = function() {
    list.classList.toggle("open")
}
for( option of options){
        option.onclick = function() {
        selectText.innerHTML =this.innerHTML;
        inputfield.placeholder = "Search in "+selectText.innerHTML;
        }
    }

    modalBtn.onclick = () => {
        modal.style.display = "block";
        body.style.overflowY = "hidden";
    }
    close.onclick = function(){
        modal.style.display ="none";
        body.style.overflowY = "scroll";
    }