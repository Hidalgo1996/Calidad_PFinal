import { Busqueda_dniComponent } from './../Busqueda_dni/Busqueda_dni.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { SharedService } from '../Service/shared.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private dialogRef: MatDialogRef<LoginComponent>, public sharedService: SharedService) { }

  alert: boolean = false;

  /**
   * Objeto
   */
  usuarioLogin= new FormGroup({

    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 

 
  ngOnInit() {}

/**
 * Metodo para validar los datos ingresados por el usuario
 */
  ingresoLogin() {

    if (this.usuarioLogin.value.usuario== "kevin" && this.usuarioLogin.value.password=="123") {

      this.sharedService.temp = 1;
      this.router.navigate(['/Pagina_estudiante']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } 

    if (this.usuarioLogin.value.usuario== "carlos" && this.usuarioLogin.value.password=="12345") {
      
      this.sharedService.temp = 1;
      this.router.navigate(['/Pagina_docente']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } else {

      this.alert= true;
      setTimeout(() => this.alert= false, 4000);
    }
  }


  /**
   * Metodo de login
   */
  busquedaDni(){

    this.dialog.open(Busqueda_dniComponent)
  }

}
