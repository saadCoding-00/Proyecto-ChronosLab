import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { InformesPageComponent } from './pages/informes-page/informes-page.component';
import { EvaluadorPageComponent } from './pages/evaluador-page/evaluador-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioPageComponent },
  { path: 'servicios', component: ServiciosPageComponent },
  { path: 'informes', component: InformesPageComponent },
  { path: 'evaluador', component: EvaluadorPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
