import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Pagina_docente',
  templateUrl: './Pagina_docente.component.html',
  styleUrls: ['./Pagina_docente.component.css']
})
export class Pagina_docenteComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }


  ver_horario_docente(){

    this.router.navigate(['/Horario_docente']);//Me envia a la ruta horario_docente
  }

  ver_salario(){

    this.router.navigate(['/Remuneracion_docente']);//Me envia a la ruta remuneracion_docente
  }

  ver_perfil_docente(){

    this.router.navigate(['/Perfil_docente']);//Me envia a la ruta perfil_docente
  }

}
