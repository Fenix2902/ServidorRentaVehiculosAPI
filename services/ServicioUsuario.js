import { modeloUsuario } from "../models/modeloUsuario.js";
export class ServicioUsuario {
  constructor() {}

  async buscarTodas() {
    let usuarios = await modeloUsuario.find();
    return usuarios;
  }
  async buscarPorId(id) {
    let usuario = await modeloUsuario.findById(id);
    return usuario;
  }
  async modificar(id, datos) {
	
    return await modeloUsuario.findByIdAndUpdate(id, datos)
  }
  async registrar(datos) {
    let usuarioNuevo = new modeloUsuario(datos);
    return await usuarioNuevo.save();
  }
  async eliminar(id) {
    return await modeloUsuario.findByIdAndDelete(id)
  }
}
