class Carta {
    constructor(valor, palo) {
        this._valor = valor;
        this._palo = palo;
    }
    mostrarCarta() {
        console.log(this._valor + " de " + this._palo);
    }
    toString() {
        console.log(this._valor + " de " + this._palo);
    }
    clear() {
        return;
    }
}
class Baraja {
    constructor() {
        this.palos = ["bastos", "espadas", "oros", "copas"];
        this.mazo = [];
        this.carta = 0;
        this.quedan = 40;
        this.cartasUser = [];
        this.monton = [];
        this.barajar = () => {
            let newMazo = this.mazo.sort(function () { return (Math.random() - 0.5); });
            this.mazo = newMazo;
        };
        this.siguienteCarta = () => {
            let sigCarta = this.mazo[this.carta];
            this.carta++;
            this.quedan--;
            console.log(this.carta, '+ + ');
            if (this.quedan != 0) {
                return sigCarta + ' cartas restantes :' + this.quedan;
            }
            else {
                return 'No quedan mas cartas';
            }
        };
        this.cuantasCartas = (cantidadCartas) => {
            this.cartasUser = [];
            if (this.quedan > cantidadCartas) {
                for (let cartas = 0; cartas < cantidadCartas; cartas++) {
                    const element = this.mazo[cartas];
                    this.cartasUser.push(element);
                    this.monton.push(element);
                    this.quedan--;
                    this.mazo.splice(cartas, 1);
                }
                return this.cartasUser + ' cartas restantes :' + this.quedan;
            }
            else {
                return 'No quedan mas cartas, quedan: ' + this.quedan;
            }
        };
        this.cartasMonton = () => {
            console.log(this.monton.length, 'lengthhh');
            if (this.monton.length == 0) {
                return 'Aun no hay cartas repartidas';
            }
            else {
                return this.monton;
            }
        };
        this.crearCartas(this.mazo);
    }
    crearCartas(mazo) {
        this.palos.forEach(function (palo) {
            for (var numCarta = 1; numCarta <= 10; numCarta++) {
                let carta = new Carta(numCarta, palo);
                mazo.push(carta);
            }
        });
    }
}
let cartasEspañolas = new Baraja;
cartasEspañolas.barajar();
// console.log(cartasEspañolas.mazo, 'Mazo Barajeado');
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.siguienteCarta());
// console.log(cartasEspañolas.cuantasCartas(2),'Dame 2');
console.log(cartasEspañolas.cuantasCartas(7), 'Dame 7');
console.log(cartasEspañolas.cartasMonton());
