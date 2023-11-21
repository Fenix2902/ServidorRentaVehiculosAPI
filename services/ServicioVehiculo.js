import {modeloVehiculo} from '../models/modeloVehiculo.js'

export class ServicioVehiculo {
  constructor() {}

  async buscarTodas() {
    let vehiculos = await modeloVehiculo.find();
    return vehiculos;
  }
  async buscarPorId(id) {
    let vehiculo = await modeloVehiculo.findById(id);
    return vehiculo;
  }
  async modificar(id, datos) {
    return await modeloVehiculo.findByIdAndUpdate(id, datos);
  }
  async registrar(datos) {
    let vehiculoNuevo = new modeloVehiculo(datos);
    return await vehiculoNuevo.save();
  }
  async eliminar(id) {
    return await modeloVehiculo.findByIdAndDelete(id);
  }
}