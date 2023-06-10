import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

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

}
