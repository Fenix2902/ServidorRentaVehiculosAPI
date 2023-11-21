import  {Api}  from "./Api.js";
import 'dotenv/config.js'

let servidor= new Api()//creando un objeto de la clase Api

//levantar el servidor
servidor.levantarServidor()