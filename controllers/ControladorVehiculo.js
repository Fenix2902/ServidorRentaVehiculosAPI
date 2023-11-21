import {ServicioVehiculo} from '../services/ServicioVehiculo.js'
export class ControladorVehiculo {
  constructor() {}

  async buscarTodos(request, response) {
    try {
      let serviciovehiculo = new ServicioVehiculo()
      response.status(200).json({
        mensaje: "Lista de Vehiculos",
        datos: await serviciovehiculo.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      //1 hay que recibir datos(si)
      let serviciovehiculo = new ServicioVehiculo()
      let id = request.params.id;
      //2. con el id que mando el cliente busco la vehiculo en BD
      //3. si lo encuentro devuelvo los resultados
      response.status(200).json({
        mensaje: "Vehiculo por id",
        datos: await serviciovehiculo.buscarPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async modificar(request, response) {
    try {
      let serviciovehiculo = new ServicioVehiculo()
      //1 hay que recibir datos(si)
      let id = request.params.id;
      let datosVehiculo = request.body;
      //2.con los datos del vehiculo y el id lo actualizo en bd
      await serviciovehiculo.modificar(id,datosVehiculo)
      //3.devuelvo mensaje de exito
      response.status(200).json({
        mensaje: "Modificacion exitosa",
        datos: datosVehiculo,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
      let serviciovehiculo = new ServicioVehiculo()
      //1 hay que recibir datos(si)
      let registroVehiculo = request.body;
      //2.lo guardo en bd
      await serviciovehiculo.registrar(registroVehiculo)
      //3.devuelvo mensaje de exito
      response.status(200).json({
        mensaje: "Registrado correctamente",
        datos: registroVehiculo,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async eliminar(request, response) {
    try {
      let serviciovehiculo = new ServicioVehiculo()
      //1 hay que recibir datos(si)
      let id = request.params.id;
      //2.elimino el dato en la bd
      let respuesta = await serviciovehiculo.eliminar(id)
      //3.devuelvo mensaje de exito
      response.status(200).json({
        estado: true,
        mensaje: "Eliminado Correctamente",
        datos: respuesta,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
