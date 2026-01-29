import { Component } from '@angular/core';

import { ReportItem, ReportService } from '../../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports: ReportItem[];

  constructor(private reportService: ReportService) {
    this.reports = this.reportService.getReports();
  }

  getReportUrl(fileName: string): string {
    return this.reportService.getReportUrl(fileName);
  }
}
