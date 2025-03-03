import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../modelos/producto.modelos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'http://localhost:5000/api/productos';

  // private _http = inject(HttpClient);

  constructor(private _httpClient: HttpClient) { }

  public getProducts(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(this.url);
  }

  public getProduct(id: Number): Observable<IProducto> {
    return this._httpClient.get<IProducto>(`${this.url}/${id}`);

  }

}
