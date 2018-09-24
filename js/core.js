function main() {


    definePontuacao('0');

    iniciaMusicaTema();

    iniciaCenario();

    carregarElementos();

    document.addEventListener("mousedown", click);

    document.addEventListener("keydown", function(e) {
        if(e.keyCode == 32 || e.keyCode==38)
        {
            if(player.vivo) click();
            else main();
        }
      });

    loop();

}



function inserir(elemento) {

    if (elemento.tipo == 'jogador') {

        var img = document.getElementById("mario");
        ctx.drawImage(img, elemento.x, elemento.y);

    }
    if (elemento.tipo == 'inimigo') {

        var img = document.getElementById("inimigo-" + elemento.nivel);
        ctx.drawImage(img, elemento.x, elemento.y);
    }
}

function loop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    atualizarInimigos();

    atualizarJogador();


    if (player.vivo)
        window.requestAnimationFrame(loop);

}

function carregarElementos() {

    carregarJogador();

    carregarInimigos();

}


