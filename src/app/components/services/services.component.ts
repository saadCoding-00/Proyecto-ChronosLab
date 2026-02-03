import { Component, input, output } from '@angular/core';
import { ServicesData } from '../../models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  data = input.required<ServicesData>();

  buttonClick = output<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
