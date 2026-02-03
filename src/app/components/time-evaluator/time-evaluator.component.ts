import { Component, input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { TimeEvaluatorData } from '../../models';

type Profile = 'estudiante' | 'teletrabajador' | 'gamer';

@Component({
  selector: 'app-time-evaluator',
  templateUrl: './time-evaluator.component.html',
  styleUrls: ['./time-evaluator.component.css']
})
export class TimeEvaluatorComponent {
  data = input.required<TimeEvaluatorData>();

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
    const messages = this.data().messages;

    if (profile === 'estudiante') {
      return level === 'alto'
        ? messages.estudianteAlto
        : level === 'medio'
          ? messages.estudianteMedio
          : messages.estudianteBajo;
    }

    if (profile === 'teletrabajador') {
      return level === 'alto'
        ? messages.teletrabajadorAlto
        : level === 'medio'
          ? messages.teletrabajadorMedio
          : messages.teletrabajadorBajo;
    }

    return level === 'alto'
      ? messages.gamerAlto
      : level === 'medio'
        ? messages.gamerMedio
        : messages.gamerBajo;
  }

  private getProfileLabel(profile: Profile): string {
    const options = this.data().options;
    if (profile === 'estudiante') {
      return options.estudiante;
    }
    if (profile === 'teletrabajador') {
      return options.teletrabajador;
    }
    return options.gamer;
  }

  generatePdf(): void {
    const values = this.form.getRawValue();
    const d = this.data();
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
    doc.text(d.pdf.title, 14, 14);

    doc.setTextColor(text.r, text.g, text.b);
    doc.setFont('helvetica', 'normal');
    y = 32;

    y = addSectionTitle(d.pdf.userDataTitle, y);
    doc.setFontSize(11);
    doc.text(`${d.labels.name}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.name), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.lastName}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.lastName), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.age}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.age), 70, y);
    y += 8;
    doc.setTextColor(text.r, text.g, text.b);
    const notes = values.notes?.trim();
    if (notes) {
      doc.text(`${d.pdf.notesLabel}:`, 16, y);
      y += 6;
      doc.setTextColor(muted.r, muted.g, muted.b);
      const notesLines = doc.splitTextToSize(notes, pageWidth - 32);
      doc.text(notesLines, 16, y);
      doc.setTextColor(text.r, text.g, text.b);
      y += notesLines.length * 6 + 4;
    }

    y = addSectionTitle(d.pdf.timeDataTitle, y);
    doc.setFontSize(11);
    doc.text(`${d.labels.profile}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(this.getProfileLabel(values.profile), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.studyHours}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.studyHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.workHours}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.workHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.gamingHours}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.gamingHours), 70, y);
    y += 6;
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(`${d.labels.socialHours}:`, 16, y);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(String(values.socialHours), 70, y);
    y += 8;
    doc.setTextColor(text.r, text.g, text.b);

    y = addSectionTitle(d.pdf.resultTitle, y);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primary.r, primary.g, primary.b);
    doc.text(`${this.productivePercent}% ${d.labels.productive}`, 16, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(text.r, text.g, text.b);
    doc.text(
      `${d.labels.productiveHours}: ${this.productiveHours} / ${this.totalHours} ${d.labels.hours}`,
      16,
      y
    );
    y += 8;

    y = addSectionTitle(d.pdf.recommendationTitle, y);
    const messageLines = doc.splitTextToSize(this.message, pageWidth - 32);
    doc.setTextColor(muted.r, muted.g, muted.b);
    doc.text(messageLines, 16, y);
    doc.setTextColor(text.r, text.g, text.b);

    doc.save('time-evaluator.pdf');
  }
}
