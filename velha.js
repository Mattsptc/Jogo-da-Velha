var  jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
mudarJogador(valor = 'x');
var quadrados = document.getElementsByClassName('quadrado')

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000'
    if (jogador === 'x') {
        jogador = 'o'
    } else {
        jogador = 'x'
    }

    mudarJogador(jogador)
    checaVencedor()
}

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1)
    var quadrado2 = document.getElementById(2)
    var quadrado3 = document.getElementById(3)
    var quadrado4 = document.getElementById(4)
    var quadrado5 = document.getElementById(5)
    var quadrado6 = document.getElementById(6)
    var quadrado7 = document.getElementById(7)
    var quadrado8 = document.getElementById(8)
    var quadrado9 = document.getElementById(9)
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return;
        
    }
     if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return;
}
     if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return;
}

     if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado7)
        return;
}

 if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
    mudarVencedor(quadrado2)
    return;
}
 if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
    mudarVencedor(quadrado3);
    return;
}
if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado9);
    return;
}
if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
    mudarVencedor(quadrado3);

}
}
function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor

}
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}
function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eIgual = false

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML) {
        eIgual = true
    }
    return eIgual
}

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i)
        quadrado.style.background = '#808080'
        quadrado.style.color = '#808080'
        quadrado.innerHTML = '-';
    }

    mudarJogador(valor = 'x')
} 

function changeMode() {
	changeClasses();
	changeText();
}
function changeClasses() {
	button2.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}
function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button2.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button2.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode'
const button2 = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button2.addEventListener('click', changeMode);