import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  //get all Data
  get(url): Observable<any> {
    return this.http.get<any>(this.baseURL + url);
  }

  //post Data
  post(url, data): Observable<any> {
    return this.http.post<any>(this.baseURL + url, data);
  }

  //put Data
  put(url, data): Observable<any> {
    return this.http.put<any>(this.baseURL + url, data);
  }

  //delete Data
  delete(url): Observable<any> {
    return this.http.delete<any>(this.baseURL + url);
  }
}
