# Proyecto ChronosLab

ChronosLab es una web corporativa de una sola página (SPA sin router) enfocada en el análisis del uso del tiempo en entornos digitales: estudiantes, teletrabajo, redes sociales y videojuegos. Su objetivo es comunicar de forma clara los servicios, la investigación y los informes técnicos que produce la organización.

## Qué hace la web

- Presenta la propuesta académica y el foco de investigación de ChronosLab.
- Describe los servicios de análisis y diagnóstico en contextos educativos, de ocio digital y trabajo remoto.
- Ofrece acceso a informes PDF descargables con resúmenes, metodología, resultados y recomendaciones.
- Incluye un formulario de contacto con validación básica para solicitudes de información.

## Qué contiene

- Secciones: Inicio, Servicios, Informes y Contacto.
- Componentes Angular para cada sección, integrados en una sola vista.
- Servicio `ReportService` que gestiona el catálogo de informes PDF.
- Informes PDF en `src/assets/pdfs` con formato corporativo (encabezados, secciones y tablas).
- Estilos globales y diseño responsive básico.

## Qué puede generar

- Informes descargables en PDF con contenido académico estructurado.
- Listados de informes con enlaces para abrir o descargar.
- Formularios de contacto validados para la recepción de solicitudes.

## Estructura principal

- `src/app/components/home` – Presentación institucional.
- `src/app/components/services` – Servicios y líneas de trabajo.
- `src/app/components/reports` – Listado de informes PDF.
- `src/app/components/contact` – Formulario de contacto reactivo.
- `src/app/services/report.service.ts` – Fuente de datos de informes.

## Ejecución local

```bash
npm install
npm start
```

Abrir en el navegador: http://localhost:4201/

## Testing (nivel básico)

Este proyecto incluye los tests mínimos solicitados:

- **Servicio:** verifica que `ReportService` devuelve datos.
	- Archivo: [src/app/services/report.service.spec.ts](src/app/services/report.service.spec.ts)
- **Componente:** verifica que `HomeComponent` se crea correctamente.
	- Archivo: [src/app/components/home/home.component.spec.ts](src/app/components/home/home.component.spec.ts)

### Comando para ejecutar los tests

```bash
npm test -- --watch=false
```

### Cómo verificar que se ejecutaron sin errores

En la terminal verás un resumen similar a:

```
Chrome Headless ...: Executed 3 of 3 SUCCESS
TOTAL: 3 SUCCESS
```