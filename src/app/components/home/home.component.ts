import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../general/button/button.component';
import { CardComponent } from '../card/card.component';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../types/character.type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    CommonModule
  ],
  providers: [
    CharacterService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  characters: Array<{ id: number; image:string; name: string; status: string; species: string; }> = [];
  info: any;

  constructor(private service: CharacterService) {}

  ngOnInit(): void {
      this.service.getData().subscribe({
        next: (data) => {
          this.characters = data.results
          console.log(this.characters)
        }
      })
  }
}
