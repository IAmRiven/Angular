import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ComprasService } from '../../servicios/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  listaCompra: string[] = [];
  productocomprado: string = "";
  mi_nombre: string = "Juan Antonio Rodríguez Toral"

  @Input() entradaCompras: string = "Soy un mensaje desde el padre";

  @ViewChild("btn") boton!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.listaCompra = this._comprasService.getListaCompras()
  }
  ngonDestroy() {
  }

  private _comprasService = inject(ComprasService)

  agregarProducto() {

    if (this.productocomprado != "") {
      this._comprasService.agregarCompra(this.productocomprado)
      this.listaCompra = this._comprasService.getListaCompras()
      this.productocomprado = ""
    }
    this.boton.nativeElement.focus()
  }

  borrarProducto(posicion: number) {
    this._comprasService.eliminarCompra(posicion)
    this.listaCompra = this._comprasService.getListaCompras()
  }

}
