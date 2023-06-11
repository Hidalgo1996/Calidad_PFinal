import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina_inicialComponent } from './Pagina_inicial/Pagina_inicial.component';
import { Pagina_estudianteComponent } from './Pagina_estudiante/Pagina_estudiante.component';
import { Pagina_docenteComponent } from './Pagina_docente/Pagina_docente.component';
import { Horario_estudianteComponent } from './Horario_estudiante/Horario_estudiante.component';
import { Calificaciones_estudianteComponent } from './Calificaciones_estudiante/Calificaciones_estudiante.component';
import { Perfil_estudianteComponent } from './Perfil_estudiante/Perfil_estudiante.component';
import { Perfil_docenteComponent } from './Perfil_docente/Perfil_docente.component';
import { Remuneracion_docenteComponent } from './Remuneracion_docente/Remuneracion_docente.component';
import { Horario_docenteComponent } from './Horario_docente/Horario_docente.component';

const routes: Routes = [

  {path:'', component:Pagina_inicialComponent},
  {path:'Pagina_inicial', component:Pagina_inicialComponent},
  {path:'Pagina_estudiante', component:Pagina_estudianteComponent},
  {path:'Pagina_docente', component:Pagina_docenteComponent},
  {path:'Horario_estudiante', component:Horario_estudianteComponent},
  {path:'Calificaciones_estudiante', component:Calificaciones_estudianteComponent},
  {path:'Perfil_estudiante', component:Perfil_estudianteComponent},
  {path:'Horario_docente', component:Horario_docenteComponent},
  {path:'Perfil_docente', component:Perfil_docenteComponent},
  {path:'Remuneracion_docente', component:Remuneracion_docenteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
