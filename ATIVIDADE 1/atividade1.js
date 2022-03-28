const botao = document.getElementById("botaoClique"); /*A constante botão irá obteer o elemento "Botão Clique" atráves da id no HTML*/

botao.addEventListener("click", calcular)/*Está dizendo o que o botão irá fazer, no caso após clicar irá entrar na função calcular*/

function calcular() {
    alert(10 * 4 - 8 + 24 / 8)/*Cria uma alertbox com o resultado da conta*/
    return

}
