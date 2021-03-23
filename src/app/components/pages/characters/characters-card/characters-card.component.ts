import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from '@shared/interfaces/data-interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent {

  @Input() character: Character;

  toggleFavorite():void {

  }

  getIcon(isFavorite: boolean):string {
  return isFavorite ? 'heart-solid' : 'heart.svg';
  }
}
