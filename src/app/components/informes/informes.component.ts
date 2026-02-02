import { Component, input } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {
  eyebrow = input<string>('');
  heading = input<string>('');

  report1Title = input<string>('');
  report1Body = input<string>('');
  report1Meta = input<string>('');

  report2Title = input<string>('');
  report2Body = input<string>('');
  report2Meta = input<string>('');

  report3Title = input<string>('');
  report3Body = input<string>('');
  report3Meta = input<string>('');
}
