import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { SiteDataService } from 'src/app/services/site-data.service';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css']
})
export class ServiciosPageComponent {
  private readonly dataService = inject(SiteDataService);

  data = this.dataService.servicesData;

  showModal(): void {
    Swal.fire({
      text: 'Transformamos los datos de uso digital en estrategias accionables para potenciar el rendimiento y el bienestar. A través de diagnósticos precisos, ayudamos a instituciones, empresas y personas a entender sus hábitos para eliminar distracciones, optimizar la carga de trabajo y recuperar el equilibrio entre la productividad académica, el ocio consciente y la eficiencia laboral.',
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  }
}
