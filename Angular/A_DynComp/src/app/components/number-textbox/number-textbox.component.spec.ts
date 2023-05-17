import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTextboxComponent } from './number-textbox.component';

describe('NumberTextboxComponent', () => {
  let component: NumberTextboxComponent;
  let fixture: ComponentFixture<NumberTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberTextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
