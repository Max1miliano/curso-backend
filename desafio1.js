class Contador {
    constructor(responsable){
        this.responsable = responsable;
        this.contador = 0;
    }
    static contadorGlobal = 0;

    obtenerResponsable = () => {
        return this.responsable
    }

    obtenerCuentaIndividual = () => {
        return this.contador
    }

    obtenerCuentaGlobal = () => {
        return Contador.contadorGlobal
    }

    contar = () => {
        this.contador++;
        Contador.contadorGlobal++;
    }
}

let contador1 = new Contador('Maximiliano')

console.log(contador1.obtenerResponsable())