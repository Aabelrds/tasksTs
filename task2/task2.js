var Serie = /** @class */ (function () {
    //CONSTRUCTORES
    function Serie(titulo, creador, numeroTemporadas, genero) {
        if (numeroTemporadas === void 0) { numeroTemporadas = 3; }
        if (genero === void 0) { genero = "terror"; }
        this._titulo = titulo;
        this._numeroTemporadas = numeroTemporadas;
        this._creador = creador;
        this._genero = genero;
    }
    ;
    //SETTERS & GETTERS
    Serie.prototype.getTitulo = function () {
        return this._titulo;
    };
    Serie.prototype.setTitulo = function (value) {
        this._titulo = value;
    };
    Serie.prototype.getNumeroTemporadas = function () {
        return this._numeroTemporadas;
    };
    Serie.prototype.setNumeroTemporadas = function (value) {
        this._numeroTemporadas = value;
    };
    Serie.prototype.getGenero = function () {
        return this._genero;
    };
    Serie.prototype.setGenero = function (value) {
        this._genero = value;
    };
    Serie.prototype.getCreador = function () {
        return this._creador;
    };
    Serie.prototype.setCreador = function (value) {
        this._creador = value;
    };
    Serie.prototype.toString = function () {
        console.log("Titulo: " + this._titulo);
        console.log("Temporadas: " + this._numeroTemporadas);
        console.log("Creador: " + this._creador);
        console.log("Genero: " + this._genero);
    };
    return Serie;
}());
var newSerie = new Serie("Dexter", "Jhon Wan");
newSerie.toString();
