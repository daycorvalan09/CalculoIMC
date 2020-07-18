function calcularIMC() {
    var peso
    var altura
    var resultadoIMC
    var comentario

    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value

    if (altura !== "" && peso !== "") {
        altura = parseInt(altura) / 100
        resultadoIMC = peso / Math.pow(altura, 2)
        document.getElementById("imc").innerHTML = resultadoIMC.toFixed(2)
    }

    if (resultadoIMC <= 18.5) {
        comentario = "Teu IMC é " + resultadoIMC.toFixed(2) + " - Magreza";

    } else if (resultadoIMC > 18.5 && resultadoIMC <= 24.9) {
        comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Normal";

    } else if (resultadoIMC > 25 && resultadoIMC <= 29.9) {
        comentario = "Teu IMC é " + resultadoIMC.toFixed(2) + " - Sobre Peso";

    } else if (resultadoIMC > 30 && resultadoIMC <= 39.9) {
        comentario = "Teu IMC é " + resultadoIMC.toFixed(2) + " - Obesidade";


    } else if (resultadoIMC > 40) {
        comentario = "Teu IMC é " + resultadoIMC.toFixed(2) + " - Obesidade Grave";
    }

    document.getElementById("comentario").innerHTML = comentario

}

function limparInput() {
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("imc").innerHTML = ""
    document.getElementById("comentario").innerHTML = ""

}