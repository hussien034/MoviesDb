import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
tvShows:any=[];
  constructor(private _MoviesService:MoviesService) {
    }
    getTrvShowsItems(pageNum:any){
      this._MoviesService.getTrendingMovies('tv',pageNum).subscribe((response)=>{
        this.tvShows=response.results
      })
    }

  ngOnInit(): void {
    this.getTrvShowsItems(1)

  }

}


