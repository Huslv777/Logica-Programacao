function calcularMedia(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value

    let media = (parseFloat(nota1)+parseFloat(nota2))/2

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "A média foi de " + media
}
