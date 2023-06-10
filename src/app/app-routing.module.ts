import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina_inicialComponent } from './Pagina_inicial/Pagina_inicial.component';
import { Pagina_estudianteComponent } from './Pagina_estudiante/Pagina_estudiante.component';
import { Pagina_docenteComponent } from './Pagina_docente/Pagina_docente.component';
import { Horario_estudianteComponent } from './Horario_estudiante/Horario_estudiante.component';

const routes: Routes = [

  {path:'', component:Pagina_inicialComponent},
  {path:'Pagina_inicial', component:Pagina_inicialComponent},
  {path:'Pagina_estudiante', component:Pagina_estudianteComponent},
  {path:'Pagina_docente', component:Pagina_docenteComponent},
  {path:'Horario_estudiante', component:Horario_estudianteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
