import { Component, inject } from '@angular/core';
import { SiteDataService } from 'src/app/services/site-data.service';

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.css']
})
export class ContactoPageComponent {
  private readonly dataService = inject(SiteDataService);

  data = this.dataService.contactData;
}
