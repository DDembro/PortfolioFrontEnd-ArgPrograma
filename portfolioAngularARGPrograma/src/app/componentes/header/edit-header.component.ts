import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent {

  perso: persona;

  constructor(private sPersona: PersonaService, private router: Router) {}

  ngOnInit() {
    this.sPersona.getPersona().subscribe(
      data => {
        this.perso = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    this.sPersona.update(this.perso).subscribe(
      data => {
        alert("Persona Modificada")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    )
  }

}