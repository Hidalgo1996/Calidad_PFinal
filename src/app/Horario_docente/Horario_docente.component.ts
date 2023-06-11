import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface_horario_docente } from '../horario_docente_interface/interface_horario_docente';

@Component({
  selector: 'app-Horario_docente',
  templateUrl: './Horario_docente.component.html',
  styleUrls: ['./Horario_docente.component.css']
})
export class Horario_docenteComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['asignatura', 'curso', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']

  data = [{
    asignatura: 'Calidad de software',
    curso: '7-4',
    lunes: '-',
    martes: '-',
    miercoles: '-',
    jueves: '12:00 - 14:00',
    viernes: '-',
    sabado: '-',

  },
  {
    asignatura: 'Desarrollo web',
    curso: '7-1',
    lunes: '12:00 - 14:00',
    martes: '-',
    miercoles: '-',
    jueves: '-',
    viernes: '-',
    sabado: '8:00 - 9:00',

  },
  {
    asignatura: 'Calidad de software',
    curso: '7-1',
    lunes: '-',
    martes: '-',
    miercoles: '-',
    jueves: '-',
    viernes: '10:00 - 12:00',
    sabado: '-',

  },
  {
    asignatura: 'Desarrollo web',
    curso: '7-3',
    lunes: '-',
    martes: '-',
    miercoles: '12:00 - 14:00',
    jueves: '-',
    viernes: '-',
    sabado: '-',

  },
  
  


  ];


  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
  };


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Interface_horario_docente>(this.data as Interface_horario_docente[]);
    console.log(this.data);
  }


  regresar_pagina_docente(){

    this.router.navigate(['/Pagina_docente']);//Me envia a la ruta pagina_docente
  }

}
