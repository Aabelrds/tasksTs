class Carta{

    private _valor:number;
    private _palo:string;
    
    
    constructor(valor:number, palo:string){

        this._valor = valor;
        this._palo = palo;

    }
    
    public mostrarCarta():void{

        console.log(this._valor + " de " + this._palo);
        
    }

    public toString():void {

        console.log(this._valor + " de " + this._palo);
    }

    public clear(){

        return
    }
}

class Baraja {

    palos:string[] = ["bastos", "espadas", "oros","copas"];
    mazo:Object[] = [];
    carta:number = 0;
    quedan:number = 40;
    cartasUser:Object[] = [];
    monton:Object[] = [];
    

    constructor(){
        this.crearCartas(this.mazo);
    }

    private crearCartas(mazo:any[]){
        
        this.palos.forEach(function(palo) {

            for( var numCarta = 1 ; numCarta <=10 ; numCarta++ ){
                let carta = new Carta(numCarta,palo);
                mazo.push(carta);
                
            }
        
        });
    }

    public barajar = ():void => {

        let newMazo:Object[] = this.mazo.sort(function() {return (Math.random()-0.5)});
        
        this.mazo = newMazo;
    }

    
    
    public siguienteCarta = () => {

        
        let sigCarta = this.mazo[this.carta];
        this.carta++;
        this.quedan--;
        console.log(this.carta, '+ + ');
        
        if(this.quedan != 0){
            
            return sigCarta+' cartas restantes :'+ this.quedan;
        }else{
            return 'No quedan mas cartas';
        }
        

    }
    public cuantasCartas = (cantidadCartas:number) => {
        this.cartasUser = [];
        if(this.quedan > cantidadCartas){

            for (let cartas = 0; cartas < cantidadCartas; cartas++) {

                const element = this.mazo[cartas];
                this.cartasUser.push(element);
                this.monton.push(element);
                this.quedan--
                this.mazo.splice(cartas,1);
            
            }

        return this.cartasUser + ' cartas restantes :'+ this.quedan;

        }else{

        return 'No quedan mas cartas, quedan: '+ this.quedan;

        }
    }
    public cartasMonton = () => {
        console.log(this.monton.length, 'lengthhh')
        if(this.monton.length == 0){

            return 'Aun no hay cartas repartidas';

        }else{

            return this.monton; 
        }
    }
}

let cartasEspañolas = new Baraja;
cartasEspañolas.barajar();
// console.log(cartasEspañolas.mazo, 'Mazo Barajeado');
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.cuantasCartas(2),'Dame 2');
console.log(cartasEspañolas.cuantasCartas(7),'Dame 7');
console.log(cartasEspañolas.cartasMonton());






