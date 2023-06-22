var nome = prompt("Qual é o seu nome?");

function colocaNome() {
  document.getElementById('usuario').innerHTML = nome;
}

colocaNome();

function verificaResposta1() {

  var respostaCorreta = "princesas2";

  var respostas = document.getElementsByName("princesas");
  var respostaSelecionada = "";

  for (var i = 0; i < respostas.length; i++) {
    if (respostas[i].checked) {
      respostaSelecionada = respostas[i].value;
      break;
    }
  }

  if (respostaSelecionada === respostaCorreta) {
    alert("Resposta Correta!");

  } else {
    alert("Resposta Errada!");
  }
}


function verificaResposta2() {

  var respostaCorreta = "anoes1";

  var respostas = document.getElementsByName("anoes");
  var respostaSelecionada = "";

  for (var i = 0; i < respostas.length; i++) {
    if (respostas[i].checked) {
      respostaSelecionada = respostas[i].value;
      break;
    }
  }

  if (respostaSelecionada === respostaCorreta) {
    alert("Resposta Correta!");

  } else {
    alert("Resposta Errada!");
  }
}

function verificaResposta3() {

  var respostaCorreta = "sapatinho3";

  var respostas = document.getElementsByName("sapatinho");
  var respostaSelecionada = "";

  for (var i = 0; i < respostas.length; i++) {
    if (respostas[i].checked) {
      respostaSelecionada = respostas[i].value;
      break;
    }
  }

  if (respostaSelecionada === respostaCorreta) {
    alert("Resposta Correta!");

  } else {
    alert("Resposta Errada!");
  }
}




