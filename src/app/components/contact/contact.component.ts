import { Component, inject, input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactData } from '../../models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data = input.required<ContactData>();

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
