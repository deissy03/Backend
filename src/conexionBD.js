import mongoose from "mongoose";
//se escribe el link de atlas y en <pasword> se coloca el nombre del usuario que le di, luego lo pegamos en env y se oculta colocandolo en gitignore 

mongoose
  .connect(process.env.MONGODB_ATLAS_URI).then((dato) => {
    console.log('bien, conectado a la base de datos');
  })
  .catch((error) => {
    console.log('mal, ocurrió un error y no se conectó a la base de datos');
  });