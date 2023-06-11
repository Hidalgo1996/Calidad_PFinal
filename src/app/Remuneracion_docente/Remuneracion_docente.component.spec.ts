/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Remuneracion_docenteComponent } from './Remuneracion_docente.component';

describe('Remuneracion_docenteComponent', () => {
  let component: Remuneracion_docenteComponent;
  let fixture: ComponentFixture<Remuneracion_docenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Remuneracion_docenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Remuneracion_docenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
