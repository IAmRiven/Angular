import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball';

@Component({
  templateUrl: './dragonball-super.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, AddCharacter]
})
export class DragonballSuperComponent {

  public dragonballService = inject(DragonballService)

  
}
