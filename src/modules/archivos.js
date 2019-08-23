let Documents = {

    render : async () => {
        let view =  /*html*/`
            <h1>ESTOS SON LOS ARCHIVOS</h1>
            <button id="btn-cerrarSesion"> SALIR </button>
            
            <img src = "../imagenes/en_construccion.jpg">
        `
        return view
    }
    , after_render: async () => {
        const seccCierreSesion= ()=> {
            location.hash = '/'
          } 
    
          const btnSesion= document.getElementById('btn-cerrarSesion')
          btnSesion.addEventListener('click',seccCierreSesion)  
    }
}
export default Documents;