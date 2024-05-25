// creamos una contanste a la que le pasamos una funcion que va a crear leer actualizar e iliminar estas funciones no las traimos de ruta usuarios
const ControladorUsuarios = {
    crearUsuario: async(solicitud, respuesta) => {
        try {
      console.log("solicitud:",solicitud.body); // aqui se crea la solicitud para traer de postman el apartado body para que no salga undefault se debe colocar en servidor .use (express.json())asi acepta los datos de postman q estan en formato json 
       if (solicitud.body.nombre==="")throw new Error ("falta el nombre");// para verificar errores 
       if (solicitud.body.edad==="")throw new Error ("falta la edad");
       if (solicitud.body.correo==="")throw new Error ("ingrese correo");
       respuesta.json({mensaje:"Post crear usuario ...works!"});
      }catch (error){
        respuesta.json({error:true, mensaje:"ocurrio un error al crear usuario"});
      }
    },
      leerUsuario: async (solicitud, respuesta) => {
        try{
            console.log(solicitud.params.id);
        respuesta.json({mensaje: "GET usuario works!"});
        }catch (error){
            console.log("error:", error)
            respuesta.json ({error:true, mensaje:"ocurrio un error al leer usuario"});

        }
    },
      leerUsuarios: async (solicitud, respuesta) => {
       try{
        respuesta.json({mensaje: "GET  todos los usuarios works!"});
       }catch (error){
        console.log("error:", error)
         respuesta.json ({error:true, mensaje:"ocurrio un error al leer todos los usuario"});

       }
    },
      actualizarUsuario:async (solicitud, respuesta) => {
        try{
            console.log("id:",solicitud.params.solicitud);
            console.log("solicitud:",solicitud.body);
            respuesta.json({mensaje: "PUT usuario works!"});
        }catch (error){
            console.log("error:", error);
            respuesta.json ({error:true, mensaje:"ocurrio un error al leer todos los usuario"});
        }
        },
        eliminarUsuario: async (solicitud, respuesta) => {
        try {
            console.log("id: ", solicitud.params.id);
            respuesta.json({mensaje: "DELETE eliminar usuario...works!"});
          } catch (error) {
            console.log("error: ", error);
            respuesta.json({error: true, mensaje: "ocurrió un error al eliminar usuario"});
          }
        }
    }
      export default ControladorUsuarios; //exportamos el objeto en este caso es controladorUsuario y importarlo en rutaUsuario 
      
      /*
      const usuario ={
        nombre:"Deisy",
        apellido:"esquivia",
        edad:"36",
        numero de identidad:"1068765434"
        email: "deisyesquivia3@gmail.com",
        contrasenia:"1234",
        repetir contraseña:"1234",
        dirección: "cordoba"
        pais: "colombia"

      }  notaaa hay que ir probando en postman
      */
     