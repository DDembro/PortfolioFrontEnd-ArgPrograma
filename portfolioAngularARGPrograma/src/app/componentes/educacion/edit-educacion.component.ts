import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {

  estu: Estudio = null;

  constructor(private sEstudio: SEstudioService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data => {
        this.estu = data;
      }, err => {
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.update(id, this.estu).subscribe(
      data => {
        alert("Estudio Modificado")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

}
