window.cipher = {
    encode:(num,tex)=>{
      num = parseInt(num);
      let code= '';
      for (let i= 0; i < tex.length; i++){
        let letter= tex.charCodeAt(i)
    
         const newASCII =(letter-65+num)%26+65;
    
         const newTex=(String.fromCharCode(newASCII))
         code= code + newTex
      } 
        //  console.log(code)
        return code;
    },
      // cepher(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase());


    decode: (numero,texto)=>{
      numero= parseInt(numero);
  let code1= '';
  for (let i= 0; i < texto.length; i++){
    let letter1= texto.charCodeAt(i)


     const newASCII2 =(letter1+65-numero)%26+65;
         
     const newTexto=(String.fromCharCode(newASCII2));
     code1= code1 + newTexto
}
return code1;
    }
  }