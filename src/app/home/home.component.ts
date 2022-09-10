import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
trendingMovies:any=[];
trendindTv:any=[];
  constructor(private _MoviesService:MoviesService,private spinner: NgxSpinnerService) { }
getTrindingItems(pageNum:any){

  this._MoviesService.getTrendingMovies('movie',pageNum).subscribe((response)=>{

  this.trendingMovies=response.results; console.log(this.trendingMovies);


  })
}
getTrvShowsItems(pageNum:any){
  this._MoviesService.getTrendingMovies('tv',pageNum).subscribe((response)=>{
    this.trendindTv=response.results
  })
}
  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => {

      this.spinner.hide();
    }, 3000);
    this.getTrindingItems(1);
    this.getTrvShowsItems(1);
  }

}
