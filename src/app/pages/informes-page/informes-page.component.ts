import { Component, inject } from '@angular/core';
import { SiteDataService } from 'src/app/services/site-data.service';

@Component({
  selector: 'app-informes-page',
  templateUrl: './informes-page.component.html',
  styleUrls: ['./informes-page.component.css']
})
export class InformesPageComponent {
  private readonly dataService = inject(SiteDataService);

  data = this.dataService.reportsData;
}
