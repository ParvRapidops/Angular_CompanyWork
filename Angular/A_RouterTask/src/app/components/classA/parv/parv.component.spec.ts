import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvComponent } from './parv.component';

describe('ParvComponent', () => {
  let component: ParvComponent;
  let fixture: ComponentFixture<ParvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
