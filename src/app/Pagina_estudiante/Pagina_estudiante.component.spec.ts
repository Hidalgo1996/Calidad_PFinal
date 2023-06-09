/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina_estudianteComponent } from './Pagina_estudiante.component';

describe('Pagina_estudianteComponent', () => {
  let component: Pagina_estudianteComponent;
  let fixture: ComponentFixture<Pagina_estudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina_estudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina_estudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
