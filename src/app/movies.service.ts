import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
getTrendingMovies(medaitype:any,num:number):Observable<any>
{
  return this._http.get(`https://api.themoviedb.org/3/${medaitype}/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=${num}`)
}
getDetails(movie_id:number):Observable<any>
{
  return this._http.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_&language=en-US`)
}
  constructor(private _http:HttpClient) { }
}
