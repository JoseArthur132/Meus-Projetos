let tempom = document.querySelector("#minutos");

let tempos = document.querySelector("#segundos");

const contar = document.querySelector("#começar");

const zerar = document.querySelector("#zerar");


let segundos = 0;

let minutos = 0;

let tempo;


function comecarContagem (){
    if(segundos > 0){clearTimeout(tempo)}
    segundos = 0;
    if(segundos == 0){
    tempo = setInterval(() => {
        
       segundos++;
       
       tempos.innerHTML = segundos;
       
       tempom.innerHTML = minutos;

       if(segundos == 60){
            segundos = 0;
            minutos += 1;
       } 
    }, 1000);
}
}

function zerarNum(){

    clearInterval(tempo);
    
}



contar.addEventListener("click",comecarContagem);

zerar.addEventListener("click",zerarNum);