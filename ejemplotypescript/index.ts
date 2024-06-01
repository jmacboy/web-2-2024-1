let b: number = 16;
console.log(b);
enum TipoOperacion {
    Suma = 0,
    Resta = 1,
    Multiplicacion = 2,
    Division = 3
}
class Calculadora {
    numAnterior: number;
    constructor() {
        this.numAnterior = 0;
    }
    iniciarOperacion(a: number) {
        this.numAnterior = a;
    }
    realizarOperacion(b: number, operacion: TipoOperacion): number {
        let resultado = 0;
        switch (operacion) {
            case TipoOperacion.Suma:
                resultado = this.suma(this.numAnterior, b);
                break;
            case TipoOperacion.Resta:
                resultado = this.resta(this.numAnterior, b);
                break;
            case TipoOperacion.Multiplicacion:
                resultado = this.multiplicacion(this.numAnterior, b);
                break;
            case TipoOperacion.Division:
                resultado = this.division(this.numAnterior, b);
                break;
        }
        return resultado;
    }
    private suma(a: number, b: number): number {
        return a + b;
    }
    private resta(a: number, b: number): number {
        return a - b;
    }
    private multiplicacion(a: number, b: number): number {
        return a * b;
    }
    private division(a: number, b: number): number {
        if (b == 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
}
const calc: Calculadora = new Calculadora();
calc.iniciarOperacion(5);
console.log("El resultado es: ", calc.realizarOperacion(10, TipoOperacion.Division));

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento?: string;
}
const persona: Persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 10,
    fechaNacimiento: "01/01/2020"
};
const persona1 : Persona = {
    nombre: "Pepe",
    apellido: "Pecas",
    edad: 20
}
console.log(persona);
const persona2 = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: "20",
    telefono: "12345678"
};
