import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreaterComponent } from './form-creater.component';

describe('FormCreaterComponent', () => {
  let component: FormCreaterComponent;
  let fixture: ComponentFixture<FormCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
