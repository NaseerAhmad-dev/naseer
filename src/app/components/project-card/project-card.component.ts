import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIcon, ExternalLinkIcon } from 'lucide-angular';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="group relative overflow-hidden rounded-xl backdrop-blur-lg bg-white/10 border border-white/20"
      [@hover]="isHovered"
      (mouseenter)="isHovered = true"
      (mouseleave)="isHovered = false">
      <div class="aspect-video overflow-hidden">
        <img
          [src]="image"
          [alt]="title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
        <p class="text-gray-300 mb-4">{{ description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          @for (tech of technologies; track tech) {
            <span class="px-3 py-1 rounded-full text-sm bg-white/10 text-white">
              {{ tech }}
            </span>
          }
        </div>
        <div class="flex gap-4">
          @if (githubUrl) {
            <a
              [href]="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 transition-colors"
            >
              <span class="w-6 h-6" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </span>
            </a>
          }
          @if (liveUrl) {
            <a
              [href]="liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 transition-colors"
            >

              <span class="w-6 h-6" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </span>
            </a>
          }
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('hover', [
      state('true', style({ transform: 'scale(1.02)' })),
      state('false', style({ transform: 'scale(1)' })),
      transition('* <=> *', animate('200ms ease-out'))
    ])
  ]
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() technologies: string[] = [];
  @Input() githubUrl?: string;
  @Input() liveUrl?: string;
  
  isHovered = false;
}