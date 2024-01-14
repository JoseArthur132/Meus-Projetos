const botao = document.getElementById("botão");
        const nomecor=document.getElementById("nomecor")

        function trocarCores(){
            let fundo=document.getElementById("corpo");
            
            let cores=["red","blue","green","pink","white","gray"];
            
            let coresaleatorias=cores[parseInt(Math.random()*6)];
            
            
            nomecor.innerText=coresaleatorias;
            
            fundo.style.background=coresaleatorias;
            
        }
        botao.addEventListener("click",trocarCores);