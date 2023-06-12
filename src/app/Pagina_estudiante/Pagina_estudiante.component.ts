import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Pagina_estudiante',
  templateUrl: './Pagina_estudiante.component.html',
  styleUrls: ['./Pagina_estudiante.component.css']
})
export class Pagina_estudianteComponent implements OnInit {
  mostrarHorario = false;              // Agrega la variable mostrar aquí
  mostrarCalificaciones = false;       // Agrega la variable mostrar aquí
  mostrarPerfil = false;               // Agrega la variable mostrar aquí

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ver_horario_estudiante(){
    this.mostrarHorario = true;
    this.mostrarCalificaciones = false;
    this.mostrarPerfil = false;
  }

  ver_calificaciones_estudiante(){
    this.mostrarCalificaciones = true;
    this. mostrarHorario = false;
    this.mostrarPerfil = false;
  }

  ver_perfil_estudiante(){
    this.mostrarPerfil = true;
    this.mostrarHorario = false;
    this.mostrarCalificaciones = false;
  }

  //INTERFAZ MODIFICADA-REVISAR
  // ver_horario_estudiante(){
  //   this.router.navigate(['/Horario_estudiante']);//Me envia a la ruta horario_estudiante
  // }

  // ver_calificaciones_estudiante(){
  //   this.router.navigate(['/Calificaciones_estudiante']);//Me envia a la ruta calificaciones_estudiante
  // }

  // ver_perfil_estudiante(){
  //   this.router.navigate(['/Perfil_estudiante']);//Me envia a la ruta perfil_estudiante
  // }


}
