import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.css']
})
export class PepoleComponent implements OnInit {

  pepole:any=[];
  constructor(private _MoviesService:MoviesService) { }
  getPepoleItems(pageNum:any){
    this._MoviesService.getTrendingMovies('network',pageNum).subscribe((response)=>{
      this.pepole=response.results
    })
  }

  ngOnInit(): void {
    this.getPepoleItems(1)
  }

}
