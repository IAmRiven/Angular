import { Component, signal, computed } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './dragonball.html',
})
export class DragonballComponent {

  name = signal('');
  power = signal(0);

  characteres = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    }
  ])

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const nuevoPersonaje: Character = {
      id: this.characteres().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characteres.update(
      (list) => [...list, nuevoPersonaje]
    )
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
