import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Remuneracion_docente',
  templateUrl: './Remuneracion_docente.component.html',
  styleUrls: ['./Remuneracion_docente.component.css']
})
export class Remuneracion_docenteComponent implements OnInit {

  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
  };

  ngOnInit(): void {
  }

  regresar_pagina_docente(){

    this.router.navigate(['/Pagina_docente']);//Me envia a la ruta pagina_estudiante
  }

}
