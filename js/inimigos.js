
var inimigos, velocidade;

var inimigoModelo = function (x, y) {
	this.x = x;
	this.y = y;
	this.nivel = 3;
	this.tipo = 'inimigo';
}

function carregarInimigos() {

	velocidade = 2;

	inimigos =
		[
			new inimigoModelo(600, altura - 91 - 75),
			new inimigoModelo(1100, altura - 91 - 75)
		]

	for (var i = 0; i < inimigos.length; i++) {
		inserir(inimigos[i]);
	}
}

function atualizarInimigos() {

	velocidade += 0.003;

	for (var i = 0; i < inimigos.length; i++) {
		inimigos[i].x = inimigos[i].x - Math.abs(velocidade * 2);

		if (inimigos[i].x < -20) {

			inimigos[i].x = largura + velocidade * 70;

			inimigos[i].nivel = parseInt(Math.random() * 5) + 1;

			switch (inimigos[i].nivel) {
				case 1: inimigos[i].y = altura - 75 - 31; break;
				case 2: inimigos[i].y = altura - 75 - 61; break;
				case 3: inimigos[i].y = altura - 75 - 91; break;
				case 4: inimigos[i].y = altura - 75 - 122; break;
				case 5: inimigos[i].y = altura - 75 - 150; break;
			}

			player.pontuacao++;
			definePontuacao(player.pontuacao);

		}


		var estaY = (inimigos[i].y < player.y + 45);

		var estaX = (inimigos[i].x < player.x + 30) && (inimigos[i].x + 15 > player.x);

		if (estaY && estaX)
			morre();


		inserir(inimigos[i]);
	}

}