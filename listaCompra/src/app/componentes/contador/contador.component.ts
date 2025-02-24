import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() entrada: string = "";

  contador: number = 0;

  aumentar() {
    this.contador++
  }

  disminuir() {
    this.contador--
  }
}