class Persona {
    constructor(dni) {
        this._nombre = "";
        this._edad = 0;
        this._SEXO = "H";
        this._peso = 0;
        this._altura = 0;
        this._dni = dni;
    }
    /**
     * name
     */
    calcularIMC(peso, altura) {
        const PESO_IDEAL = 0;
        const SOBRE_PESO = 1;
        const INFRA_PESO = -1;
        let imc = peso / (altura * altura);
        if (imc < 20) {
            console.log(INFRA_PESO);
        }
        else if (imc > 20) {
            console.log(SOBRE_PESO);
        }
        else {
            console.log(PESO_IDEAL);
        }
    }
    /**
     * mayorDeEdad
     */
    mayorDeEdad() {
        return this._edad >= 18 ? true : false;
    }
    /**
     * sexo
     */
    sexo() {
        let sexo = this._SEXO;
        const HOMBRE = "H";
        const MUJER = "M";
        return sexo === HOMBRE || sexo === MUJER ? sexo : 'El sexo es incorrecto';
    }
    /**
     * toString
 :Object    */
    toString() {
        // let user = {
        //     nombre: this._nombre
        //     edad: this._edad
        //     dni:this._dni
        //     this._SEXO
        //     this._peso
        //     this._altura
        // }
    }
    set nombre(v) {
        this._nombre = v;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(v) {
        this._edad = v;
    }
    get edad() {
        return this._edad;
    }
    set dni(v) {
        this._dni = v;
    }
    get dni() {
        return this._dni;
    }
    get SEXO() {
        return this._SEXO;
    }
    set SEXO(v) {
        this._SEXO = v;
    }
    get peso() {
        return this._peso;
    }
    set peso(v) {
        this._peso = v;
    }
    get altura() {
        return this._altura;
    }
    set altura(v) {
        this._altura = v;
    }
}
let alejandro = new Persona("y5861492w");
alejandro.edad = 32;
alejandro.SEXO = "M";
console.log(toString());
