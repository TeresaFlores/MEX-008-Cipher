

let Navbar = {

    render : async () => {
        let view =  /*html*/`
        <nav class="nav-color"> 
        <div class="nav-wrapper container ">
          <a href="#L" class="brand-logo">Bufete de Abogados</a>
          <ul class="right">
              <li><a id="btn-admo">ADMINISTRADOR</a></li>
              <li><a id="btn-usuario">USUARIO</a></li>
              
          </ul>
        </div>
     </nav>
        `
        return view
    }
    , after_render: async () => {
      const seccCipher= ()=> {
        location.hash = '/administrador'
      } 
      const seccDecipher= ()=> {
        location.hash = '/usuario'
      } 

      const seccHome= ()=> {
        location.hash = '/home'
      } 

      const btnEntrar= document.getElementById('btn-admo')
      btnEntrar.addEventListener('click',seccCipher)

      const btnUsuario= document.getElementById('btn-usuario')
      btnUsuario.addEventListener('click',seccDecipher)

     
  }
}
export default Navbar;
