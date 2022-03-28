const botao = document.getElementById("botaoClique");

botao.addEventListener("click", notas);

function notas() {

    var valor = document.querySelector(".valor").value;

    var cem = parseInt(valor / 100);
    var resto = valor % 100;

    var cinquenta = parseInt(resto / 50);
    var resto = resto % 50;

    var vinte = parseInt(resto / 20);
    var resto = resto % 20;

    var dez = parseInt(resto / 10);
    var resto = resto % 10;

    alert("Notas de cem: " + cem + " Notas de cinquenta: " + cinquenta + " Notas de vinte: " + vinte + " Notas de dez: " + dez);

}