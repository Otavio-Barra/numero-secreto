let numerosSorteados = [];
let numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "escolha um numero entre 1 e 10");
};

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value
  if (chute == numeroAleatorio) {
    exibirTextoNaTela("h1", "acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : " tentativa";
    let mensagemTentativas = `vc descobriu o numero secreto, voce acertou com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute('disabled')
  } else {
    if (chute > numeroAleatorio) {
      exibirTextoNaTela("p", "o numero secreto e menor");
    } else {
      exibirTextoNaTela("p", "o numero secreto e maior");
    }
    tentativas++;
    limparCampo();
  }
};

function gerarNumeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);

  if (numerosSorteados.length == numeroMaximo) {
    numerosSorteados = [];
  };

  if (numerosSorteados.includes(numeroSorteado)) {
    gerarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroSorteado);
    return numeroSorteado;
  };
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = "";
};

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
};