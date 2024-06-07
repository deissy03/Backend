//esta es la raiz
import express from "express"; // se importa express se debe agregar la deoendecia "type" : "module"  
import morgan from"morgan";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";

const servidor = express(); // creamos la contante q va a contener la función 

servidor.use(morgan("dev"));
servidor.use(express.json());// aqui le decimos al servidor que vamos a recibir los datos en json
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use ('/inicio-sesion', enrutadorInicioSesion)

servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
})

export default servidor; // se exporta el servidor y lo importamos en index