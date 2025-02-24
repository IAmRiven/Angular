import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador: number = 0;
  @Input() mensajeDelPadre: string = "";

  aumentar() {
    this.contador++
  }

  disminuir() {
    this.contador--
  }
}