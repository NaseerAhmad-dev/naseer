import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SendIcon } from 'lucide-angular';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
      <div>
        <label for="name" class="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          formControlName="name"
          class="w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label for="email" class="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          formControlName="email"
          class="w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label for="message" class="block text-white mb-2">Message</label>
        <textarea
          id="message"
          formControlName="message"
          rows="4"
          class="w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        [disabled]="isSubmitting || !form.valid"
        class="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
        [@buttonState]="isSubmitting ? 'submitting' : 'idle'"
      >
        @if (isSubmitting) {
          Sending...
        } @else {
          <span>Send Message</span>

          <span class="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></span>
        }
      </button>
    </form>
  `,
  animations: [
    trigger('buttonState', [
      state('idle', style({ transform: 'scale(1)' })),
      state('submitting', style({ transform: 'scale(0.95)' })),
      transition('* <=> *', animate('200ms ease-out'))
    ])
  ]
})
export class ContactFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  async onSubmit() {
    if (this.form.valid) {
      this.isSubmitting = true;
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isSubmitting = false;
      this.form.reset();
    }
  }
}