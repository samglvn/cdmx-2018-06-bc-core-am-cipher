
let string= document.getElementById("mensajedeentrada");
let offset= document.getElementById("desplazamientoMens");
let buttonEncode = document.getElementById("boton1");
console.log (string,offset);
let buttonDecode = document.getElementById("boton2");
buttonEncode.addEventListener("click", () => {
  document.getElementById("resultando").innerHTML = window.cipher.encode(string.value,parseInt(offset.value));
});
buttonDecode.addEventListener("click", () => {
  document.getElementById("resultando").innerHTML = window.cipher.decode(string.value,parseInt(offset.value));
});


// variable para que se muestre el resultado de encode y decode en el html

/*button.addEventListener("click", evento =>{
  window.cipher.encode(
    offset.value,
    string.value
  )
});*/
/*const datos = () =>{

  let result = cipher.encode (offset,string);
   document.getElementById("resultado").innerHTML= result;
}
const datos2 = ()=>{
  let result = cipher.decode (offset,string);
   document.getElementById("resultado").innerHTML= result;
}*/
