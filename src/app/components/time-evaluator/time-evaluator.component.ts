import { Component, input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';

type Profile = 'estudiante' | 'teletrabajador' | 'gamer';

@Component({
  selector: 'app-time-evaluator',
  templateUrl: './time-evaluator.component.html',
  styleUrls: ['./time-evaluator.component.css']
})
export class TimeEvaluatorComponent {
  sectionKicker = input<string>('');
  heading = input<string>('');
  description = input<string>('');

  profileLabel = input<string>('');
  nameLabel = input<string>('');
  lastNameLabel = input<string>('');
  ageLabel = input<string>('');
  notesLabel = input<string>('');

  namePlaceholder = input<string>('');
  lastNamePlaceholder = input<string>('');
  agePlaceholder = input<string>('');
  notesPlaceholder = input<string>('');

  studyHoursLabel = input<string>('');
  workHoursLabel = input<string>('');
  gamingHoursLabel = input<string>('');
  socialHoursLabel = input<string>('');

  optionEstudianteLabel = input<string>('');
  optionTeletrabajadorLabel = input<string>('');
  optionGamerLabel = input<string>('');

  resultTitle = input<string>('');
  productiveLabel = input<string>('');
  productiveHoursLabel = input<string>('');
  hoursLabel = input<string>('');
  recommendationTitle = input<string>('');

  pdfButtonLabel = input<string>('');
  pdfTitle = input<string>('');
  pdfUserDataTitle = input<string>('');
  pdfTimeDataTitle = input<string>('');
  pdfResultTitle = input<string>('');
  pdfRecommendationTitle = input<string>('');
  pdfNotesLabel = input<string>('');

  messageEstudianteAlto = input<string>('');
  messageEstudianteMedio = input<string>('');
  messageEstudianteBajo = input<string>('');
  messageTeletrabajadorAlto = input<string>('');
  messageTeletrabajadorMedio = input<string>('');
  messageTeletrabajadorBajo = input<string>('');
  messageGamerAlto = input<string>('');
  messageGamerMedio = input<string>('');
  messageGamerBajo = input<string>('');

  readonly form;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        age: [0, [Validators.min(0), Validators.max(120)]],
        notes: [''],
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
    const level: 'alto' | 'medio' | 'bajo' = percent >= 70 ? 'alto' : percent >= 40 ? 'medio' : 'bajo';

    if (profile === 'estudiante') {
      return level === 'alto'
        ? this.messageEstudianteAlto()
        : level === 'medio'
          ? this.messageEstudianteMedio()
          : this.messageEstudianteBajo();
    }

    if (profile === 'teletrabajador') {
      return level === 'alto'
        ? this.messageTeletrabajadorAlto()
        : level === 'medio'
          ? this.messageTeletrabajadorMedio()
          : this.messageTeletrabajadorBajo();
    }

    return level === 'alto'
      ? this.messageGamerAlto()
      : level === 'medio'
        ? this.messageGamerMedio()
        : this.messageGamerBajo();
  }

  private getProfileLabel(profile: Profile): string {
    if (profile === 'estudiante') {
      return this.optionEstudianteLabel();
    }
    if (profile === 'teletrabajador') {
      return this.optionTeletrabajadorLabel();
    }
    return this.optionGamerLabel();
  }

  generatePdf(): void {
    const values = this.form.getRawValue();
    const doc = new jsPDF();

    let y = 16;
    doc.setFontSize(16);
    doc.text(this.pdfTitle(), 14, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(this.pdfUserDataTitle(), 14, y);
    y += 6;
    doc.text(`${this.nameLabel()}: ${values.name}`, 14, y);
    y += 6;
    doc.text(`${this.lastNameLabel()}: ${values.lastName}`, 14, y);
    y += 6;
    doc.text(`${this.ageLabel()}: ${values.age}`, 14, y);
    y += 8;
    const notes = values.notes?.trim();
    if (notes) {
      doc.text(`${this.pdfNotesLabel()}:`, 14, y);
      y += 6;
      const notesLines = doc.splitTextToSize(notes, 180);
      doc.text(notesLines, 14, y);
      y += notesLines.length * 6 + 4;
    }

    doc.text(this.pdfTimeDataTitle(), 14, y);
    y += 6;
    doc.text(`${this.profileLabel()}: ${this.getProfileLabel(values.profile)}`, 14, y);
    y += 6;
    doc.text(`${this.studyHoursLabel()}: ${values.studyHours}`, 14, y);
    y += 6;
    doc.text(`${this.workHoursLabel()}: ${values.workHours}`, 14, y);
    y += 6;
    doc.text(`${this.gamingHoursLabel()}: ${values.gamingHours}`, 14, y);
    y += 6;
    doc.text(`${this.socialHoursLabel()}: ${values.socialHours}`, 14, y);
    y += 8;

    doc.text(this.pdfResultTitle(), 14, y);
    y += 6;
    doc.text(`${this.productivePercent}% ${this.productiveLabel()}`, 14, y);
    y += 6;
    doc.text(
      `${this.productiveHoursLabel()}: ${this.productiveHours} / ${this.totalHours} ${this.hoursLabel()}`,
      14,
      y
    );
    y += 8;

    doc.text(this.pdfRecommendationTitle(), 14, y);
    y += 6;
    const messageLines = doc.splitTextToSize(this.message, 180);
    doc.text(messageLines, 14, y);

    doc.save('time-evaluator.pdf');
  }
}
