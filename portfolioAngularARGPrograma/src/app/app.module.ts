import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreyectosComponent } from './componentes/preyectos/preyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditHeaderComponent } from './componentes/header/edit-header.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewProyectosComponent } from './componentes/preyectos/new-proyectos.component';
import { EditProyectosComponent } from './componentes/preyectos/edit-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadesComponent,
    NavbarComponent,
    FooterComponent,
    PreyectosComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent,
    EditHeaderComponent,
    NewHabilidadesComponent,
    EditHabilidadesComponent,
    NewProyectosComponent,
    EditProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
