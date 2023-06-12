import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductdetailpageComponent } from './pages/productdetailpage/productdetailpage.component';
import { ProductadminComponent } from './pages/productadmin/productadmin.component';
import { ProductadminaddComponent } from './pages/productadminadd/productadminadd.component';
import { ProductadminupdateComponent } from './pages/productadminupdate/productadminupdate.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { SinguppageComponent } from './pages/singuppage/singuppage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent,
    ProductdetailpageComponent,
    ProductadminComponent,
    ProductadminaddComponent,
    ProductadminupdateComponent,
    NotfoundpageComponent,
    SinguppageComponent,
    SigninpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
