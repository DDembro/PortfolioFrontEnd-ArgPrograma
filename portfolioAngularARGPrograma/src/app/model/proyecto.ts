export class Proyecto {

    id?: number;
    nombreP: string;
    fechaP: string;
    descripcionP: string;
    linkP: string;

    constructor(nombreP: string, fechaP: string, descripcionP: string, linkP: string) {

        this.nombreP = nombreP;
        this.fechaP = fechaP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
    }
}
