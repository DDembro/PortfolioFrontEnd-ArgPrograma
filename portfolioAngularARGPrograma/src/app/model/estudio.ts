export class Estudio {

    id?: number;
    nombreE: string;
    fechaE: string;
    tituloE: string;

    constructor(nombreE: string, fechaE: string, tituloE: string) {

        this.nombreE = nombreE;
        this.fechaE = fechaE;
        this.tituloE = tituloE;
    }
}