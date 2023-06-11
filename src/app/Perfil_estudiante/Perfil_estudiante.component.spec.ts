/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Perfil_estudianteComponent } from './Perfil_estudiante.component';

describe('Perfil_estudianteComponent', () => {
  let component: Perfil_estudianteComponent;
  let fixture: ComponentFixture<Perfil_estudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perfil_estudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Perfil_estudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
