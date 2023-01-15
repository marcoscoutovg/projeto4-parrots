let perguntaNumCartas = prompt("Com quantas cartas quer jogar?");

function verificaNumCartas() {

    while (perguntaNumCartas%2 == 1 || perguntaNumCartas < 4 || perguntaNumCartas > 14) {
        perguntaNumCartas = prompt("Com quantas cartas quer jogar?");
    }
}

verificaNumCartas();


//criar uma array pra colocar as cartas
// trazer a lista do html pro js
// alterar de acordo com o numero de cartas
// embaralhar as cartas
// mandar elas de volta pro html


let numCartas = [];

function comparador() { 
	return Math.random() - 0.5; 
}

const gif = ['bobross','bobross','explody','explody','fiesta','fiesta','metal','metal',
'revertit','revertit', 'triplets','triplets', 'unicorn', 'unicorn'];

function adicionaCartaDOM() {

    const areaJogo = document.querySelector('.area-jogo');

    for (let i = 0; numCartas.length < perguntaNumCartas; i++) {
        let carta = `     
            <div class="carta">
                <div class="frente-carta">
                </div>
                <div class="costas-carta">
                    <img src="./img/back.png" alt="img parrot"/>
                </div>
            </div>
        `
        numCartas.push(carta);
    }

    numCartas.sort(comparador);

    for (let j = 0; j < numCartas.length; j++) {
        areaJogo.innerHTML += numCartas[j];
    }
}

adicionaCartaDOM();

console.log(numCartas);