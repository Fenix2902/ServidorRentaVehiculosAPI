import mongoose from "mongoose";

const Schema = mongoose.Schema

const Vehiculo = new Schema({
    placa: {
        type:String,
        required:[true,'La placa es requerida']
    },
    marca: {
        type:String,
        required:[true,'La marca es requerida']
    },
    estado: {
        type:String,
        required:[true,'El estado es requerido']
        ,
    },
    valorDiario: {
        type:Number,
        required:[true,'El valor diario es requerido'],
    }
})

export const modeloVehiculo = mongoose.model('vehiculos',Vehiculo)