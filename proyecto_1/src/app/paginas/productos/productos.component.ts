import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { IProducto } from 'src/app/modelos/producto.modelos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private _api: ApiService) { }

  listaProductos: IProducto[] = [];

  ngOnInit(): void {
      this._api.getProducts().subscribe((datos: IProducto[]) => {
        this.listaProductos = datos;
      });
  }
  
}
