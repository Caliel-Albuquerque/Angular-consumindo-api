import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) public nameCharacter: string = "";

  @Input({ required: true }) public imageCharacter: string = "";

  @Input({ required: true }) public statusCharacter: string = "Alive";

  @Input({required: true}) public speciesCharacter: string = "";
}
