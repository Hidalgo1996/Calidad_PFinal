import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface_calificaciones_estudiante } from '../calificaciones_estudiante_interface/interface_calificaciones_estudiante';

@Component({
  selector: 'app-Calificaciones_estudiante',
  templateUrl: './Calificaciones_estudiante.component.html',
  styleUrls: ['./Calificaciones_estudiante.component.css']
})
export class Calificaciones_estudianteComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['asignatura', 'parcial_1', 'parcial_2', 'promedio_final']

  data = [{

    asignatura: 'Calidad de software',
    parcial_1: 10.00,
    parcial_2: 8.00,
    promedio_final: 9.00
  },
  {

    asignatura: 'Desarrollo web',
    parcial_1: 8.00,
    parcial_2: 7.50,
    promedio_final: 7.75
  },
  {

    asignatura: 'Base de datos avanzado',
    parcial_1: 9.00,
    parcial_2: 6.45,
    promedio_final: 7.73
  },
  {

    asignatura: 'Seguridad informatica',
    parcial_1: 8.00,
    parcial_2: 8.00,
    promedio_final: 8.00
  }

  ];


  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
  };


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Interface_calificaciones_estudiante>(this.data as Interface_calificaciones_estudiante[]);
    console.log(this.data);
  }


  regresar_pagina_estudiante(){

    this.router.navigate(['/Pagina_estudiante']);//Me envia a la ruta pagina_estudiante
  }

}
