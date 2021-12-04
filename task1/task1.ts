class Persona{
    
    private _nombre:string = "";
    private _edad?:number = 0;
    private _dni:string = this.calcDni();
    private _SEXO?:string = "H";
    private _peso?:number = 0;
    private _altura?:number = 0;
    
    constructor(dni?:string ){

        function calcDni(){

            let numeroAleatorio = () => {
                const numeros:number = 99999999;
                let numAleatorio = Math.random() * (numeros + 1);
                return Math.round(numAleatorio);
    
            }

            let calculaLetra = () =>{
                let numero = numeroAleatorio();
                let juegoCaracteres: string="TRWAGMYFPDXBNJZSQVHLCKE";
                let modulo= numero % 23;
                let letra = juegoCaracteres.charAt(modulo);
                return numero + letra; 
            }
    
            return calculaLetra().toString();

        }
        dni ? this._dni = dni : this._dni = calcDni();
}

    /**
     * name
     */
    public calcularIMC():void {

        const PESO_IDEAL = 0;
        const SOBRE_PESO = 1;
        const INFRA_PESO = -1;

        let imc:number = this._peso / (this._altura * this._altura);

        if (imc < 20) {

           return console.log(INFRA_PESO,'Infra Peso');
            
        } else if(imc > 20){

            return console.log(SOBRE_PESO,'Sobre Peso');
            
        }else{

           return  console.log(PESO_IDEAL, 'PESO IDEAL');
            
        }

    }

    /**
     * mayorDeEdad
     */
    public mayorDeEdad(): boolean {
       
        return this._edad >= 18 ? true : false;
    }

    /**
     * sexo
     */
    public sexo() : string {
        let sexo = this._SEXO;
        const HOMBRE = "H";
        const MUJER ="M";
        return sexo === HOMBRE ||sexo === MUJER ? sexo : 'El sexo es incorrecto';
        

    }

    /**
     * toString
 :Object    */ 
    public toString() {
        
        let user = {
            nombre: this._nombre,
            edad: this._edad,
            dni:this._dni,
            sexo:this._SEXO,
            peso:this._peso,
            altura:this._altura,
        }
        console.log(user);
        
        
    }

    private calcDni(){

        let numeroAleatorio = () => {
            const numeros:number = 99999999;
            let numAleatorio = Math.random() * (numeros + 1);
            return Math.round(numAleatorio);

        }

        let calculaLetra = (numeroAleatorio) =>{

            let juegoCaracteres: string="TRWAGMYFPDXBNJZSQVHLCKE";
            let modulo= numeroAleatorio % 23;
            let letra = juegoCaracteres.charAt(modulo);
            return letra; 
        }

        return (numeroAleatorio() + calculaLetra(numeroAleatorio)).toString();

        
    }
    
    public set nombre(v : string) {

        this._nombre = v;
    }

    
    public get nombre() : string {

        return this._nombre;
    }
    

    
    public set edad(v : number) {
        this._edad = v;
    }

    public get edad() : number {

        return this._edad;
    }


    public get dni() : string {

        return this._dni;
    }

    public get SEXO():string{

        return this._SEXO;
    
    }
    
    public set SEXO(v: string) {
    
        this._SEXO = v;
    
    }
    public get peso():number{

    return this._peso;

}



public set peso(v: number) {

    this._peso = v;

}
public get altura():number{

    return this._altura;

}



public set altura(v: number) {

    this._altura = v;

}
    
}


let alejandro = new Persona();
alejandro.nombre = "Alejandro"
alejandro.edad = 32;
alejandro.SEXO = "M"
alejandro.altura = 1.75;
alejandro.peso = 76;

console.log(alejandro.toString());
console.log(alejandro.calcularIMC());
console.log(alejandro.mayorDeEdad());






