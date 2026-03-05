# Exposicion del proyecto ChronosLab

## 1) Estructura general del proyecto

- src/
  - index.html: pagina HTML base donde se monta Angular.
  - main.ts: punto de entrada que arranca la aplicacion.
  - app/
    - app.module.ts: modulo principal donde se declaran los componentes.
    - app-routing.module.ts: configuracion de rutas (router).
    - app.component.*: componente raiz (layout general).
    - components/: componentes reutilizables (secciones).
    - pages/: componentes de pagina (rutas).
    - services/: servicios para datos y logica.
    - models/: interfaces/types para tipar la informacion.

## 2) Jerarquia desde el inicio hasta ver la pagina

1. El navegador carga index.html y encuentra <app-root>.
2. main.ts inicia AppModule.
3. AppModule arranca AppComponent como raiz.
4. AppComponent muestra el header, menu y el <router-outlet>.
5. El router carga el componente de pagina segun la URL.
6. La pagina renderiza un componente de seccion (home, services, etc.).

En resumen, el flujo es:
index.html -> main.ts -> AppModule -> AppComponent -> Router -> Page -> Component.

## 3) AppModule y declaraciones

AppModule es el centro del proyecto. Aqui se declaran todos los componentes que usa la app y se importan los modulos necesarios (BrowserModule, ReactiveFormsModule y AppRoutingModule).

Componentes declarados:
- AppComponent
- HomeComponent
- InicioComponent
- ServicesComponent
- InformesComponent
- ReportsComponent
- ContactComponent
- TimeEvaluatorComponent
- InicioPageComponent
- ServiciosPageComponent
- InformesPageComponent
- EvaluadorPageComponent
- ContactoPageComponent

## 4) Que es un componente y como esta declarado

Un componente en Angular es una pieza de UI con:
- Un selector HTML (ejemplo: app-home).
- Una plantilla HTML (templateUrl).
- Estilos CSS (styleUrls).
- Una clase TypeScript con la logica y datos.

Ejemplo de declaracion:

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { ... }

Los componentes se declaran en AppModule para que Angular los reconozca.

## 5) Componentes de pagina y componentes reutilizables

Componentes de pagina (pages) son los que se asocian a una ruta:
- InicioPageComponent
- ServiciosPageComponent
- InformesPageComponent
- EvaluadorPageComponent
- ContactoPageComponent

Componentes reutilizables (components) son secciones que se pueden poner en distintas paginas:
- HomeComponent
- InicioComponent
- ServicesComponent
- InformesComponent
- ReportsComponent
- ContactComponent
- TimeEvaluatorComponent

Cada pagina normalmente usa un solo componente reutilizable, por ejemplo:
- InicioPageComponent usa <app-home [data]="data">.
- ServiciosPageComponent usa <app-services [data]="data" (buttonClick)="showModal()">.
- InformesPageComponent usa <app-reports [data]="data">.
- EvaluadorPageComponent usa <app-time-evaluator [data]="data">.
- ContactoPageComponent usa <app-contact [data]="data">.

## 6) Rutas (router): como se usan y para que sirven

El router permite cambiar de pagina sin recargar el navegador.
En AppRoutingModule se definen rutas:
- /inicio -> InicioPageComponent
- /servicios -> ServiciosPageComponent
- /informes -> InformesPageComponent
- /evaluador -> EvaluadorPageComponent
- /contacto -> ContactoPageComponent
- / (vacio) redirige a /inicio
- ** redirige a /inicio si la ruta no existe

En AppComponent hay un <router-outlet> que es el hueco donde se renderiza la pagina activa.
Los enlaces del menu usan routerLink para navegar.

## 7) AppComponent: layout general

AppComponent define el esqueleto visual:
- Header con marca y menu.
- <router-outlet> para cargar paginas.
- Footer con el copyright.

Tambien tiene un dato de ejemplo (companyName) que se muestra en el header.

## 8) Datos y servicios

Los datos de la web estan centralizados en SiteDataService:
- homeData
- servicesData
- reportsData
- timeEvaluatorData
- contactData

Las paginas inyectan el servicio y pasan esos datos a los componentes por input.

El ReportService maneja la lista de informes y construye las URLs de los PDF en assets/pdfs.

## 9) Inputs y Outputs: reutilizacion real

En este proyecto se usa el nuevo sistema de Angular con input() y output():
- input() permite que un componente reciba datos desde fuera.
- output() permite emitir eventos hacia el padre.

Inputs reales en el proyecto:
- HomeComponent, ServicesComponent, ReportsComponent, ContactComponent, TimeEvaluatorComponent reciben [data].
- InicioComponent recibe varios textos (eyebrow, heading, description, etc.).

Output real en el proyecto:
- ServicesComponent expone (buttonClick). La pagina escucha ese evento y abre un modal con SweetAlert.

Esto permite reutilizar un componente en varios sitios cambiando solo los datos.

## 10) Ejemplo de reutilizacion (2 casos)

Caso 1: mismo componente, datos distintos
- Puedes usar <app-services> en otra pagina con otro objeto data.
- Cambia el texto del boton y las tarjetas sin crear un componente nuevo.

Caso 2: mismo componente, comportamiento distinto
- <app-services> emite (buttonClick).
- En una pagina puedes abrir un modal (showModal).
- En otra pagina podrias navegar a otra ruta o mostrar un formulario.

## 11) Resumen para explicarlo al profesor

- Angular arranca en index.html, main.ts y AppModule.
- AppComponent es el layout principal y contiene el router.
- El router decide que pagina cargar segun la URL.
- Cada pagina usa un componente reutilizable.
- Los datos vienen de servicios y se pasan por input().
- Las acciones de usuario pueden salir por output().
- Asi se puede reutilizar un componente y cambiar su contenido o comportamiento sin duplicarlo.

## 12) Ejemplo completo: Contacto (paso a paso)

Este ejemplo recorre todas las piezas reales del componente de contacto, desde el inicio de la app hasta que se ve en pantalla.

1) index.html
- El navegador carga index.html y encuentra el tag <app-root>.

2) main.ts
- Angular arranca AppModule y crea la aplicacion.

3) app.module.ts
- AppModule declara AppComponent, ContactComponent y ContactoPageComponent.
- Tambien importa AppRoutingModule para habilitar rutas.

4) app.component.html
- AppComponent pinta el layout general (header, menu, footer) y el <router-outlet>.

5) app-routing.module.ts
- Cuando la URL es /contacto, el router carga ContactoPageComponent.

6) contacto-page.component.ts (pages)
- Inyecta SiteDataService.
- Toma los datos de contacto (contactData).

7) contacto-page.component.html (pages)
- Renderiza el componente reutilizable con: <app-contact [data]="data"></app-contact>.

8) contact.component.ts (components)
- Define el componente real de contacto (selector app-contact).
- Recibe data con input.required<ContactData>().
- Crea el formulario reactivo y valida los campos.

9) contact.component.html (components)
- Dibuja el formulario usando los labels, placeholders y mensajes de data.
- Muestra errores si la validacion falla y un mensaje de exito al enviar.

10) contact.model.ts (models)
- Define la forma de los datos de contacto (ContactData).

11) site-data.service.ts (services)
- Define contactData con todos los textos y mensajes que usa el formulario.

Resultado final
- Cuando el usuario entra a /contacto, el router carga la pagina.
- La pagina pasa los datos al componente.
- El componente usa su HTML y CSS para mostrar el formulario en pantalla.
