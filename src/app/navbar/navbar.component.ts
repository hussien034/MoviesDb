import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLgoin:boolean=false;
  constructor(private _Router:Router) {
    let token=localStorage.getItem('token');
    if(token){
      this.isLgoin=true
    }
    else{
      this.isLgoin=false
    }
   }
  logout(){
    localStorage.removeItem('token');
    this._Router.navigateByUrl('/signin')
  }
  ngOnInit(): void {
  }

}
