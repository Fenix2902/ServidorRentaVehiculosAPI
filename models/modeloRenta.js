import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Renta = new Schema({
  numeroRenta: {
    type: Number,
    required: [true, "El Numero de renta es requerido"],
    unique: true,
  },
  usuario: {
    type: String,
    required: [true, "El Usuario es requerido"],
  },
  placa: {
    type: String,
    required: [true, "La placa es requerida"],
  },
  fechaInicial: {
    type: Date,
    default: Date.now(),
    required: [true, "Fecha Inicial es requerida"],
  },
  fechaFinal: {
    type: Date,
    required: [true, "Fecha Final es requerida"],
  },
  estado: {
    type: Boolean,
    default: false,
    required: [true, "Estado es requerido"],
  },
});

export const modeloRenta = mongoose.model('rentas',Renta)
