import { Component } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SHabilidadService } from 'src/app/servicios/s-habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  constructor(private sHabilidad: SHabilidadService, private tokenService: TokenService){}

  habs: Habilidad[] = [];

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe(data => { this.habs = data });
  }

  delete(id?: number) {
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la Habilidad")
        }
      )
    }
  }

}
