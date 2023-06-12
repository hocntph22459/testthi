import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductadminupdateComponent } from './productadminupdate.component';

describe('ProductadminupdateComponent', () => {
  let component: ProductadminupdateComponent;
  let fixture: ComponentFixture<ProductadminupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductadminupdateComponent]
    });
    fixture = TestBed.createComponent(ProductadminupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
