const menu = document.querySelector("#button");
const lista = document.querySelector("#links");

function mostrarBarra(){
    if(lista.style.display == "none"){
        lista.style.display = "block"
    }else{
        lista.style.display = "none"
    }
}

addEventListener("click",mostrarBarra)