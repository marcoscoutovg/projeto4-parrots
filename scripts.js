let perguntaNumCartas = prompt("Com quantas cartas quer jogar?");


// pergunta pro usuário com quantas cartas quer jogar
function verificaNumCartas() {

    while (perguntaNumCartas%2 == 1 || perguntaNumCartas < 4 || perguntaNumCartas > 14) {
        perguntaNumCartas = prompt("Com quantas cartas quer jogar?");
    }
}

verificaNumCartas();



let numCartas = []; //array que vai receber as cartas

function comparador() { 
	return Math.random() - 0.5; 
} // função que embaralha as cartas

const gif = ['bobross','bobross','explody','explody','fiesta','fiesta','metal','metal',
'revertit','revertit','triplets','triplets','unicorn'];


// vai adicionar cartas no DOM de forma dinâmica, de acordo com a qtde que o usuário escolheu
function adicionaCartaDOM() {

    const areaJogo = document.querySelector('.area-jogo');

    for (let i = 0; numCartas.length < perguntaNumCartas; i++) {
        let carta = `     
            <div class="carta">
                <div class="frente-carta">
                    <img src="./img/${gif[i]}parrot.gif" alt="gif"/>
                </div>
                <div class="costas-carta">
                    <img src="./img/back.png" alt="img parrot"/>
                </div>
            </div>
        `
        numCartas.push(carta); // adiciona as cartas na array
    }

    numCartas.sort(comparador); //embaralha as cartas

    for (let j = 0; j < numCartas.length; j++) {
        areaJogo.innerHTML += numCartas[j];
    } // adiciona cada elemento dessa array no DOM
}

adicionaCartaDOM();