import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
    });
    getData(){
      this._AuthService.signin(this.loginForm.value).subscribe((response)=>{
        if(response.message=="success"){
          localStorage.setItem('token',response.token
          )
          this._Router.navigateByUrl('/home')
        }
        else{
          alert(response.message)
        }
      })
    }
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
