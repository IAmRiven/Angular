import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public usuario: any = {
    nombre: '',
    email: '',
  }

  enviar() {
    if (!(this.usuario.nombre === '' || this.usuario.email === '')) {
      console.log(this.usuario);
    }
  }

}
