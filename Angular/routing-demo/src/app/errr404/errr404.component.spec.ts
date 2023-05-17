import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errr404Component } from './errr404.component';

describe('Errr404Component', () => {
  let component: Errr404Component;
  let fixture: ComponentFixture<Errr404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Errr404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errr404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
