import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {

  nombreE: string = '';
  fechaE: string = '';
  tituloE: string = '';

  constructor(private sEstudio: SEstudioService, private router: Router) {}

  ngOnInit() {

  }

  onCreate(): void {
    const estu = new Estudio(this.nombreE, this.fechaE, this.tituloE);
    this.sEstudio.save(estu).subscribe(
      data=>{
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}