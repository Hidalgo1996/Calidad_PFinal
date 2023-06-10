import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/Login.component';
import { Pagina_docenteComponent } from './Pagina_docente/Pagina_docente.component';
import { Pagina_estudianteComponent } from './Pagina_estudiante/Pagina_estudiante.component';
import { FooterComponent } from './Footer/Footer.component';
import { CabeceraComponent } from './Cabecera/Cabecera.component';
import { Pagina_inicialComponent } from './Pagina_inicial/Pagina_inicial.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SharedService } from './Service/shared.service';
import { Busqueda_dniComponent } from './Busqueda_dni/Busqueda_dni.component';
import { Horario_estudianteComponent } from './Horario_estudiante/Horario_estudiante.component';




@NgModule({
  declarations: [									
    AppComponent,
      LoginComponent,
      Pagina_docenteComponent,
      Pagina_estudianteComponent,
      FooterComponent,
      CabeceraComponent,
      Pagina_inicialComponent,
      Busqueda_dniComponent,
      Horario_estudianteComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
