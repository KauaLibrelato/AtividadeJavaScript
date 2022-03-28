var vetor = [1, 2, 2, 4, 5];

document.write('Meu vetor: <br/>');//imprime a variavel vetor, a qual pode ser mudada os valores pelo código//

for (var i = 0; i < vetor.length; i++) {
    document.write(vetor[i] + "<br/>");
}
//
document.write("<hr/>"); //linha divisória//

document.write("Valores Repetidos: <br/>");//imprime os valores repetidos

for (var j = 0; j < vetor.length; j++) {
    for (var l = j + 1; l < vetor.length; l++) {//comparações de tamanho de vetor, para verificação se há ou não valores repetidos//
        if (vetor[j] == vetor[l]) {
            document.write(vetor[l] + "<br/>");
        }
    }
}