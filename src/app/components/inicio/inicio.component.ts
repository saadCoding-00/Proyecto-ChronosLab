import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  eyebrow = input<string>('');
  heading = input<string>('');
  description = input<string>('');

  primaryCtaLabel = input<string>('');
  secondaryCtaLabel = input<string>('');

  summaryTitle = input<string>('');
  summaryItem1 = input<string>('');
  summaryItem2 = input<string>('');
  summaryItem3 = input<string>('');
}
