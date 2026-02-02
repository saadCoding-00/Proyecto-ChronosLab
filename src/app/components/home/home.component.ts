import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eyebrow = input<string>('');
  heading = input<string>('');
  description = input<string>('');

  focus1Title = input<string>('');
  focus1Body = input<string>('');
  focus2Title = input<string>('');
  focus2Body = input<string>('');
  focus3Title = input<string>('');
  focus3Body = input<string>('');
  focus4Title = input<string>('');
  focus4Body = input<string>('');

  insight1ImageSrc = input<string>('');
  insight1ImageAlt = input<string>('');
  insight1Title = input<string>('');
  insight1Body = input<string>('');

  insight2ImageSrc = input<string>('');
  insight2ImageAlt = input<string>('');
  insight2Title = input<string>('');
  insight2Body = input<string>('');

  insight3ImageSrc = input<string>('');
  insight3ImageAlt = input<string>('');
  insight3Title = input<string>('');
  insight3Body = input<string>('');

  insight4ImageSrc = input<string>('');
  insight4ImageAlt = input<string>('');
  insight4Title = input<string>('');
  insight4Body = input<string>('');
}
