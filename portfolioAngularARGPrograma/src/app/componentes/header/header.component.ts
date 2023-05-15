import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  persona: persona = new persona("","","","","");

  constructor(public sPersona: PersonaService, private tokenService: TokenService){}

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