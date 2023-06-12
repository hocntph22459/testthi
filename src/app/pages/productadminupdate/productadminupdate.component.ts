import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-productadminupdate',
  templateUrl: './productadminupdate.component.html',
  styleUrls: ['./productadminupdate.component.css']
})
export class ProductadminupdateComponent {
  public product: any = {};
  formProduct!: UntypedFormGroup
  constructor(
    private fb: UntypedFormBuilder,
    private producServices: ProductService,
    private Router: Router,
    private router: ActivatedRoute
  ) {
    const id: any = this.router.snapshot.paramMap.get('id')
    this.producServices.GetOneProducts(id).subscribe((data) => this.product = data)
  }
  submitForm() {
    if (this.formProduct.valid) {
      const id: any = this.router.snapshot.paramMap.get('id')
      console.log(id)
      this.producServices.UpdateProducts(id, this.formProduct.value).subscribe(() => {
        alert('cập nhật phẩm thành công')
        this.Router.navigate(['/admin/products'])
      })
    }
    else{
      alert('vui long nhap tat ca cac truong')
    }
  }
  ngOnInit(): void {
    this.formProduct = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
  }
}
