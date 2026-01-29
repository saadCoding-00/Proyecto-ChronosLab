import { TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportService);
  });

  it('should return reports data', () => {
    const reports = service.getReports();
    expect(reports.length).toBeGreaterThan(0);
    expect(reports[0]).toEqual(
      jasmine.objectContaining({
        title: jasmine.any(String),
        description: jasmine.any(String),
        fileName: jasmine.any(String)
      })
    );
  });
});
