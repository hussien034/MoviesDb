import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  network:any=[];
  getNetwoekItems(pageNum:any){
    this._MoviesService.getTrendingMovies('network',pageNum).subscribe((response)=>{
      this.network=response.results
    })
  }
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
this.getNetwoekItems(1);
  }

}
