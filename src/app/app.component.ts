import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyName = 'ChronosLab';

  scrollTo(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  showModal(message: string): void {
    Swal.fire({
      text: message,
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  }
}
