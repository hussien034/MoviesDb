import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
currentId:number=0;
details:any=[];
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.currentId=this._ActivatedRoute.snapshot.params['id'];

  }
getAllDetails(currentId:number){
  this._MoviesService.getDetails(currentId).subscribe((response)=>
  {
this.details=response;
console.log(this.details);
  })
}
  ngOnInit(): void {
    this.getAllDetails(this.currentId);
  }

}
