window.cipher = {

encode:(string, offset) => {
  let mensaje2 = " ";
    	for(i = 0; i<string.length; i++){
        let mensaje1 = string.charCodeAt(i)//agregar un if para el espacio
          if(mensaje1 >=97 && mensaje1<=122) {
            mensaje2 += String.fromCharCode((mensaje1 -97 + offset) %26+97);
            //console.log (mensaje2[i]);
            console.log (mensaje2)

        } else if (mensaje1 >=65 && mensaje1 <= 90) {
        //console.log(mensaje1[i]);
        mensaje2+= String.fromCharCode((mensaje1 -65 + offset)%26 + 65);
          //el mensaje se convierte a ascii numeros
    			console.log(mensaje2);
     } else if (mensaje1 >=32 && mensaje1<=64 || mensaje1 >=91 && mensaje1 <=96 || mensaje1>=123 && mensaje1<=126){
       mensaje2 += String.fromCharCode(mensaje1);    // se manda a llamar a resultado y se le concatena el mensaje ya convertido a letra
     }
   }
   return mensaje2;
 },
 decode: (string, offset) => {
  let mensaje2 = " ";
    	for(i = 0; i<string.length; i++){
        let mensaje1 = string.charCodeAt(i)
       if(mensaje1 >= 97 && mensaje1 <=122) {
        mensaje2 += String.fromCharCode((mensaje1 -122 - offset) %26 + 122);
        //console.log (mensaje2[i]);
        // se manda a llamar a resultado y se le concatena el mensaje ya convertido a letra
        console.log (mensaje2);
      }else if (mensaje1 >=65 && mensaje1 <= 90) {
    			//console.log(mensaje1[i]);
    			mensaje2+= String.fromCharCode((mensaje1 -90 - offset) %26 + 90);
          //el mensaje se convierte a ascii numeros
    			console.log(mensaje2);
                //agregar un if para el espacio y caracteres especiales
     } else if (mensaje1 >=32 && mensaje1 <=64 || mensaje1 >= 91 && mensaje1 <= 96 || mensaje1>=123 && mensaje1<= 126){
       mensaje2 += String.fromCharCode(mensaje1);
     }
   }
   return mensaje2;
  }
};
