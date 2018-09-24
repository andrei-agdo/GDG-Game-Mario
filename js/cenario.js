var altura = 600, largura = 600;

function definePontuacao(pontuacao) {
    document.getElementById("pontuacao").innerHTML = pontuacao;
}

function iniciaCenario() {
    document.getElementById('iniciar').style['display'] = 'none';
    document.getElementById('tela').style['animation-play-state'] = 'running';

}

function pausaCenario() {
    
    document.getElementById('tela').style['animation-play-state'] = 'paused';

    setTimeout(() => {
        document.getElementById('iniciar').style['display'] = 'block';
    }, 3000);
}