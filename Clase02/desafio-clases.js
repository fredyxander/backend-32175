class Contador{
    constructor(name){
        this.name = name;
        this.city = "Bogota";
        this.cuentaIndividual = 0;
    }

    static cuentaGlobal = 0;

    obtenerResponsable (){
        return this.name;
    }

    obtenerCuentaIndividual (){
        return this.cuentaIndividual;
    }

    obtenerCuentaGlobal (){
        return Contador.cuentaGlobal;
    }

    contar(){
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
}

const contadorJulio = new Contador("julio");
console.log(contadorJulio);
const contadorNatalia = new Contador("Natalia");
console.log(contadorJulio.obtenerResponsable());
console.log('Julio: ',contadorJulio.obtenerCuentaIndividual());
console.log('Natialia: ',contadorNatalia.obtenerCuentaIndividual());
console.log('cuenta global: ',contadorJulio.obtenerCuentaGlobal());
contadorJulio.contar();
console.log('Julio: ',contadorJulio.obtenerCuentaIndividual());
contadorJulio.contar();
contadorNatalia.contar();
console.log('Julio: ',contadorJulio.obtenerCuentaIndividual());
console.log('Natialia: ',contadorNatalia.obtenerCuentaIndividual());
console.log('cuenta global: ',contadorJulio.obtenerCuentaGlobal());