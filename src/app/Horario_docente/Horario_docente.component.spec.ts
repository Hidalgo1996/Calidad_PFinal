/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Horario_docenteComponent } from './Horario_docente.component';

describe('Horario_docenteComponent', () => {
  let component: Horario_docenteComponent;
  let fixture: ComponentFixture<Horario_docenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horario_docenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horario_docenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
