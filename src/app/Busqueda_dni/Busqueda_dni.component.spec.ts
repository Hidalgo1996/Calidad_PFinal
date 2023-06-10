/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Busqueda_dniComponent } from './Busqueda_dni.component';

describe('Busqueda_dniComponent', () => {
  let component: Busqueda_dniComponent;
  let fixture: ComponentFixture<Busqueda_dniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Busqueda_dniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Busqueda_dniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
