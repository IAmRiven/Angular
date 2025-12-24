import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonbal-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  characteres = input.required<Character[]>();
  listName = input.required<string>();
}
