import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Perfil_estudiante',
  templateUrl: './Perfil_estudiante.component.html',
  styleUrls: ['./Perfil_estudiante.component.css']
})
export class Perfil_estudianteComponent implements OnInit {

  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
  };

  ngOnInit(): void {
  }

  regresar_pagina_estudiante(){

    this.router.navigate(['/Pagina_estudiante']);//Me envia a la ruta pagina_estudiante
  }


}
