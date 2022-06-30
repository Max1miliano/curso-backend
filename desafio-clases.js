class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => {
        return console.log(`Mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
    }

    addMascota = (nombreDeMascota) => {
        this.mascotas.push(nombreDeMascota)
    }

    countMascotas = () => {
        let cantidadDeMascotas = this.mascotas.length
        return cantidadDeMascotas
    }

    addBook = (nombre, autor) => {
        let libreria = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(libreria)
    }

    getBookNames = () => {
        
        let biblioteca = this.libros

        let nombreDeAutores = biblioteca.map(({nombre}) => nombre)

        return nombreDeAutores
    }
}

const usuario1 = new Usuario("Maximiliano", "Pompas")


// Me trae el nombre completo en un template string 
console.log(usuario1.getFullName())

// Me agrega una mascota a la lista de strings
usuario1.addMascota("perro")

// Me hace el conteo de la cantidad de mascotas que tengo
console.log(usuario1.countMascotas())

// Me agrega un libro con su autor a mi lista de libros
usuario1.addBook('Odisea', 'Homero')

// Filtra por los nombres de los libros en la biblioteca
console.log(usuario1.getBookNames())


console.log(usuario1)

