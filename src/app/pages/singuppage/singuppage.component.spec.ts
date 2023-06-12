import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinguppageComponent } from './singuppage.component';

describe('SinguppageComponent', () => {
  let component: SinguppageComponent;
  let fixture: ComponentFixture<SinguppageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinguppageComponent]
    });
    fixture = TestBed.createComponent(SinguppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
