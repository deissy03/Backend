import  {Schema, model} from "mongoose";

const esquemaUsuario = new Schema(
// mirar en ete enlace para modificar los datos https://mongoosejs.com/
{
        nombre:{type: String, required:true},
        apellido:{type: String, required:true},
        edad:{type: Number, required:true},
        cedula:{type: Number, required:true},
        email:{type: String, required:true},
        contrasenia:{type: Number, required:true},
        verifiqueContrasenia:{type: Number, required:true},
        direccion:{type: String, required:true},
        pais:{type: String, required:true},

      }) 
      export default model("usuario",esquemaUsuario);