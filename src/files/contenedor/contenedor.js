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

    getById = async(id) => {
        try{

        }catch(error){
           console.log('No se pudo encontrar: ' + error)
        }
    }
}

module.exports = Contenedor