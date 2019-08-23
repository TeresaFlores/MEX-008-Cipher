let Cipher = {

    render : async () => {
        let view =  /*html*/`
        <div class= "entrada"> 
          <div class="row">
           <figure class="col l12 center">
              <img src = "../imagenes/administrador2.jpg">
            </figure>  
           </div>
        </div>

        <div class="section container">
        <div class="row">
          <form class="col s12 ">
            <div class="row card-panel center grey lighten-1">
              
              <h4  >SISTEMA DE ARCHIVOS DE FORMULACIÓN DE CLAVES</h4>
                 <h7>Por favor ingrese sus datos</h7>
  
              
              <div class="input-field col s12">
                <input type="text"  maxlength="4" id="number" class="validate" required>
                <label for="number">No. de empleado </label>
              </div>
  
              <div class="input-field col s12">
                <input type="text"  id="text" class="validate" required>
                <label for="tex">Ingresa una palabra </label>
              </div>
  
              <div class="input-field col s12">
              <button class="btn" id="crear">CREAR</button>
              </div>
  
              <div class="input-field col s12">
                <input type="text" id="mostrar" class="validate" required>
                <label for="mostrar">Esta es la clave de acceso </label>
              </div>
              
              <div class="input-field col s12">
              <button class="btn"  id="salir">SALIR</button>
              </div>
            </div>  
          </form>  
      </div>

   </div>
   
        
        

     
        `
        return view
    }
    , after_render: async () => {
        
        
        // let numEmpleado= document.getElementById("number");
        // let palabra= document.getElementById("text");
        // let boton= document.getElementById("crear");
        // let mostrar = document.getElementById("mostrar");

        // boton.addEventListener("click",() => {
        // const resultado = window.cipher.encode(numEmpleado.value, palabra.value);
        // mostrar.value = resultado
        // });

        // console.log(resultado)



    }
}
export default Cipher;
