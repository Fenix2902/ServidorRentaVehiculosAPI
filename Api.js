//esta clase representa un servidor
//importando la herramientas
import express from "express";
import cors from 'cors'
import { rutaAPI } from "./routes/rutas.js";
import { establecerConexionBD } from "./database/conexion.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD();
    this.atenderPeticiones();
  }

  //levantar el servidor
  levantarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log("servidor operando...");
    });
  }
  //Atiende las peticiones y responde
  atenderPeticiones() {
    //atendiendo peticiones usuario
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use("/", rutaAPI);
  }
  //Se conecta a la Base de datos
  conectarBD() {
    establecerConexionBD()
  }
}
