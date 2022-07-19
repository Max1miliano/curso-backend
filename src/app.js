import express from 'express';
import moment from 'moment';
import Contenedor from './files/contenedor/contenedor.cjs';

const misProductos = new Contenedor()

const productList = await misProductos.getAll()

const productById = await misProductos.getById(1)


const app = express();
const server = app.listen(8080,()=>{
    console.log(`Listening on PORT 8080`)
})

app.get('/',(req,res)=>{
    res.send("<h1>Bienvenido al servidor </h1>")
})
app.get('/productos',(req,res)=>{
     
    res.send(productList);
})
app.get('/productoRandom',(req,res)=>{

    // console.log(req.query)

    // let idDelProducto = req.query.idProductoElegido

    // if (idDelProducto) return res.send('hola')
    res.send(productById)

})


// getAll()