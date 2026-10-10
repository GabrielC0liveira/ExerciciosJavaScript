let numero = parseInt(prompt("Digite um número inteiro para saber sua tabuada: "));
let contadora = 1;
 
while (contadora < 11) {
  alert(numero + "x" + contadora + "=" + (numero * contadora))
  contadora = contadora + 1
}