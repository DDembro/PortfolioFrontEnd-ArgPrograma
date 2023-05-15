import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {

  proyec: Proyecto = null;

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyec = data;
      }, err => {
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyec).subscribe(
      data => {
        alert("Proyecto Modificado")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
