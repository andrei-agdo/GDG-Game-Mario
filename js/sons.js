function iniciaMusicaTema() {
    document.getElementById('musica').play();
}

function pausaMusicaTema() {
    document.getElementById('musica').pause();
}

function emitirSom(som) {
    if (som == 'salto')
        new Audio('sound/jump.mp3').play();
    else if (som == 'atingido')
        new Audio('sound/mario-morre.wav').play();
}