import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  
  constructor(private http: HttpClient) { }

  getImages(dt: any): Observable<any>{
    const uri = `?earth_date=${dt.year}-${dt.month}-${dt.day}&api_key=${environment.api_key}`
    return this.http.get(environment.api+uri)
  }
}
