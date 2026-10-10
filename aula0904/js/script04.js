alert("MM - Madeira Molhada")
alert("Exemplo IF")

var nota1 = parseFloat(prompt("Digite o valor de sua primeira nota"));
var nota2 = parseFloat(prompt("Digite o valor de sua segunda nota"));
var nota3 = parseFloat(prompt("Digite o valor de sua terceira nota"));
var nota4 = parseFloat(prompt("Digite o valor de sua quarta nota"));

var media = (nota1 + nota2 + nota3 + nota4) / 4


if (media >= 5) {
    alert("Sua media das provas foi de " +media+ ". Você foi aprovado!")
}
else {
    alert("Sua media das provas foi de " +media+ ". Você não foi aprovado!")
}





