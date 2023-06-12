import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-productadminadd',
  templateUrl: './productadminadd.component.html',
  styleUrls: ['./productadminadd.component.css']
})
export class ProductadminaddComponent {
  formProduct!: UntypedFormGroup
  constructor(
    private fb: UntypedFormBuilder,
    private producServices: ProductService,
    private Router: Router,
  ) {
  }
  submitForm() {
    if(this.formProduct.valid){
      this.producServices.CreateProducts(this.formProduct.value).subscribe(()=>{
        alert('thêm sản phẩm thành công')
        this.Router.navigate(['/admin/products'])
      })
    } else{
      alert('vui long nhap tat ca cac truong')
    }
  }
  ngOnInit():void {
    this.formProduct = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
  }
}
