const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

function calcular() {
    if (altura.value != '' && peso.value != '') { //se valores diferente de vazio ele ira fazer toda a função//
        const imc = (peso.value / ((altura.value / 100) ** 2)).toFixed(2)
        let classificacao = ''

        //if's e else para definir a classificação de imc//


        if (imc < 18.5) {
            classificacao = "Abaixo do peso"
        } else if (imc < 25) {
            classificacao = "Peso normal"
        } else if (imc < 30) {
            classificacao = "Acima do peso"
        } else if (imc < 35) {
            classificacao = "Obesidade grau I"
        } else if (imc < 40) {
            classificacao = "Obesidade grau II"
        } else if (imc > 40) {
            classificacao = "Obesidade mórbida"
        }
        resultado.innerHTML = `IMC: ${imc} ${classificacao}`
    }
    else {
        resultado.innerHTML = 'Preencha os campos'//senão irá exibir essa mensagem//
    }
}