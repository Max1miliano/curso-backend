// save(Object) : va agregar un id al producto
// getById(number) : me tiene devolver un objeto 
// getAll() : me tiene que devolver un objeto []
// deleteById() : void elimina el archivo con el id buscado 
// deleteAll() : elimina todos los objetos del archivo

const fs = require('fs')


// leer datos de un archivo de texto 
// fs.readFile('productos.txt', 'utf-8', (error,result)=>{
//         if(error){
//             console.log("Hay un error");
//         }else{
//             console.log(result);
//         }
//         })

// // sobreescribir archivo de texto 
// fs.writeFileSync('productos.txt', 'esto es una prueba\n')

// // agregar contenidos a un archivo sincronicamente
// fs.appendFileSync('productos.txt', 'esto es un agregado')

// sobreeescribir archivos asincronicamente con callbacks
// fs.writeFile('productos.txt', 'id', error => {
//     if (error) {
//         console.log()
//     } else {
//         console.log('guardado!')
//     }
// })

// agregar a un archivo 
// fs.appendFile('productos.txt', 'id\n', error => {
//     if (error) {
//         console.log()
//     } else {
//         console.log('guardado!')
//     }
// })
