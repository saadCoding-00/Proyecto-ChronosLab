import { Component, inject } from '@angular/core';
import { SiteDataService } from 'src/app/services/site-data.service';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent {
  private readonly dataService = inject(SiteDataService);

  data = this.dataService.homeData;
}
