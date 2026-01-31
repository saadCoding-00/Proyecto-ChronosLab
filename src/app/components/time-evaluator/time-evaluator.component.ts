import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

type Profile = 'estudiante' | 'teletrabajador' | 'gamer';

@Component({
  selector: 'app-time-evaluator',
  templateUrl: './time-evaluator.component.html',
  styleUrls: ['./time-evaluator.component.css']
})
export class TimeEvaluatorComponent {
  readonly profileLabels: Record<Profile, string> = {
    estudiante: 'Estudiante',
    teletrabajador: 'Teletrabajador',
    gamer: 'Gamer'
  };

  readonly form;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group(
      {
        profile: ['estudiante' as Profile, Validators.required],
        studyHours: [0, [Validators.min(0), Validators.max(24)]],
        workHours: [0, [Validators.min(0), Validators.max(24)]],
        gamingHours: [0, [Validators.min(0), Validators.max(24)]],
        socialHours: [0, [Validators.min(0), Validators.max(24)]]
      },
      { nonNullable: true }
    );
  }

  get totalHours(): number {
    const { studyHours, workHours, gamingHours, socialHours } = this.form.getRawValue();
    return (studyHours ?? 0) + (workHours ?? 0) + (gamingHours ?? 0) + (socialHours ?? 0);
  }

  get productiveHours(): number {
    const { studyHours, workHours } = this.form.getRawValue();
    return (studyHours ?? 0) + (workHours ?? 0);
  }

  get productivePercent(): number {
    const total = this.totalHours;
    if (total <= 0) {
      return 0;
    }
    const percent = (this.productiveHours / total) * 100;
    return Math.max(0, Math.min(100, Math.round(percent)));
  }

  get progressClass(): string {
    if (this.productivePercent >= 70) {
      return 'progress progress--good';
    }
    if (this.productivePercent >= 40) {
      return 'progress progress--warn';
    }
    return 'progress progress--risk';
  }

  get message(): string {
    const profile = this.form.controls['profile'].value;
    const percent = this.productivePercent;

    if (percent >= 70) {
      return this.getProfileMessage(profile, 'alto');
    }
    if (percent >= 40) {
      return this.getProfileMessage(profile, 'medio');
    }
    return this.getProfileMessage(profile, 'bajo');
  }

  private getProfileMessage(profile: Profile, level: 'alto' | 'medio' | 'bajo'): string {
    const profileName = this.profileLabels[profile];
    const base = {
      alto: `${profileName}: Excelente balance. Mantén tus hábitos y reserva pausas breves para recargar energía.`,
      medio: `${profileName}: Buen punto de partida. Ajusta pequeños bloques de distracción para subir tu productividad.`,
      bajo: `${profileName}: Atención. Tu tiempo productivo es bajo; prioriza tareas clave y limita las interrupciones.`
    };

    const tips = {
      estudiante: {
        alto: 'Consolida sesiones de estudio de 50-60 minutos y protege horarios de descanso.',
        medio: 'Prueba una rutina Pomodoro y evita multitarea en redes sociales.',
        bajo: 'Define metas diarias y reduce videojuegos/redes en horarios académicos.'
      },
      teletrabajador: {
        alto: 'Mantén bloques de enfoque profundo y calendariza reuniones en ventanas cortas.',
        medio: 'Agrupa tareas similares y limita notificaciones durante las horas pico.',
        bajo: 'Crea un horario fijo y separa el tiempo personal del laboral.'
      },
      gamer: {
        alto: 'Sigue equilibrando ocio y productividad; planifica descansos activos.',
        medio: 'Establece límites por sesión y asigna primero tus tareas prioritarias.',
        bajo: 'Define un tope diario de juego y reemplaza una sesión por estudio o trabajo.'
      }
    };

    const suggestion = tips[profile]?.[level] ?? 'Ajusta tu rutina con objetivos concretos y revisa tus avances cada semana.';
    return `${base[level]} ${suggestion}`;
  }
}
