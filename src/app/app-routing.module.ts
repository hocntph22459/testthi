import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductadminComponent } from './pages/productadmin/productadmin.component';
import { ProductadminaddComponent } from './pages/productadminadd/productadminadd.component';
import { ProductadminupdateComponent } from './pages/productadminupdate/productadminupdate.component';
import { SinguppageComponent } from './pages/singuppage/singuppage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { ProductdetailpageComponent } from './pages/productdetailpage/productdetailpage.component';
const routes: Routes = [
  { path: '', component: ProductpageComponent },
  { path: 'products', component: ProductpageComponent },
  { path: 'products/:id', component: ProductdetailpageComponent },
  { path: 'admin/products', component: ProductadminComponent },
  { path: 'admin/products/add', component: ProductadminaddComponent },
  { path: 'admin/products/update/:id', component: ProductadminupdateComponent },
  { path: 'signup', component: SinguppageComponent },
  { path: 'signin', component: SigninpageComponent },
  { path: '**', component: NotfoundpageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
