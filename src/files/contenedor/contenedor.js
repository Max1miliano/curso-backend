const fs = require('fs');

const path = 'src/files/productos.json';

class Contenedor {
    
    getAll = async() => {
        try {
            if(fs.existsSync(path)){
            let Alldata = await fs.promises.readFile(path, 'utf-8')
            let data = JSON.parse(Alldata)
            return data
        } else {
            return [];
        }
    }catch(error){
        console.log('No se pudo encontrar: ' + error)
      }
    }

    save = async(unProducto) => {
         try {
            let productos = await this.getAll()
            if (productos.length === 0) {
              unProducto.id = 1;
              productos.push(unProducto)
              await fs.promises.writeFile(path, JSON.stringify(productos, null, '\t'))
         } else {
            unProducto.id = productos[productos.length-1].id+1
            productos.push(unProducto)
            await fs.promises.writeFile(path, JSON.stringify(productos, null, '\t'))
         }
         } catch(error){
            console.log('No se pudo escribir el archivo: '+ error)
         }
    }

    getById = async(idEnviado) => {
        try{
            let totalData  = await this.getAll()
            let nuevoTotalData = totalData.map(({id}) => id )
            let resultado = nuevoTotalData.indexOf(idEnviado)
            if (resultado === -1 ) {
                console.log('ese id no existe')
            } else {
                let objetoBuscado = totalData.filter(objetoId => objetoId.id === idEnviado)
                // return objetoBuscado
                console.log(objetoBuscado)
            }
        }catch(error){
           console.log('No se pudo encontrar: ' + error)
        }
    }

    deleteById = async(objetoAElminar) => {
        try {
            // let elementToDelete = await this.getById(objetoAElminar)

            let todosLosProductos = await this.getAll()
            let nuevoArrayDeProductos = todosLosProductos.filter(objetoNoQuerido => objetoNoQuerido.id !== objetoAElminar)
            console.log(nuevoArrayDeProductos)
             await fs.promises.writeFile(path, JSON.stringify(nuevoArrayDeProductos, null, '\t'))
        }catch(error){
            console.log('No se pudo encontrar: ' + error)
        }
    }

    deleteAll = async() => {
        try{
            let misObjetos = await this.getAll()
            misObjetos.length = 0
            await fs.promises.writeFile(path, JSON.stringify(misObjetos, null, '\t'))
            console.log(misObjetos)
        } catch(error){
            console.log('No se puede encontrar: ' + error)
        }
    }
}

module.exports = Contenedor