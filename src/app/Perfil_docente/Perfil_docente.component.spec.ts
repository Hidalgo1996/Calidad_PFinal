/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Perfil_docenteComponent } from './Perfil_docente.component';

describe('Perfil_docenteComponent', () => {
  let component: Perfil_docenteComponent;
  let fixture: ComponentFixture<Perfil_docenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil_docenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil_docenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
