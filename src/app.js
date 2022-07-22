// import express from 'express';
// import Contenedor from './files/contenedor/contenedor.cjs';

// const misProductos = new Contenedor()

// const productList = await misProductos.getAll()

// const productById = await misProductos.getById(1)


// const app = express();
// const server = app.listen(8080,()=>{
//     console.log(`Listening on PORT 8080`)
// })

// app.get('/',(req,res)=>{
//     res.send("<h1>Bienvenido al servidor </h1>")
// })
// app.get('/productos',(req,res)=>{
     
//     res.send(productList);
// })
// app.get('/productoRandom',(req,res)=>{
//     res.send(productById)
// })

import express from 'express';
import Contenedor from './files/contenedor/contenedor.cjs';

const app = express();
const server =app.listen(8080,()=>console.log("Listening on 8080"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const misProductos = new Contenedor()
const productList = await misProductos.getAll()


app.get('/api/productos',(req,res)=>{
    res.send(productList)
})

app.get('/api/productos/:id', async(req,res)=>{
    if(isNaN(req.params.id)) return res.status(400).send({error:"El valor no es numérico"});
    let id = parseInt(req.params.id);
    let productoBuscado = await misProductos.getById(id)
    res.send(productoBuscado)
})

app.post('/api/productos',(req,res)=>{
    let newProducto = req.body.product;
    productList = productList.concat(` ${newProducto}`)
    res.send({added:newProducto})
})