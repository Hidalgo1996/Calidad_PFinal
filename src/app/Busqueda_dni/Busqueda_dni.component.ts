import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-Busqueda_dni',
  templateUrl: './Busqueda_dni.component.html',
  styleUrls: ['./Busqueda_dni.component.css']
})
export class Busqueda_dniComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<Busqueda_dniComponent>, public sharedService: SharedService) { }

  alert: boolean = false;

  /**
   * Objeto
   */
  usuarioLogin= new FormGroup({

    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 

 
  ngOnInit() {}



}
