const Contenedor = require('./files/contenedor/contenedor.js')

const miContenedor = new Contenedor()
const entorno = async() => {

    //Devuelve un array con los objetos presentes en el archivo
    // let productos = await miContenedor.getAll()
    // console.log(productos)

    // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
    // let producto = {
    //     title: 'Celular Samsung',
    //     price: 23000,
    //     thumbnail: 'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2696_1.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds'
    // }
    // await miContenedor.save(producto)

    //Recibe un id y devuelve un objeto con ese id, o null si no está
    // await miContenedor.getById(2)

    // Elimina del archivo el objeto con el id buscado 
    // await miContenedor.deleteById(1)

    await miContenedor.deleteAll()
}

entorno()