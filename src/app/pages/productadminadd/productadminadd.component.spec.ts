import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductadminaddComponent } from './productadminadd.component';

describe('ProductadminaddComponent', () => {
  let component: ProductadminaddComponent;
  let fixture: ComponentFixture<ProductadminaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductadminaddComponent]
    });
    fixture = TestBed.createComponent(ProductadminaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
