var player, gravidade = 1;

class Jogador {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tipo = 'jogador';
        this.velocidade = 0;
        this.pontuacao = 0;
        this.vivo = true;
    }

}

function carregarJogador() {
    
    player = new Jogador(50, 50);

    inserir(player);
}

function click() {
    if (player.y == altura - 125 && player.vivo) {
        player.velocidade = -20;
        emitirSom('salto');

    }

}

function atualizarJogador() {

    player.velocidade += gravidade;
    player.y += player.velocidade;
    if (player.y > altura - 125)
        player.y = altura - 125;
    inserir(player);

}

function morre() {
    player.vivo = false;
    
    pausaMusicaTema();
    emitirSom('atingido');
    
    
    pausaCenario();
}

