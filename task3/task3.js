var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precio, peso, color) {
        if (precio === void 0) { precio = 100; }
        if (peso === void 0) { peso = 10; }
        if (color === void 0) { color = "blanco"; }
        this.LETRA = "F";
        this.precio = precio;
        this.peso = peso;
        this.color = color;
    }
    Electrodomestico.prototype.comprobarConsumo = function (consumo) {
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
    };
    return Electrodomestico;
}());
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precio, peso, color, consumo) {
        var _this = _super.call(this) || this;
        _this.precio = precio;
        _this.peso = peso;
        _this.color = color;
        _this.consumo = consumo;
        return _this;
    }
    return Lavadora;
}(Electrodomestico));
var balay = new Lavadora(150, 12, "rojo", "H");
console.log(balay.comprobarConsumo("A"));
