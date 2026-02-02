import { Component, input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  eyebrow = input<string>('');
  heading = input<string>('');
  card1Title = input<string>('');
  card1Body = input<string>('');
  card2Title = input<string>('');
  card2Body = input<string>('');
  card3Title = input<string>('');
  card3Body = input<string>('');
}
