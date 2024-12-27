import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
      [class]="className"
      [@fadeIn]>
      <ng-content></ng-content>
    </div>
  `,
  animations: [fadeInAnimation]
})
export class GlassCardComponent {
  @Input() className = '';
}