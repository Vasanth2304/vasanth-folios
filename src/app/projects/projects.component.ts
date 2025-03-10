import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive personal portfolio using Angular.',
      image: 'assets/images/portfolio.png',
      link: 'https://github.com/yourgithub/portfolio',
    },
    {
      title: 'E-commerce App',
      description: 'An Angular e-commerce application with cart functionality.',
      image: 'assets/images/ecommerce.png',
      link: 'https://github.com/yourgithub/ecommerce',
    },
    {
      title: 'Task Manager',
      description: 'A simple task management web app with Firebase integration.',
      image: 'assets/images/task-manager.png',
      link: 'https://github.com/yourgithub/task-manager',
    },
  ];
  
}
