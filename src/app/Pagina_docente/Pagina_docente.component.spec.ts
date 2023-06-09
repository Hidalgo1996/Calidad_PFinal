/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina_docenteComponent } from './Pagina_docente.component';

describe('Pagina_docenteComponent', () => {
  let component: Pagina_docenteComponent;
  let fixture: ComponentFixture<Pagina_docenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina_docenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina_docenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
