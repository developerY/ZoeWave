import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { validateContactSubmission } from '../../data/zoewave-logic';

@Component({
  selector: 'app-contact-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-modal.html'
})
export class ContactModal {
  modalService = inject(ModalService);

  isSubmitting = signal(false);
  isSubmitted = signal(false);
  errorMessage = signal<string | null>(null);

  contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    organization: new FormControl('', { nonNullable: true }),
    topic: new FormControl('R&D Collaboration', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });

  close(): void {
    this.errorMessage.set(null);
    this.modalService.closeContactModal();
  }

  submit(): void {
    this.errorMessage.set(null);
    const formVals = this.contactForm.getRawValue();
    const validation = validateContactSubmission(formVals.name, formVals.email, formVals.message);

    if (!validation.valid) {
      this.errorMessage.set(validation.error || 'Please check your inputs.');
      return;
    }

    this.isSubmitting.set(true);

    // Simulate async submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 600);
  }

  resetForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      organization: '',
      topic: 'R&D Collaboration',
      message: ''
    });
    this.isSubmitted.set(false);
    this.errorMessage.set(null);
  }
}
