import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getData<T> (url: string) {
    let token = localStorage.getItem('token')
    let header:HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get<T>(url, {headers: header});
  }

  addData<T>(url: string, data: T) {
    return this.http.post<T>(url, data);
  }

  deleteData(url: string) {
    return this.http.delete(url);
  }
}
