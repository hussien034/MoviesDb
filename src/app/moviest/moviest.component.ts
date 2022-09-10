import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-moviest',
  templateUrl: './moviest.component.html',
  styleUrls: ['./moviest.component.css']
})
export class MoviestComponent implements OnInit {
  trendingMovies:any=[];
  constructor(private _MoviesService:MoviesService,private spinner: NgxSpinnerService) { }
  getTrindingItems(pageNum:any){
    this._MoviesService.getTrendingMovies('movie',pageNum).subscribe((response)=>{
      this.trendingMovies=response.results
    })
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
this.getTrindingItems(1);
      this.spinner.hide();
    }, 3000);


  }

}
