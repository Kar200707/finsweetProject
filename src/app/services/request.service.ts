import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getData<T> (url: string):Observable<T> {
    return this.http.get<T>(url);
  }

  addData<T>(url: string, data: any) {
    let header:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<T>(url, data);
  }

}
