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
'revertit','revertit','triplets','triplets','unicorn','unicorn'];


// vai adicionar cartas no DOM de forma dinâmica, de acordo com a qtde que o usuário escolheu
function adicionaCartaDOM() {

    const areaJogo = document.querySelector('.area-jogo');

    for (let i = 0; numCartas.length < perguntaNumCartas; i++) {
        let carta = `     
            <div data-test="card" onclick="virarCarta(this); efeitoVirar(this)" class="carta">
                <div class="frente virada">
                    <img data-test="face-up-image" src="./img/${gif[i]}parrot.gif" alt="gif"/>
                </div>
                <div class="costas">
                    <img data-test="face-down-image" src="./img/back.png" alt="img parrot"/>
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

let contador = 0; //qtde de cartas clicadas 

let cartaAnterior; //recebe a primeira carta do par

let cartaAtual; //recebe a segunda carta do par

let totalCartas = 0; //total de cartas viradas

let quantosCliques = 0; //quantidade de jogadas

function verifica() {
   if (cartaAnterior.innerHTML === cartaAtual.innerHTML){
        contador = 0;
        cartaAnterior = undefined;
        cartaAtual = undefined;
        totalCartas += 2;
        
        if (totalCartas == perguntaNumCartas){
            alert(`Você ganhou em ${quantosCliques} jogadas!`);
        }
   } else {
    cartaAnterior.querySelector('.frente').classList.add('virada');
    cartaAnterior.querySelector('.costas').classList.remove('virada');
    cartaAtual.querySelector('.frente').classList.add('virada');
    cartaAtual.querySelector('.costas').classList.remove('virada');
    contador = 0;
    cartaAnterior = undefined;
    cartaAtual = undefined;
   }
}

function virarCarta(cartaSelecionada) {

    const frenteCarta = cartaSelecionada.querySelector('.frente');
    const costaCarta = cartaSelecionada.querySelector('.costas');

    if (frenteCarta.classList.contains('virada')) {
        contador++;
    }

    if (cartaAnterior === undefined) {
        cartaAnterior = cartaSelecionada;
        frenteCarta.classList.remove('virada');
        costaCarta.classList.add('virada');
        quantosCliques++;
    } 

    if (cartaAnterior !== undefined && contador === 2) {
        cartaAtual = cartaSelecionada;
        frenteCarta.classList.remove('virada');
        costaCarta.classList.add('virada');
        setTimeout(verifica, 1000);
        quantosCliques++;
    }    
}

function efeitoVirar(clique){
    clique.style.transition = "all .5s linear";
    clique.style.transform = "rotateY(180deg)";
    clique.querySelector('.costas').style.transform = "rotateY(180deg)";
}
