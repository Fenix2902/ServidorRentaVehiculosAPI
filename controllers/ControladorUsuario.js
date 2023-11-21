import { ServicioUsuario } from "../services/ServicioUsuario.js";
export class ControladorUsuario {
  constructor() {}

  async buscarTodos(request, response) {
    try {
      let serviciousuario = new ServicioUsuario();
      response.status(200).json({
        mensaje: "Lista de usuarios",
        datos: await serviciousuario.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let serviciousuario = new ServicioUsuario();
      let id = request.params.id;
      response.status(200).json({
        mensaje: "usuario por id",
        datos: await serviciousuario.buscarPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
        datos: null,
      });
    }
  }
  async modificar(request, response) {
    try {
      let serviciousuario = new ServicioUsuario()
      let id = request.params.id;
      let datosModificar = request.body;
      await serviciousuario.modificar(id,datosModificar)
      response.status(200).json({
        mensaje: "usuario actualizado",
        datos: datos,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
      let serviciousuario = new ServicioUsuario()
      let datosUsuario = request.body;
      await serviciousuario.registrar(datosUsuario)
      response.status(200).json({
        estado: true,
        mensaje: "usuario creado",
        datos: datosUsuario,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }

  async eliminar(request, response) {
    try {
      let serviciousuario = new ServicioUsuario()
      let id = request.params.id;
      //2.eliminar un usuario por su id
      let respuesta = await serviciousuario.eliminar(id)
      //3.Respondo al cliente
      response.status(200).json({
        mensaje: "usuario borrado",
        datos: respuesta,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
