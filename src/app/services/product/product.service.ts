import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Iproduct from 'src/app/types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public api = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  GetallProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.api)
  }
  GetOneProducts(id: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${this.api}/${id}`)
  }
  CreateProducts(data: Iproduct): Observable<Iproduct[]> {
    return this.http.post<Iproduct[]>(this.api, data)
  }
  UpdateProducts(id: string, data: Iproduct): Observable<Iproduct[]> {
    return this.http.put<Iproduct[]>(`${this.api}/${id}`, data)
  }
  RemoveProducts(id: string): Observable<Iproduct[]> {
    return this.http.delete<Iproduct[]>(`${this.api}/${id}`)
  }
}
