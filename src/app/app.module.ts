import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicesComponent } from './components/services/services.component';
import { InformesComponent } from './components/informes/informes.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimeEvaluatorComponent } from './components/time-evaluator/time-evaluator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    ServiciosComponent,
    ServicesComponent,
    InformesComponent,
    ReportsComponent,
    ContactComponent,
    TimeEvaluatorComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
