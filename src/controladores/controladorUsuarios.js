import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
      try {
        const nuevoUsuario = new ModeloUsuario(solicitud.body);
        const usuarioCreado = await nuevoUsuario.save();
        if (usuarioCreado._id) {
          respuesta.json({
            resultado: "bien",
            mensaje: "usuario creado",
            datos: usuarioCreado._id
          });
        }
      } catch (error) {
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrió un error al crear usuario",
          datos: error
        });
      }
      },
      leerUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
          if (usuarioEncontrado._id) {
            respuesta.json({
              resultado: "bien",
              mensaje: "usuario leído",
              datos: usuarioEncontrado
            });
          }          
        } catch (error) {
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrió un error al leer usuario",
          datos: error
        });
        }
      },
      leerUsuarios: async (solicitud, respuesta) => {
        try {
          const todosLosUsuarios = await ModeloUsuario.find();
          respuesta.json({
            resultado: "bien",
            mensaje: "usuarios leídos",
            datos: todosLosUsuarios
          });
        } catch (error) {
          respuesta.json({
            resultado: "mal",
            mensaje: "ocurrió un error al leer todos los usuarios",
            datos: error
          });
        }
      },
      actualizarUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioActualizado =await ModeloUsuario.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          );
          if(usuarioActualizado._id){
            respuesta.json({
              resultado:"bien",
              mensaje:"usuario actualizado",
              datos:usuarioActualizado._id,
            });
          }
    
        } catch (error) {
          respuesta.json({
            resultado:"mal",
            mensaje:"ocurrio un error al actualizar",
            datos:error, 
          });
      }
    },
      eliminarUsuario: async (solicitud, respuesta) => {
        try {
          const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id)
          if (usuarioEliminado._id) {
            respuesta.json({
              resultado: "bien",
              mensaje: "usuario eliminado",
              datos: null
            });
          }          
        } catch (error) {
        respuesta.json({
          resultado: "mal",
          mensaje: "ocurrió un error al eliminar usuario",
          datos: error
        });
        }
      }
}
export default ControladorUsuarios; 
      //exportamos el objeto en este caso es controladorUsuario y importarlo en rutaUsuario 
  
      
     