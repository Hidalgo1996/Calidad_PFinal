import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Pagina_estudiante',
  templateUrl: './Pagina_estudiante.component.html',
  styleUrls: ['./Pagina_estudiante.component.css']
})
export class Pagina_estudianteComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }


  ver_horario_estudiante(){

    this.router.navigate(['/Horario_estudiante']);//Me envia a la ruta horario_estudiante
  }

  ver_calificaciones_estudiante(){

    this.router.navigate(['/Calificaciones_estudiante']);//Me envia a la ruta calificaciones_estudiante
  }

  ver_perfil_estudiante(){

    this.router.navigate(['/Perfil_estudiante']);//Me envia a la ruta perfil_estudiante
  }

}
