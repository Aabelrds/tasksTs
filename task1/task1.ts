class Persona{
    
    private _nombre:string = "";
    private _edad?:number = 0;
    private _dni:string;
    private _SEXO?:string = "H";
    private _peso?:number = 0;
    private _altura?:number = 0;
    constructor(dni?:string ){

    this._dni = dni;

    }

    /**
     * name
     */
    public calcularIMC(peso:number, altura:number):void {
        const PESO_IDEAL = 0;
        const SOBRE_PESO = 1;
        const INFRA_PESO = -1;

        let imc:number = peso / (altura*altura);

        if (imc < 20) {

            console.log(INFRA_PESO);
            
        } else if(imc > 20){

            console.log(SOBRE_PESO);
            
        }else{

            console.log(PESO_IDEAL);
            
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
        
        // let user = {
        //     nombre: this._nombre
        //     edad: this._edad
        //     dni:this._dni
        //     this._SEXO
        //     this._peso
        //     this._altura
        // }
        
        
        
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

    
    public set dni(v : string) {

        this._dni = v;
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


let alejandro = new Persona("y5861492w");
alejandro.edad = 32;
alejandro.SEXO = "M"

console.log(toString());




