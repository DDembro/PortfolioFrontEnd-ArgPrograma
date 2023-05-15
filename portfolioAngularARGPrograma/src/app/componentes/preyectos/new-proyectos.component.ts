import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent {

  nombreP: string = '';
  fechaP: string = '';
  descripcionP: string = '';
  linkP: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) {}

  ngOnInit() {

  }

  onCreate(): void {
    const proy = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.linkP);
    this.sProyecto.save(proy).subscribe(
      data=>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}