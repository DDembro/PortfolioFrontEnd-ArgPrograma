import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  persona: persona = new persona("","","","","");

  constructor(private tokenService: TokenService, private sPersona: PersonaService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercaDe();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercaDe(): void {
    this.sPersona.getPersona().subscribe(data => {this.persona = data});
  }

}