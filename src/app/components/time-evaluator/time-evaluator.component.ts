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
    const pageWidth = doc.internal.pageSize.getWidth();

    const primary = { r: 79, g: 70, b: 229 };
    const text = { r: 15, g: 23, b: 42 };
    const muted = { r: 100, g: 116, b: 139 };

    const addSectionTitle = (title: string, y: number): number => {
      doc.setFillColor(238, 242, 255);
      doc.roundedRect(12, y - 5, pageWidth - 24, 10, 3, 3, 'F');
      doc.setTextColor(primary.r, primary.g, primary.b);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 16, y + 2);
      doc.setTextColor(text.r, text.g, text.b);
      doc.setFont('helvetica', 'normal');
      return y + 12;
    };

    let y = 16;
    doc.setFillColor(primary.r, primary.g, primary.b);
    doc.rect(0, 0, pageWidth, 22, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(this.pdfTitle(), 14, 14);

    doc.setTextColor(text.r, text.g, text.b);
    doc.setFont('helvetica', 'normal');
    y = 32;

    y = addSectionTitle(this.pdfUserDataTitle(), y);
    doc.setFontSize(11);
    doc.text(`${this.nameLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.name), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.lastNameLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.lastName), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.ageLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.age), 70, y);
    y += 8;
    doc.setTextColor(text.r, text.g, text.b);
    const notes = values.notes?.trim();
    if (notes) {
      doc.text(`${this.pdfNotesLabel()}:`, 16, y);
      y += 6;
      doc.setTextColor(muted.r, muted.g, muted.b);
      const notesLines = doc.splitTextToSize(notes, pageWidth - 32);
      doc.text(notesLines, 16, y);
      doc.setTextColor(text.r, text.g, text.b);
      y += notesLines.length * 6 + 4;
    }

    y = addSectionTitle(this.pdfTimeDataTitle(), y);
    doc.setFontSize(11);
    doc.text(`${this.profileLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(this.getProfileLabel(values.profile), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.studyHoursLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.studyHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.workHoursLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.workHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.gamingHoursLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.gamingHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${this.socialHoursLabel()}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.socialHours), 70, y);
    y += 8;
    doc.setTextColor(text.r, text.g, text.b);

    y = addSectionTitle(this.pdfResultTitle(), y);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primary.r, primary.g, primary.b);
    doc.text(`${this.productivePercent}% ${this.productiveLabel()}`, 16, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(
      `${this.productiveHoursLabel()}: ${this.productiveHours} / ${this.totalHours} ${this.hoursLabel()}`,
      16,
      y
    );
    y += 8;

    y = addSectionTitle(this.pdfRecommendationTitle(), y);
    const messageLines = doc.splitTextToSize(this.message, pageWidth - 32);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(messageLines, 16, y);
    doc.setTextColor(text.r, text.g, text.b);

    doc.save('time-evaluator.pdf');
  }
}
