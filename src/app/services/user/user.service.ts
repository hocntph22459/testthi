import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Iuser from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public api = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  signup(data: Iuser): Observable<Iuser[]> {
    return this.http.post<Iuser[]>(this.api, data)
  }
  signin(data: Iuser): Observable<Iuser[]> {
    return this.http.post<Iuser[]>(this.api, data)
  }
}
