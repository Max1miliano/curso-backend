const Contenedor = require('./files/contenedor/contenedor.js')

const miContenedor = new Contenedor()
const entorno = async() => {
    console.log('Getting pets')
    let productos = await miContenedor.getAll()
    console.log(productos)

    console.log('Agregando producto')

    let producto = {
        title: 'Celular Samsung',
        price: 23000,
        thumbnail: 'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2696_1.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds'
    }

    await miContenedor.save(producto)
}

entorno()