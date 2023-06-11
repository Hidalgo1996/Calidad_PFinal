import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Perfil_docente',
  templateUrl: './Perfil_docente.component.html',
  styleUrls: ['./Perfil_docente.component.css']
})
export class Perfil_docenteComponent implements OnInit {

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
