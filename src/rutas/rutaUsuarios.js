import { Router } from "express"; //importamos ruta
import ControladorUsuarios from "../controladores/controladorusuarios.js"; // importamos controlador recuerda colocar el .js a la ruta 

const enrutadorUsuarios = Router(); // creamos la constante que va a tener la función

  enrutadorUsuarios.post('/', ControladorUsuarios.crearUsuario);
  enrutadorUsuarios.get('/:id', ControladorUsuarios.leerUsuario); // el id  permitira  en plural, ej: leer todos los usuarios 
  enrutadorUsuarios.get('/', ControladorUsuarios.leerUsuarios);
  enrutadorUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);
  enrutadorUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);

  export default enrutadorUsuarios;// exportamos  la constante que tiene la función enrutadorusuario