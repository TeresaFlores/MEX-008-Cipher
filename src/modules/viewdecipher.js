let Decipher = {

    render : async () => {
        let view =  /*html*/`
        <center>
        <div id="root">
           
    
            <div class= "entrada"> 
              <div class="row">
                   <figure class="col l12 center">
                       <img src = "../imagenes/usuario.jpg">
                    </figure> 
                </div>
            </div>
                <div class="section container">
                <div class="row">
                  <form class="col s12 ">
                    <div class="row card-panel center grey lighten-1">
                      
                      <h4>SISTEMA DE ARCHIVOS DE INGRESO</h4>
                         <h7>Por favor ingrese sus datos</h7>
          
                      
                      <div class="input-field col s12">
                         <input type="text"  maxlength="4" id="num" class="validate" required>
                         <label for="num">Ingrese su numero de empleado </label>
                      </div>
          
                      <div class="input-field col s12">
                        <input type="text"  id="texto" class="validate" required>
                        <label for="texto">Coloque su palabra de ingreso </label>
                      </div>
          
                      <div class="input-field col s12">
                      <button class="btn" id="decodificar">VERIFICAR</button>
                      </div>
          
                      <div class="input-field col s12">
                        <input type="text"  id="verificar" class="validate" required>
                        <label for="verificar">Esta es la clave de acceso </label>
                      </div>
                      
                      <div class="input-field col s12">
                      <button class="btn"  id="btn-doc">Entrar</button>
                      </div>
                    </div>  
                  </form>  
              </div>
        
           </div>
    
         
        
        `
        return view
    }
    , after_render: async () => {

        const seccDoc= ()=> {
            location.hash = '/documentos'
          } 
    
          const btnDoc= document.getElementById('btn-doc')
          btnDoc.addEventListener('click',seccDoc)  
    }
}
export default Decipher;