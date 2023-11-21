import { ServicioRenta } from "../services/ServicioRenta.js";
export class ControladorRenta {
  constructor() {}

  async buscarTodos(request, response) {
    try {
      let serviciorenta = new ServicioRenta();
      response.status(200).json({
        mensaje: "Lista de rentas",
        datos: await serviciorenta.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let serviciorenta = new ServicioRenta();
      //1. Hay que recibir datos (si)
      let id = request.params.id;
      //2. con el id que mando el cliente busco la renta en BD
      //3. Respondo al cliente
      response.status(200).json({
        mensaje: "renta por ID ",
        datos: await serviciorenta.buscarPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async modificar(request, response) {
    try {
      let serviciorenta = new ServicioRenta();
      //1. hay que recibir los datos del cliente (si)
      let id = request.params.id;
      let modificaRenta = request.body;
      //2.con los datos del cliente y el id lo actualizo en bd
      await serviciorenta.modificar(id, modificaRenta);
      //3.responde al cliente
      response.status(200).json({
        mensaje: "modificada renta " + id,
        datos: modificaRenta,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
      let serviciorenta = new ServicioRenta();
      //1. hay que recibir los datos del cliente (si)
      let registrarRenta = request.body;
      //2. con los datos del cliente lo registro en bd
      await serviciorenta.registrar(registrarRenta);
      //3. responde al cliente
      response.status(200).json({
        mensaje: "registrada renta",
        datos: registrarRenta,
      });
    } catch (error) {
      response.status(400).json({
        estado: false,
        mensaje: "fallamos" + error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    try {
      let serviciorenta = new ServicioRenta();
      //1. hay que recibir los datos del cliente (si)
      let id = request.params.id;
      //2. con los datos del cliente lo elimino de la bd
      let respuesta = await serviciorenta.eliminar(id);
      //3. responde al cliente
      response.status(200).json({
        mensaje: "eliminada renta ",
        datos: respuesta,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
