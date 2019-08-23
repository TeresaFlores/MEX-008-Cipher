let Login = {

    render : async () => {
        let view =  /*html*/`
        </div>
        <div class="contenido">    
              <h1 >Coloque su clave de acceso</h1>
            
            <p> Usuario   <input type="text" placeholder="Escriba su usuario"></p>  
            <p>Contraseña <input type="password" placeholder="Escriba su NIP" maxlength="6"></p>
            
            <p> <button onclick="location.href='index3.html'" id="entrar">Entrar</button > </p>
          </div> 
        </div>
            
        `
        return view
    }
    , after_render: async () => {}
}
export default Login;