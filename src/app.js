import express from 'express';
import moment from 'moment';
import Contenedor from './files/contenedor/contenedor.cjs';

const misProductos = new Contenedor()

const productList = await misProductos.getAll()

const productById = await misProductos.getById(1)

const app = express();
const PORT = 8080;
let counter = 0;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("<h1>Bienvenido al servidor </h1>")
})
app.get('/productos',(req,res)=>{
    res.send(productList);
})
app.get('/productoRandom',(req,res)=>{
    res.send(productById)
})


// getAll()