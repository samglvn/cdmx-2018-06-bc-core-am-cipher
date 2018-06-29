
let string= document.getElementById("mensajedeentrada");
let offset= document.getElementById("desplazamientoMens");
let buttonEncode = document.getElementById("boton1");
console.log (string,offset);
let buttonDecode = document.getElementById("boton2");
buttonEncode.addEventListener("click", () => {
  document.getElementById("resultando").innerHTML = cipher.encode(string.value,parseInt(offset.value));
});
buttonDecode.addEventListener("click", () => {
  document.getElementById("resultando").innerHTML = cipher.decode(string.value,parseInt(offset.value));
});
