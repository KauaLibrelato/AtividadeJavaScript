function calcular3() {
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

    window.alert("A média é de: " + media)
}

