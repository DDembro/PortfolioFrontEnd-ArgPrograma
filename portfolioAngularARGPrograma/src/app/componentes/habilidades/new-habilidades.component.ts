import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent {

  habilidad: string = '';

  constructor(private sHabilidad: SHabilidadService, private router: Router) {}

  ngOnInit() {

  }

  onCreate(): void {
    const hab = new Habilidad(this.habilidad);
    this.sHabilidad.save(hab).subscribe(
      data=>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }
}