import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import Iproduct from 'src/app/types/product';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {
  public products :Iproduct[] = [];

  constructor(private producServices:ProductService){
    this.producServices.GetallProducts().subscribe((data)=>this.products = data)
  }
}
