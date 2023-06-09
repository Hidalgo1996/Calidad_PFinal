/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina_inicialComponent } from './Pagina_inicial.component';

describe('Pagina_inicialComponent', () => {
  let component: Pagina_inicialComponent;
  let fixture: ComponentFixture<Pagina_inicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina_inicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina_inicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
