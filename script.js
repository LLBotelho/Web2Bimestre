function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
function fimCadastro(){
}
function validarCadastro() {
  event.stopPropagation();
  let a = document.getElementById("nome").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("telefone").value;
  let d = document.getElementById("endereco").value;
  let e = document.getElementById("criarsenha").value;
  let f = document.getElementById("confirmarsenha").value;
  
  let text;
  
  if (a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0 && e.length > 0 && f.length > 0) {
    text = "Você está Cadastrado!";
  } else {
    text = "Erro! Preencha todos os campos!";
  }
  document.getElementById("confirmacao").innerHTML = text;
}

function validarLogin(){
  event.stopPropagation();
  let a = document.getElementById("email").value;
  let b = document.getElementById("senha").value;

  let text;
  
  if (a.length > 0 && b.length > 0) {
    text = "Bem vindo!";
  } else {
    text = "Erro! Senha ou E-mail inválido";
  }
  document.getElementById("login").innerHTML = text;
  
}