import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[]  => {
  const personajes = localStorage.getItem('personajes');

  return personajes ? JSON.parse(personajes): [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characteres = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('personajes', JSON.stringify(this.characteres()));
  })

  addCharacter(nuevoPersonaje: Character) {
    if (!nuevoPersonaje.name || !nuevoPersonaje.power || nuevoPersonaje.power < 0) {
      return;
    }
    this.characteres.update((listado) => [...listado, nuevoPersonaje]);
  }

}