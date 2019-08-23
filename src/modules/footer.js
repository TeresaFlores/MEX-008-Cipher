let Footer = {

    render : async () => {
        let view =  /*html*/`

        <footer class="page-footer azul-gris">
          <div class="container azul-gris">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Bufete de Abogados. S.A. DE C.V</h5>
                <p class="grey-text text-lighten-4">Bufete de abogados profesionales especializados en distintas áreas del derecho.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Conocenos</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Penal</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Laboral</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Familiar</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Civil</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Labo Mex-008
            <a class="grey-text text-lighten-4 right" href="#!">Cipher</a>
            </div>
          </div>
        </footer>
     
        
    
        `
        return view
    }
    , after_render: async () => {}
}
export default Footer;