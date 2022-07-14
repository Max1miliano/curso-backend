import express from 'express';
import moment from 'moment';

const app = express();
const PORT = 8080;
let counter = 0;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("<h1>Bienvenido al servidor Express</h1>")
})
app.get('/productos',(req,res)=>{
    res.send("Papa con queso");
})
app.get('/productoRandom',(req,res)=>{
    counter++;
    res.send(`El endpoint se ha visitado ${counter} veces`)
})