console.log("algumacoisa");

let visor = document.getElementById('visor');
let expressao = '';

function adicionarCaracter(caracter) {
    expressao += caracter;
    visor.value = expressao;
}

function limparVisor() {
    expressao = '';
    visor.value = '';
}

function calcularResultado() {
    try {
        expressao = eval(expressao);
        visor.value = expressao;
    } catch (error) {
        visor.value = 'Erro';
    }
}