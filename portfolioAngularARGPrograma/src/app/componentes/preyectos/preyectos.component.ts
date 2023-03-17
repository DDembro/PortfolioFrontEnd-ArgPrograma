import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-preyectos',
  templateUrl: './preyectos.component.html',
  styleUrls: ['./preyectos.component.css']
})
export class PreyectosComponent {

  listaProyectos:any;

  constructor(private datos:PortfolioService){}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{

      this.listaProyectos = data.proyectos;
    });
  }

}
