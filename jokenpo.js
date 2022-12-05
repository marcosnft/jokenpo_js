var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {
    let vencedor = document.querySelector('.vencedor');

    if (playerOpt == "papel") {
        if (inimigoOpt == "papel") {
            //Empate
            vencedor.innerHTML = "O jogo foi empatado!";

        } else if (inimigoOpt == "tesoura") {
            //Inimigo Ganhou
            vencedor.innerHTML = "O Inimigo ganhou!";

        } else if (inimigoOpt == "pedra") {
            //Player Ganhou
            vencedor.innerHTML = "O Player ganhou!";

        }
    }

    if (playerOpt == "tesoura") {
        if (inimigoOpt == "tesoura") {
            //Empate
            vencedor.innerHTML = "O jogo foi empatado!";

        } else if (inimigoOpt == "pedra") {
            //Inimigo Ganhou
            vencedor.innerHTML = "O Inimigo ganhou!";

        } else if (inimigoOpt == "papel") {
            //Player Ganhou
            vencedor.innerHTML = "O Player ganhou!";

        }
    }

    if (playerOpt == "pedra") {
        if (inimigoOpt == "pedra") {
            //Empate
            vencedor.innerHTML = "O jogo foi empatado!";

        } else if (inimigoOpt == "papel") {
            //Inimigo Ganhou
            vencedor.innerHTML = "O Inimigo ganhou!";

        } else if (inimigoOpt == "tesoura") {
            //Player Ganhou
            vencedor.innerHTML = "O Player ganhou!";

        }
    }

}

function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for (var i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].style.opacity = 0.3;
    }
}



function inimigoJogar() {
    let rand = Math.floor(Math.random() * 3); //Gera um numero aleatório entre 0 e 3 e arredonda (math.floor)
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    resetInimigo();
    for (var i = 0; i < enemyOptions.length; i++) {
        if (i == rand) {
            enemyOptions[i].style.opacity = 1;
            inimigoOpt = enemyOptions[i].getAttribute('opt');
        }
    }

    validarVitoria();


}

function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }

}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (t) => {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        inimigoJogar();

    })
}