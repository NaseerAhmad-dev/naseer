import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-6">
      <div class="flex justify-between mb-1">
        <span class="text-white">{{ skill }}</span>
        <span class="text-white">{{ percentage }}%</span>
      </div>
      <div class="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-400 to-purple-500"
          [style.width.%]="percentage"
          [@fillWidth]="percentage">
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fillWidth', [
      transition(':enter', [
        style({ width: 0 }),
        animate('1000ms ease-out', style({ width: '{{ percentage }}%' }))
      ])
    ])
  ]
})
export class SkillBarComponent {
  @Input() skill = '';
  @Input() percentage = 0;
}