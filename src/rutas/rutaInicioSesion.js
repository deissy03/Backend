// esta ruta fue la nueva api de login que creamos 
import { Router } from 'express';
import ControladorInicioSesion from '../controladores/controladorInicioSesion.js';

const enrutadorInicioSesion = Router();

enrutadorInicioSesion.post('/', ControladorInicioSesion.iniciarSesion);

export default enrutadorInicioSesion;