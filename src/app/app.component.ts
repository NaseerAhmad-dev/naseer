import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from './components/glass-card/glass-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GlassCardComponent,
    ProjectCardComponent,
    SkillBarComponent,
    ContactFormComponent,
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div class="max-w-6xl mx-auto px-4 py-16 space-y-32">
        <!-- Hero Section -->
        <section class="text-center" [@fadeIn]>
          <div class="mb-8">
            <img
              [src]='profileUrl'
              alt="Profile"
              class="w-40 h-40 rounded-full mx-auto border-4 border-white/20 hover:scale-105 transition-transform duration-300 "
            
              />
          </div>
       
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
           Naseer ahmad
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            Frontend software Developer
          </p>
          <div class="flex justify-center gap-6">
            <a
              href="https://github.com/NaseerAhmad-dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 transition-colors"
            >
            <span class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </span>
              

            </a>
            <a
              href="linkedin.com/in/naseer-ahmad-a59096229"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 transition-colors"
            >
            <span class="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </span>

            </a>
            <a
              href="mailto:naseerahmad3313@gmail.com"
              class="text-white hover:text-blue-400 transition-colors"
            >
            <span class="class="w-6 h-6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg></span>

            </a>
          </div>
        </section>

        <!-- About Section -->
        <section id="about">
          <app-glass-card className="max-w-3xl mx-auto">
            <div class="flex items-center gap-2 mb-6">
              <span class="w-6 h-6 text-blue-400" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <h2 class="text-2xl font-bold text-white">About Me</h2>
            </div>
            <p class="text-gray-300 leading-relaxed">
            As a dynamic frontend software developer, I'm passionate about creating captivating web experiences. With a deep understanding of
            Angular, I'm skilled at crafting sleek, scalable, and user centered interfaces that engage and delight audiences
            </p>
          </app-glass-card>
        </section>

        <!-- Skills Section -->
        <section id="skills">
          <app-glass-card className="max-w-3xl mx-auto">
            <h2 class="text-2xl font-bold text-white mb-8">Skills</h2>
            @for (skill of skills; track skill.skill) {
              <app-skill-bar
                [skill]="skill.skill"
                [percentage]="skill.percentage"
              />
            }
          </app-glass-card>
        </section>

        <!-- Projects Section -->
        <section id="projects">
          <h2 class="text-2xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            @for (project of projects; track project.title) {
              <app-project-card
                [title]="project.title"
                [description]="project.description"
                [image]="project.image"
                [technologies]="project.technologies"
                [githubUrl]="project.githubUrl"
                [liveUrl]="project.liveUrl"
              />
            }
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact">
          <app-glass-card className="max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <app-contact-form />
          </app-glass-card>
        </section>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  skills = [
    { skill: 'Angular', percentage: 90 },
    { skill: 'TypeScript', percentage: 85 },
    { skill: 'Node.js', percentage: 80 },
    { skill: 'CSS/Tailwind', percentage: 85 },
  ];

  profileUrl: string = "assets/profile.png";

//   .card {
//     backdrop-filter: blur(16px) saturate(180%);
//     -webkit-backdrop-filter: blur(16px) saturate(180%);
//     background-color: rgba(255, 255, 255, 0.75);
//     border-radius: 12px;
//     border: 1px solid rgba(209, 213, 219, 0.3);
// }

  projects = [
    {
      title: 'Tour and Travel App',
      description: 'Magical Mountains is a travel platform offering curated tour packages for Kashmir and Ladakh. It enables easy booking, providing detailed itineraries and guided tours for solo travelers, families, and honeymooners. The website is designed to create memorable travel experiences with a user-friendly, responsive interface.',
      image: 'assets/magicalmoutain.png',
      technologies: ['Angular', 'bootsrap', 'PrimeNg', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://www.magicalmoutain.in',
    },
    {
      title: 'Weather App',
      description: 'A simple weather app that provides real-time weather information by fetching data from an external API. Users can input a city name to get current weather conditions, including temperature, humidity, and wind speed. The app features an intuitive interface and a responsive design, making it easy to check the weather anytime, anywhere.',
      image: 'assets/weather.png',
      technologies: ['HTML', 'CSS', 'Javascript'],
      githubUrl: 'https://github.com/NaseerAhmad-dev/weather-app',
      liveUrl: 'https://weather938749hjd.vercel.app/',
    },
  ];
}