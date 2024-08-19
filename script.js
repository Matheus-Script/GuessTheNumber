let numeroMisterioso = Math.floor(Math.random() * 100 + 1);

const palpites = document.querySelector(".palpites");
const ultimoResultado = document.querySelector(".ultimoResultado");
const menorMaior = document.querySelector(".menorMaior");

const envioPalpite = document.querySelector(".envioPalpite");
const campoPalpite = document.querySelector(".campoPalpite");

let contadorPalpites = 1;
let botaoReiniciar;

envioPalpite.addEventListener('click', checarPalpite);
campoPalpite.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        checarPalpite();
    }
})

function checarPalpite(){
    const palpiteJogador = Number(campoPalpite.value);
    if (contadorPalpites === 1){
        palpites.textContent = "Palpites Anteriores: ";
    }
    palpites.textContent = `${palpites.textContent} ${palpiteJogador}`;

    if (palpiteJogador === numeroMisterioso){
        ultimoResultado.textContent = `Parabéns! Você acertou o número misterioso (${numeroMisterioso})!`;
        ultimoResultado.style.backgroundColor = "green";
        ultimoResultado.style.width = "380px";
        ultimoResultado.style.color = "black";
        ultimoResultado.style.fontWeight = "bold";
        menorMaior.textContent = "";
        fimJogo();
    }

    else if (contadorPalpites === 10){
        ultimoResultado.textContent = `GAME OVER! O número misterioso era: ${numeroMisterioso}!`
        menorMaior.textContent = "";
        fimJogo();
    }

    else {
        ultimoResultado.textContent = "Número errado!";
        ultimoResultado.style.backgroundColor = "red";
        ultimoResultado.style.width = "120px";
        ultimoResultado.style.color = "black";
        ultimoResultado.style.fontWeight = "bold";
        if (palpiteJogador > numeroMisterioso){
            menorMaior.textContent = "O número misterioso é menor que esse...";
        }
        else if (palpiteJogador < numeroMisterioso){
            menorMaior.textContent = "O número misterioso é maior que esse!";
        }
    }

    if (palpiteJogador > 100 || palpiteJogador < 1){
        ultimoResultado.textContent = "Número Inválido! Escolha um valor entre 1 e 100!";
        ultimoResultado.style.backgroundColor = "yellow";
        ultimoResultado.style.width = "370px";
        ultimoResultado.style.color = "black";
        ultimoResultado.style.fontWeight = "bold";
        menorMaior.textContent = "";
    }

    contadorPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();

}

function fimJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Novo Jogo";
    document.body.append(botaoReiniciar)
    botaoReiniciar.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo(){
   contadorPalpites = 1;

   const reiniciarResultados = document.querySelectorAll(".resultado p")
   for (const reiniciarResultado of reiniciarResultados){
    reiniciarResultado.textContent = "";
   }

   botaoReiniciar.parentNode.removeChild(botaoReiniciar);
   campoPalpite.disabled = false;
   envioPalpite.disabled = false;
   campoPalpite.value = "";
   campoPalpite.focus();

   ultimoResultado.style.backgroundColor = "black";

   numeroMisterioso = Math.floor(Math.random() * 100) + 1;
}
