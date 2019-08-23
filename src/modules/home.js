let Home = {

    render : async () => {
        let view =  /*html*/`
        <li class="imagen-abogado">
        <img src="../imagenes/slider1.jpg" alt="abogado" >  
      </li>



        <main class="container section">
        <div class="row">
        <div class="col s12">
            <div class="slider">
            <ul class="slides">
            <li>
              <img src="../imagenes/slider1.jpg" alt="abogado" >  
              <div class="caption center-align">
                <h3>ABOGADO PENALISTA</h3>
                <h5 class="light">Te acompañamos en todo el proceso</h5>
              </div>
            </li>
            <li>
              <img src="../imagenes/slider8.jpg" alt="abogados" >  
              <div class="caption center-align">
                <h3>ABOGADOS FAMILIARES</h3>
                <h5 class="light">Servios de abogados familiares </h5>
              </div>
            </li>
            <li>
              <img src="../imagenes/slider6.jpg" alt="abogados" >  
              <div class="caption center-align">
                <h3>AUDITORES</h3>
                <h5 class="light">Servicio de auditoria personalizado</h5>
              </div>
            </li>
          </ul>
            </div>
        </div>
        </div>
        </main>
     
        `
        return view
    }
    , after_render: async () => {
        
    }
}
export default Home;