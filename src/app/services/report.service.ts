import { Injectable } from '@angular/core';

export interface ReportItem {
  title: string;
  description: string;
  fileName: string;
}

/**
 * Servicio para gestionar el catálogo de informes PDF disponibles.
 */
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly reports: ReportItem[] = [
    {
      title: 'Informe de productividad académica',
      description: 'Hallazgos sobre hábitos de estudio y rendimiento digital.',
      fileName: 'informe-productividad-academica.pdf'
    },
    {
      title: 'Informe de ocio digital',
      description: 'Análisis del consumo en redes sociales y videojuegos.',
      fileName: 'informe-ocio-digital.pdf'
    },
    {
      title: 'Informe de teletrabajo',
      description: 'Indicadores clave para equipos remotos y bienestar laboral.',
      fileName: 'informe-teletrabajo.pdf'
    }
  ];

  /**
   * Devuelve la lista completa de informes disponibles.
   */
  getReports(): ReportItem[] {
    return this.reports;
  }

  /**
   * Construye la URL pública del PDF almacenado en assets.
   * @param fileName Nombre del archivo PDF dentro de assets/pdfs.
   */
  getReportUrl(fileName: string): string {
    return `assets/pdfs/${fileName}`;
  }
}
