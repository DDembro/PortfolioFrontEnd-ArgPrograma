export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    fotoPerfil: string;
    acercaDe: string;

    constructor(nombre: string, apellido: string, descripcion: string, fotoPerfil: string, acercaDe: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.fotoPerfil = fotoPerfil;
        this.acercaDe = acercaDe;
    }
}