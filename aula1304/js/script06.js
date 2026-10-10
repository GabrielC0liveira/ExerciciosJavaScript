
//Script DO WHILE no final mostrar o somatorio dos valores pares de 1 até 500
let contadora = 1
let soma= 0

 do{
  if(contadora % 2 == 0){
   soma += contadora 
 }
 contadora++
}
while (contadora < 501)
  console.log("A soma dos números pares é: " + soma)