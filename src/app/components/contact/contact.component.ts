import { Component, inject, input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  eyebrow = input<string>('');
  heading = input<string>('');

  nameLabel = input<string>('');
  namePlaceholder = input<string>('');
  nameError = input<string>('');

  emailLabel = input<string>('');
  emailPlaceholder = input<string>('');
  emailError = input<string>('');

  messageLabel = input<string>('');
  messagePlaceholder = input<string>('');
  messageError = input<string>('');

  submitLabel = input<string>('');
  successMessage = input<string>('');

  private formBuilder = inject(FormBuilder);
  submitted = false;

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.submitted = false;
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset();
    this.submitted = true;
  }
}
