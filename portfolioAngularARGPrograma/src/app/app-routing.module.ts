import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditHeaderComponent } from './componentes/header/edit-header.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades.component';
import { NewProyectosComponent } from './componentes/preyectos/new-proyectos.component';
import { EditProyectosComponent } from './componentes/preyectos/edit-proyectos.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '', component:InicioComponent},

  {path: 'nuevoestudio', component:NewEducacionComponent},
  {path: 'editarestudio/:id', component:EditEducacionComponent},

  {path: 'editaracercade', component:EditAcercaDeComponent},

  {path: 'editardescripcion', component:EditHeaderComponent},

  {path: 'nuevahabilidad', component:NewHabilidadesComponent},
  {path: 'editarhabilidad/:id', component:EditHabilidadesComponent},

  {path: 'nuevoproyecto', component:NewProyectosComponent},
  {path: 'editarproyecto/:id', component:EditProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }