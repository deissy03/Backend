import  {Schema, model} from "mongoose";

const esquemaUsuario = new Schema({

  nombre: { type: String, required: true },
  correoElectronico: { type: String, required: true },
  contrasenia: { type: String, required: true },
       /* nombre:{type: String, required:true},
        apellido:{type: String, required:true},
        edad:{type: Number, required:true},
        cedula:{type: Number, required:true},
        email:{type: String, required:true},
        contrasenia:{type: Number, required:true},
        verifiqueContrasenia:{type: Number, required:true},
        direccion:{type: String, required:true},
        pais:{type: String, required:true},*/

      });
      export default model("usuario",esquemaUsuario);