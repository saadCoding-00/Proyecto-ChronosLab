import { Injectable } from '@angular/core';
import { HomeData, ServicesData, ReportsData, TimeEvaluatorData, ContactData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  readonly homeData: HomeData = {
    eyebrow: 'ChronosLab',
    heading: 'Investigamos la distribución del tiempo en entornos digitales contemporáneos.',
    description:
      'ChronosLab desarrolla estudios cuantitativos y cualitativos sobre el uso del tiempo en estudiantes, teletrabajo, redes sociales y videojuegos. Transformamos datos conductuales en evidencia útil para diseñar políticas, programas formativos y estrategias organizacionales basadas en resultados verificables.',
    focus1: { title: 'Estudiantes', body: 'Trayectorias de estudio, concentración sostenida y balance entre tareas y ocio.' },
    focus2: { title: 'Teletrabajo', body: 'Dinámicas de trabajo remoto, pausas cognitivas y eficiencia operacional.' },
    focus3: { title: 'Redes sociales', body: 'Patrones de exposición, autorregulación y bienestar digital.' },
    focus4: { title: 'Videojuegos', body: 'Engagement, micro-momentos y diseño de experiencias lúdicas sostenibles.' },
    insight1: {
      imageSrc: 'assets/images/student-analysis.svg',
      imageAlt: 'Análisis de hábitos de estudio',
      title: 'Analítica de estudio',
      body: 'Visualizamos avances, foco y ritmo académico con métricas claras.'
    },
    insight2: {
      imageSrc: 'assets/images/remote-work.svg',
      imageAlt: 'Panel de teletrabajo productivo',
      title: 'Teletrabajo eficiente',
      body: 'Medimos productividad remota y ciclos de descanso saludable.'
    },
    insight3: {
      imageSrc: 'assets/images/social-analytics.svg',
      imageAlt: 'Indicadores de redes sociales',
      title: 'Redes con propósito',
      body: 'Detectamos patrones de uso y bienestar digital en tiempo real.'
    },
    insight4: {
      imageSrc: 'assets/images/gaming-insights.svg',
      imageAlt: 'Insights de videojuegos',
      title: 'Gaming responsable',
      body: 'Equilibramos diversión, recuperación y objetivos personales.'
    }
  };

  readonly servicesData: ServicesData = {
    heading: 'Servicios',
    eyebrow: 'Servicios de investigación y diagnóstico sobre el uso del tiempo digital.',
    card1: {
      title: 'Análisis de productividad académica',
      body: 'Medimos hábitos de estudio, niveles de atención y resultados académicos mediante métricas comparables y trazables.'
    },
    card2: {
      title: 'Estudios de ocio digital',
      body: 'Analizamos patrones de consumo en redes sociales y videojuegos para evaluar su impacto en bienestar y hábitos cotidianos.'
    },
    card3: {
      title: 'Optimización del teletrabajo',
      body: 'Identificamos fricciones y oportunidades en equipos remotos para mejorar eficiencia, equilibrio y coordinación interfuncional.'
    },
    buttonLabel: 'Más informaciones'
  };

  readonly reportsData: ReportsData = {
    eyebrow: 'Informes',
    heading: 'Consulta informes técnicos disponibles para descarga o lectura en línea.',
    openPdfLabel: 'Abrir PDF',
    downloadLabel: 'Descargar'
  };

  readonly timeEvaluatorData: TimeEvaluatorData = {
    sectionKicker: 'Diagnóstico rápido',
    heading: 'TimeEvaluator',
    description: 'Explora cómo distribuyes tu tiempo digital y recibe recomendaciones personalizadas.',
    labels: {
      profile: 'Perfil',
      name: 'Nombre',
      lastName: 'Apellido',
      age: 'Edad',
      notes: 'Notas',
      studyHours: 'Horas de estudio',
      workHours: 'Horas de trabajo',
      gamingHours: 'Horas de videojuegos',
      socialHours: 'Horas en redes sociales',
      result: 'Resultado',
      productive: 'productivo',
      productiveHours: 'Horas productivas',
      hours: 'horas',
      recommendation: 'Recomendación',
      pdfButton: 'Descargar PDF'
    },
    placeholders: {
      name: 'Ingresa tu nombre',
      lastName: 'Ingresa tu apellido',
      age: 'Ingresa tu edad',
      notes: 'Notas adicionales'
    },
    options: {
      estudiante: 'Estudiante',
      teletrabajador: 'Teletrabajador',
      gamer: 'Gamer'
    },
    pdf: {
      title: 'Reporte TimeEvaluator',
      userDataTitle: 'Datos del usuario',
      timeDataTitle: 'Distribución del tiempo',
      resultTitle: 'Resultado',
      recommendationTitle: 'Recomendación',
      notesLabel: 'Notas'
    },
    messages: {
      estudianteAlto:
        'Estudiante: Excelente balance. Mantén tus hábitos y reserva pausas breves para recargar energía. Consolida sesiones de estudio de 50-60 minutos y protege horarios de descanso.',
      estudianteMedio:
        'Estudiante: Buen punto de partida. Ajusta pequeños bloques de distracción para subir tu productividad. Prueba una rutina Pomodoro y evita multitarea en redes sociales.',
      estudianteBajo:
        'Estudiante: Atención. Tu tiempo productivo es bajo; prioriza tareas clave y limita las interrupciones. Define metas diarias y reduce videojuegos/redes en horarios académicos.',
      teletrabajadorAlto:
        'Teletrabajador: Excelente balance. Mantén tus hábitos y reserva pausas breves para recargar energía. Mantén bloques de enfoque profundo y calendariza reuniones en ventanas cortas.',
      teletrabajadorMedio:
        'Teletrabajador: Buen punto de partida. Ajusta pequeños bloques de distracción para subir tu productividad. Agrupa tareas similares y limita notificaciones durante las horas pico.',
      teletrabajadorBajo:
        'Teletrabajador: Atención. Tu tiempo productivo es bajo; prioriza tareas clave y limita las interrupciones. Crea un horario fijo y separa el tiempo personal del laboral.',
      gamerAlto:
        'Gamer: Excelente balance. Mantén tus hábitos y reserva pausas breves para recargar energía. Sigue equilibrando ocio y productividad; planifica descansos activos.',
      gamerMedio:
        'Gamer: Buen punto de partida. Ajusta pequeños bloques de distracción para subir tu productividad. Establece límites por sesión y asigna primero tus tareas prioritarias.',
      gamerBajo:
        'Gamer: Atención. Tu tiempo productivo es bajo; prioriza tareas clave y limita las interrupciones. Define un tope diario de juego y reemplaza una sesión por estudio o trabajo.'
    }
  };

  readonly contactData: ContactData = {
    eyebrow: 'Contacto',
    heading: 'Conversemos sobre tu necesidad de análisis o investigación.',
    labels: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar'
    },
    placeholders: {
      name: 'Nombre completo',
      email: 'nombre@institucion.edu',
      message: 'Describe el objetivo del estudio'
    },
    errors: {
      name: 'Indica tu nombre (mínimo 2 caracteres).',
      email: 'Indica un email válido.',
      message: 'Describe con más detalle (mínimo 10 caracteres).'
    },
    successMessage: 'Gracias. Tu mensaje se ha enviado correctamente.'
  };
}
