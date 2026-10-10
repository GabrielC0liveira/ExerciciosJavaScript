//exercicio24 faccat

var macas = parseInt(prompt("Digite o número de maças compradas: "));


if(macas < 12){
    var valorTotal = macas * 1.3
    alert("O valor total a ser pago é de : R$" + valorTotal.toFixed(2))
} 
else{
    alert("O valor total a ser pago é de : R$" + macas.toFixed(2))
}



