import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {
  formsignin!:UntypedFormGroup
  constructor(
    private userServices:UserService,
    private fb:UntypedFormBuilder,
  ){

  }
  Signin(){
    if(this.formsignin.valid){
      console.log(this.formsignin.value)
    }else{
      alert('vui long nhap tat ca cac truong')
    }
  }
  ngOnInit(){
    this.formsignin = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }
}
