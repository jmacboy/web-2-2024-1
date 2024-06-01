var b = 16;
console.log(b);
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Suma"] = 0] = "Suma";
    TipoOperacion[TipoOperacion["Resta"] = 1] = "Resta";
    TipoOperacion[TipoOperacion["Multiplicacion"] = 2] = "Multiplicacion";
    TipoOperacion[TipoOperacion["Division"] = 3] = "Division";
})(TipoOperacion || (TipoOperacion = {}));
var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.numAnterior = 0;
    }
    Calculadora.prototype.iniciarOperacion = function (a) {
        this.numAnterior = a;
    };
    Calculadora.prototype.realizarOperacion = function (b, operacion) {
        var resultado = 0;
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
    };
    Calculadora.prototype.suma = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.resta = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicacion = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.division = function (a, b) {
        if (b == 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    };
    return Calculadora;
}());
var calc = new Calculadora();
calc.iniciarOperacion(5);
console.log("El resultado es: ", calc.realizarOperacion(10, TipoOperacion.Division));
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 10,
    fechaNacimiento: "01/01/2020"
};
var persona1 = {
    nombre: "Pepe",
    apellido: "Pecas",
    edad: 20
};
console.log(persona);
var persona2 = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: "20",
    telefono: "12345678"
};
