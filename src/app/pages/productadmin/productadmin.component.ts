import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import Iproduct from 'src/app/types/product';
@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrls: ['./productadmin.component.css']
})
export class ProductadminComponent {
  public products :Iproduct[] = [];

  constructor(
   private producServices:ProductService
    ){
    this.producServices.GetallProducts().subscribe((data)=>this.products = data)
  }
  Remove(id:string){
   this.producServices.RemoveProducts(id).subscribe(()=>{
    this.products = this.products.filter(product=>product.id !== id)
   })
  }
}
