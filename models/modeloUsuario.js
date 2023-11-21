import mongoose from "mongoose";

const Schema = mongoose.Schema

const Usuario = new Schema({
    usuario: {
        type: String,
        required: [true, "El nombre del usuario es requerido"]
    },
    nombre: {
        type: String,
        required: [true, "El nombre completo es requerido"],
    },
    contraseña: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    role: {
        type: Number,
        default: 1 //1=Usuario,2=Administrador
    },
    palabraClave: {
        type: String,
        required: [true, "La Palabra Clave es requerida"]
    }
})

export const modeloUsuario = mongoose.model('usuarios',Usuario)