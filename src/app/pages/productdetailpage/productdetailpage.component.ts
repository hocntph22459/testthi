import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent {
  public product: any = {}
  constructor(
    private ProductService: ProductService,
    private Router: ActivatedRoute
  ) {
    const id: any = this.Router.snapshot.paramMap.get('id')
    this.ProductService.GetOneProducts(id).subscribe((data) => this.product = data)
  }
}
