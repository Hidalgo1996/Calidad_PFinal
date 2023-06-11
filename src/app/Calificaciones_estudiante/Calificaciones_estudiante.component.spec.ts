/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Calificaciones_estudianteComponent } from './Calificaciones_estudiante.component';

describe('Calificaciones_estudianteComponent', () => {
  let component: Calificaciones_estudianteComponent;
  let fixture: ComponentFixture<Calificaciones_estudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calificaciones_estudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calificaciones_estudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
