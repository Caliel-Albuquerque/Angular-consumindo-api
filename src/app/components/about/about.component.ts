import { Component } from '@angular/core';
import { ButtonComponent } from '../general/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
