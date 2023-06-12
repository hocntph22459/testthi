import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-singuppage',
  templateUrl: './singuppage.component.html',
  styleUrls: ['./singuppage.component.css']
})
export class SinguppageComponent {
  formsignup!:UntypedFormGroup
  constructor(
    private fb:UntypedFormBuilder,
    private Userservice:UserService,
    private Router:Router
  ) {

  }
  Signup() {
    if(this.formsignup.valid){
      this.Userservice.signup(this.formsignup.value).subscribe(()=>{
        alert('Signup successfully')
        this.Router.navigate(['/signin'])
      })
      // console.log(this.formsignup.value)
    }else{
      alert('vui long nhap du cac truong')
    }
  }
  ngOnInit() {
    this.formsignup = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }
}
