import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFormValidationComponent } from './check-form-validation.component';

describe('CheckFormValidationComponent', () => {
  let component: CheckFormValidationComponent;
  let fixture: ComponentFixture<CheckFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
