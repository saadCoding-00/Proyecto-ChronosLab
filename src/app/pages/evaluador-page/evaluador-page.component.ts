import { Component, inject } from '@angular/core';
import { SiteDataService } from 'src/app/services/site-data.service';

@Component({
  selector: 'app-evaluador-page',
  templateUrl: './evaluador-page.component.html',
  styleUrls: ['./evaluador-page.component.css']
})
export class EvaluadorPageComponent {
  private readonly dataService = inject(SiteDataService);

  data = this.dataService.timeEvaluatorData;
}
