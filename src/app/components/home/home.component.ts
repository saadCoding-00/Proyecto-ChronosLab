import { Component, input } from '@angular/core';
import { HomeData } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = input.required<HomeData>();
}
