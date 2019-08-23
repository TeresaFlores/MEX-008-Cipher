//SPA
// "use strict"

import Navbar from './modules/navbar.js'
import Home from './modules/home.js'
import Login  from './modules/login.js'
import Cipher from './modules/viewcipher.js'
import Decipher from './modules/viewdecipher.js'
import Document from './modules/archivos.js'
import Error404 from './modules/error.js'
import Utils from './modules/utils.js'
import Footer from './modules/footer.js'

// Lista de rutas admitidas. Cualquier URL que no sea estas rutas arrojara un error 404

const routes = {
    '/': Home,
    '/home': Home,
    '/login': Login,
    '/administrador':Cipher,
    '/usuario': Decipher,
    '/documentos': Document

};

// El código del enrutador. Tome una URL, comprueba la lista de rutas surtidas y luego muestra  la página de contenido corespondiente
const router = async () => { //La función siempre devuelve una promesa

    // Elemento de vista de carga diferida
    const header  = document.getElementById('header-container'); 
    const content = null || document.getElementById('content-container'); // Si el primer valor es falso, verifica el segundo valor
    const footer  = document.getElementById('footer-container');   
    // Obten la URL analizada de la barra de dirrección
    let request = Utils.parseRequestURL();

    // Analiza la URL y si tiene una parte de id, cámbiela con la cadena ": id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');
    
    // Obtenga la pagina de nuestro hash de rutas compatibles
    // Si la URL analizada no está en nuestra lista de rutas admitidas, seleccione la página 404
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;    //routes./login  routes["/"]
    // Renderizar el encabezado de la página
    if ( parsedURL !== '/login' ) {
        console.log("hola");
        
        header.innerHTML = await Navbar.render(); // Espera hasta que la promesa se resuelva
        await Navbar.after_render();

        footer.innerHTML = await Footer.render(); // Espera hasta que la promesa se resuelva
        await Footer.after_render();
    }
    
    
    content.innerHTML = await page.render();
    await page.after_render();    
}

// Escuche en cambio hash
window.addEventListener('hashchange', router); // El evento ocurre cuando ha habido cambios en la parte de anclaje de una URL
// Escuche en la página cargar
window.addEventListener('load', router); // El evento ocurre cuando un objeto se ha cargado.