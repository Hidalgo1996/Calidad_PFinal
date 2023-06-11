import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface_horario_estudiante } from '../horario_estudiante_interface/interface_horario_estudiante';


@Component({
  selector: 'app-Horario_estudiante',
  templateUrl: './Horario_estudiante.component.html',
  styleUrls: ['./Horario_estudiante.component.css']
})
export class Horario_estudianteComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['asignatura', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']

  data = [{
    asignatura: 'Calidad de software',
    lunes: '10:00 - 12:00',
    martes: '-',
    miercoles: '-',
    jueves: '12:00 - 14:00',
    viernes: '-',
    sabado: '-',

  },
  {
    asignatura: 'Inteligencia de negocios',
    lunes: '13:00 - 14:00',
    martes: '-',
    miercoles: '-',
    jueves: '12:00 - 14:00',
    viernes: '-',
    sabado: '-',

  },
  {
    asignatura: 'Contabilidad',
    lunes: '18:00 - 20:00',
    martes: '-',
    miercoles: '-',
    jueves: '-',
    viernes: '7:00 - 9:00',
    sabado: '-',

  },
  {
    asignatura: 'Marco legal',
    lunes: '-',
    martes: '-',
    miercoles: '10:00 - 12:00',
    jueves: '-',
    viernes: '-',
    sabado: '-',

  },
  {
    asignatura: 'Seguridad informatica',
    lunes: '-',
    martes: '-',
    miercoles: '-',
    jueves: '-',
    viernes: '12:00 - 15:00',
    sabado: '-',

  },


  ];


  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
  };


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Interface_horario_estudiante>(this.data as Interface_horario_estudiante[]);
    console.log(this.data);
  }


  regresar_pagina_estudiante(){

    this.router.navigate(['/Pagina_estudiante']);//Me envia a la ruta pagina_estudiante
  }


}
