import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/modelos/producto.modelos';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit, OnDestroy {
  productoId:Number = 0;
  producto?: IProducto;
  private subscription: any;

  constructor(private _activatedRoute: ActivatedRoute, private _api: ApiService) { }
  ngOnInit(): void {
      this.subscription = this._activatedRoute.params.subscribe((parametroUrl) => {
        this.productoId = Number(parametroUrl['id']);
      })
      this._api.getProduct(this.productoId).subscribe((producto: IProducto) => {
        this.producto = producto;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
