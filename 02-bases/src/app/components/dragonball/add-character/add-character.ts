import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'add-dragonball-character',
  templateUrl: './add-character.html',
})
export class AddCharacter {

  name = signal('');
  power = signal(0);

  nuevoPersonaje = output<Character>();
  
  addCharacter() {
  
      const nuevoPersonaje: Character = {
        id: Math.floor(Math.random() * 10000),
        name: this.name(),
        power: this.power()
      }

      this.nuevoPersonaje.emit(nuevoPersonaje);
      this.resetFields()
    }
  
    resetFields(){
      this.name.set('');
      this.power.set(0);
    }
}
