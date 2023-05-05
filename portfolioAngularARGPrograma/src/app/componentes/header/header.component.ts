import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  persona: persona = new persona("","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    
    this.personaService.getPersona().subscribe(data => {this.persona = data});

  }

}

/*  Todo esto es como lo traia antes desde el Json por si me mando una cagada con el back

import { PortfolioService } from 'src/app/servicios/portfolio.service';


miPortfolio:any;

constructor(private datos:PortfolioService){}

ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data=>{

    this.miPortfolio = data.personal;
  });
} */