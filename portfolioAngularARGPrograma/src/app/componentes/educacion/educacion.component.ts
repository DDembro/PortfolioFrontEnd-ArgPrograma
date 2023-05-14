import { Component } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  constructor(private sEducacion: SEstudioService, private tokenService: TokenService){}

  edu: Estudio[] = [];

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => { this.edu = data });
  }
}