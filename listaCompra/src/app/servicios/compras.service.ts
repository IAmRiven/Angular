import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private storageKey: string = 'listaCompra';

  getListaCompras(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) as string) || []
  }

  agregarCompra(producto: string) {
    let listaCompra = this.getListaCompras()
    listaCompra.push(producto)
    localStorage.setItem(this.storageKey, JSON.stringify(listaCompra))
  }

  eliminarCompra(posicion: number) {
    let listaCompra = this.getListaCompras()
    listaCompra.splice(posicion, 1)
    localStorage.setItem(this.storageKey, JSON.stringify(listaCompra))
  }
}
