/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Horario_estudianteComponent } from './Horario_estudiante.component';

describe('Horario_estudianteComponent', () => {
  let component: Horario_estudianteComponent;
  let fixture: ComponentFixture<Horario_estudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Horario_estudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Horario_estudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
