"use strict"

const express = require("express");
const servidor = express();

servidor.get("/",(solicitud, respuesta)=>{
    respuesta.json({
        saludo:"hola como estas?"
    })
});
servidor.listen(3000);
console.log("servidor corriendo en el puerto 3000");