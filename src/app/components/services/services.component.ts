import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesEyebrow = input<string>('');
  servicesHeading = input<string>('');
  card1Title = input<string>('');
  card1Body = input<string>('');
  card2Title = input<string>('');
  card2Body = input<string>('');
  card3Title = input<string>('');
  card3Body = input<string>('');
  buttonLabel = input<string>('');

  buttonClick = output<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
