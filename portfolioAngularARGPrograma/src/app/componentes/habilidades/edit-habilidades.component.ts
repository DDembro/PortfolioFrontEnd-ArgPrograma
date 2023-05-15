import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent {

  hab: Habilidad = null;

  constructor(private sHabilidad: SHabilidadService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err => {
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.hab).subscribe(
      data => {
        alert("Habilidad Modificada")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }

}