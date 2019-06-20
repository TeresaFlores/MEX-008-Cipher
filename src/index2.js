let numeroEmpleado= document.getElementById("num");
let frase= document.getElementById("texto");
let button= document.getElementById("decodificar");
let verificar = document.getElementById("verificar");

button.addEventListener("click",() => {
 const resul = window.cipher.decode(numeroEmpleado.value, frase.value); 
  verificar.value = resul
});