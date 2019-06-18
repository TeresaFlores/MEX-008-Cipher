
let numEmpleado= document.getElementById("number");
let palabra= document.getElementById("text");
let boton= document.getElementById("crear");
let mostrar = document.getElementById("mostrar")

boton.addEventListener("click",() => {
  const resultado = window.cipher.encode(numEmpleado.value, palabra.value)
  mostrar.value = resultado
});

let numEmpleado2= document.getElementById("num");
let palabra2= document.getElementById("texto");
let boton2= document.getElementById("verificar");
let mostrar2 = document.getElementById("checar")

boton2.addEventListener("click",() => {
  const resultado = window.cipher.decode(numEmpleado2.value, palabra2.value)
  mostrar2.value = resultado
});

