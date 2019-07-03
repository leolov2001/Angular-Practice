import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormsComponent } from './register-forms.component';

describe('RegisterFormsComponent', () => {
  let component: RegisterFormsComponent;
  let fixture: ComponentFixture<RegisterFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
