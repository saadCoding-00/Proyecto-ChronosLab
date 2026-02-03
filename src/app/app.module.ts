import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServicesComponent } from './components/services/services.component';
import { InformesComponent } from './components/informes/informes.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimeEvaluatorComponent } from './components/time-evaluator/time-evaluator.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { InformesPageComponent } from './pages/informes-page/informes-page.component';
import { EvaluadorPageComponent } from './pages/evaluador-page/evaluador-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    ServicesComponent,
    InformesComponent,
    ReportsComponent,
    ContactComponent,
    TimeEvaluatorComponent,
    InicioPageComponent,
    ServiciosPageComponent,
    InformesPageComponent,
    EvaluadorPageComponent,
    ContactoPageComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
