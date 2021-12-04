class Electrodomestico {
  protected precio: number;
  protected color: string;
  protected consumo: string;
  protected peso: number;

  public LETRA: string = "F";

  constructor(
    precio: number = 100,
    peso: number = 10,
    color: string = "blanco"
  ) {
    this.precio = precio;
    this.peso = peso;
    this.color = color;
  }
  public comprobarConsumo(consumo: string) {
    switch (consumo) {
      case "A":
        this.consumo = consumo;
        break;
      case "B":
        this.consumo = consumo;
        break;
      case "C":
        this.consumo = consumo;
        break;
      case "D":
        this.consumo = consumo;
        break;
      case "E":
        this.consumo = consumo;
        break;
      case "F":
        this.consumo = consumo;
        break;

      default:
        this.consumo = this.LETRA;
        break;
    }
  }
}

class Lavadora extends Electrodomestico {
  constructor(precio, peso, color, consumo) {
    super();
    this.precio = precio;
    this.peso = peso;
    this.color = color;
    this.consumo = consumo;
  }
}

const balay = new Lavadora(150, 12, "rojo", "H");

console.log(balay.comprobarConsumo("A"));
