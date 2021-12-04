
class Serie {
    private _titulo: string;
    private _numeroTemporadas: number;
    private _entregado: boolean;
    private _genero: string;
    private _creador: string;
    
//CONSTRUCTORES
constructor (titulo: string, creador: string, numeroTemporadas:number = 3, genero: string="terror"){
this._titulo= titulo;
this._numeroTemporadas= numeroTemporadas;
this._creador= creador;
this._genero= genero;
};


//SETTERS & GETTERS
    public getTitulo(): string {
        return this._titulo;
    }
    public setTitulo(value: string) {
        this._titulo = value;
    }
    public getNumeroTemporadas(): number {
        return this._numeroTemporadas;
    }
    public setNumeroTemporadas(value: number) {
        this._numeroTemporadas = value;
    }
    public getGenero(): string {
        return this._genero;
    }
    public setGenero(value: string) {
        this._genero = value;
    }
    public getCreador(): string {
        return this._creador;
    }
    public setCreador(value: string) {
        this._creador = value;
    }
    public toString(){
        console.log("Titulo: " + this._titulo);
        console.log("Temporadas: " + this._numeroTemporadas);
        console.log("Creador: " + this._creador);
        console.log("Genero: " + this._genero);
    }
}

const newSerie = new Serie("Dexter", "Jhon Wan");

newSerie.toString();