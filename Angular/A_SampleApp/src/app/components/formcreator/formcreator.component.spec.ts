import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreatorComponent } from './formcreator.component';

describe('FormcreatorComponent', () => {
  let component: FormcreatorComponent;
  let fixture: ComponentFixture<FormcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
