const botao = document.getElementById("botaoClique");

botao.addEventListener("click", trocar)

var a = 3;
var b = 5;

var a = parseInt(a) + parseInt(b)
var b = parseInt(a) - parseInt(b)

var a = parseInt(a) - parseInt(b)

function trocar() {
    alert("A = " + a + " B = " + b);
    return
}