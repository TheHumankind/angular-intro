import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupFormComponent } from './login-popup-form.component';

describe('LoginPopupFormComponent', () => {
  let component: LoginPopupFormComponent;
  let fixture: ComponentFixture<LoginPopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPopupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
