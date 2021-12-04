class Persona {
    constructor(dni) {
        this._nombre = "";
        this._edad = 0;
        this._dni = this.calcDni();
        this._SEXO = "H";
        this._peso = 0;
        this._altura = 0;
        function calcDni() {
            let numeroAleatorio = () => {
                const numeros = 99999999;
                let numAleatorio = Math.random() * (numeros + 1);
                return Math.round(numAleatorio);
            };
            let calculaLetra = () => {
                let numero = numeroAleatorio();
                let juegoCaracteres = "TRWAGMYFPDXBNJZSQVHLCKE";
                let modulo = numero % 23;
                let letra = juegoCaracteres.charAt(modulo);
                return numero + letra;
            };
            return calculaLetra().toString();
        }
        dni ? this._dni = dni : this._dni = calcDni();
    }
    /**
     * name
     */
    calcularIMC() {
        const PESO_IDEAL = 0;
        const SOBRE_PESO = 1;
        const INFRA_PESO = -1;
        let imc = this._peso / (this._altura * this._altura);
        if (imc < 20) {
            return console.log(INFRA_PESO, 'Infra Peso');
        }
        else if (imc > 20) {
            return console.log(SOBRE_PESO, 'Sobre Peso');
        }
        else {
            return console.log(PESO_IDEAL, 'PESO IDEAL');
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
        let user = {
            nombre: this._nombre,
            edad: this._edad,
            dni: this._dni,
            sexo: this._SEXO,
            peso: this._peso,
            altura: this._altura,
        };
        console.log(user);
    }
    calcDni() {
        let numeroAleatorio = () => {
            const numeros = 99999999;
            let numAleatorio = Math.random() * (numeros + 1);
            return Math.round(numAleatorio);
        };
        let calculaLetra = (numeroAleatorio) => {
            let juegoCaracteres = "TRWAGMYFPDXBNJZSQVHLCKE";
            let modulo = numeroAleatorio % 23;
            let letra = juegoCaracteres.charAt(modulo);
            return letra;
        };
        return (numeroAleatorio() + calculaLetra(numeroAleatorio)).toString();
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
let alejandro = new Persona();
alejandro.nombre = "Alejandro";
alejandro.edad = 32;
alejandro.SEXO = "M";
alejandro.altura = 1.75;
alejandro.peso = 76;
console.log(alejandro.toString());
console.log(alejandro.calcularIMC());
console.log(alejandro.mayorDeEdad());
