var lista = []
var qtdNotas = prompt("Digite a quantidade de notas: ")//recebe uantidade de notas//
var somaNotas = 0

for (var i = 1; i <= qtdNotas; i++) {//loop para digitar as notas///
    var nota = parseFloat(prompt("Digite a " + i + " nota:"))
    lista.push(nota)
}

for (var j = 0; j < lista.length; j++) {//verifica a quantidade de itens da lista?
    somaNotas += lista[j] //soma das notas recebidas//
}

var media = parseFloat(somaNotas) / parseFloat(qtdNotas);
window.alert("A média é: " + media)