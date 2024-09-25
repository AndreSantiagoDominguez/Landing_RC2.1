import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-r',
  templateUrl: './card-r.component.html',
  styleUrl: './card-r.component.css'
})
export class CardRComponent {

  @Input() title: string = '';  // Recibe el título
  @Input() text: string = '';   // Recibe el texto

}
