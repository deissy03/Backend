import servidor from "./servidor.js" // importamos servidor.js

servidor.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
});