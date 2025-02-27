import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../modelos/producto.modelos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://fakestoreapi.com/products';

  // private _http = inject(HttpClient);

  constructor(private _httpClient: HttpClient) { }

  public getProducts(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(this.url);
  }

  public getProduct(id: Number): Observable<IProducto> {
    return this._httpClient.get<IProducto>(`${this.url}/${id}`);

  }

}
