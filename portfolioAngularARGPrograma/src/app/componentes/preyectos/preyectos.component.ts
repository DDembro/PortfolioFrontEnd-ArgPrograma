import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-preyectos',
  templateUrl: './preyectos.component.html',
  styleUrls: ['./preyectos.component.css']
})
export class PreyectosComponent {

  listaProyectos:any;

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService){}

  proyec: Proyecto[] = [];

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.proyec = data });
  }

  delete(id?: number) {
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la Educacion")
        }
      )
    }
  }


}
