const decrase=document.getElementById("Decrease");
        const reset=document.getElementById("reset");
        const increase=document.getElementById("increase");
        let valor=document.getElementById("numero")
        let numero=document.getElementById("numero")
        
        numero.innerHTML=0;


        function incrementar(){
            numero.innerHTML++;
        }
        increase.addEventListener("click",incrementar)

        function decrementar(){
            numero.innerHTML--;
        }
        decrase.addEventListener("click",decrementar)

        function resetar(){
            numero.innerHTML=0;
        }
        reset.addEventListener("click",resetar)