import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  isLogged = false;

  listaNavbar:any;

  constructor(private datos:PortfolioService, private tokenService: TokenService, private router: Router){}

  ngOnInit(): void {
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    this.datos.obtenerDatos().subscribe(data=>{

      this.listaNavbar = data.datosNavbar;
      
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

}
