import { modeloRenta } from "../models/modeloRenta.js";
export class ServicioRenta {
  constructor() {}

  async buscarTodas() {
    let rentas = await modeloRenta.find();
    return rentas;
  }
  async buscarPorId(id) {
    let renta = await modeloRenta.findById(id);
    return renta;
  }
  async modificar(id, datos) {
    return await modeloRenta.findByIdAndUpdate(id, datos);
  }
  async registrar(datos) {
    let rentaNueva = new modeloRenta(datos);
    return await rentaNueva.save();
  }
  async eliminar(id) {
    return await modeloRenta.findByIdAndDelete(id);
  }
}
