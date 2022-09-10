import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

AuthService
@Component({
  selector: 'app-signuo',
  templateUrl: './signuo.component.html',
  styleUrls: ['./signuo.component.css']
})
export class SignuoComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
    })
sendData(){
  this._AuthService.signup(this.registerForm.value).subscribe((response)=>{
    if(response.message=="success"){
      this._Router.navigateByUrl('/signin')
    }
    else{
      alert("You Alerady Register")
    }
  })
}
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
