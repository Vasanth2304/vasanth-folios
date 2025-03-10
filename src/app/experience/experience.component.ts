import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExperienceComponent {

  skills = [
    { 
      name: 'HTML5', 
      description: 'Semantic structure and web standards.', 
      icon: './assets/icons/html5.png' 
    },
    { 
      name: 'CSS3', 
      description: 'Responsive design and styling.',
      icon: './assets/icons/css3.png' 
    },
    { 
      name: 'JavaScript', 
      description: 'Dynamic and interactive features.',
      icon: './assets/icons/javascript.png' 
    },
    { 
      name: 'TypeScript', 
      description: 'Typed JavaScript for scalable code.',
      icon: './assets/icons/typescript.png' 
    },
    { 
      name: 'Angular 17+', 
      description: 'Component-based web application framework.',
      icon: './assets/icons/angular.png' 
    },
    { 
      name: 'Bootstrap', 
      description: 'Responsive front-end component library.',
      icon: './assets/icons/bootstrap.png' 
    },
    { 
      name: 'Kendo UI', 
      description: 'UI components for advanced interfaces.',
      icon: './assets/icons/kendo-ui.png' 
    },
    // { 
    //   name: 'Angular Material', 
    //   description: 'Material Design components for Angular.',
    //   icon: './assets/icons/angular-material.png' 
    // },
    { 
      name: 'UI & UX', 
      description: 'Designing visually appealing interfaces.', 
      icon: './assets/icons/ui-ux.png' 
    },
    { 
      name: 'Flutter', 
      description: 'Cross-platform app development framework.', 
      icon: './assets/icons/flutter.png' 
    }
  ];

  tools = [
    { 
      name: 'Git', 
      description: 'Version control for tracking changes.', 
      icon: './assets/icons/git.png' 
    },
    { 
      name: 'GitHub', 
      description: 'Hosting platform for version control.',
      icon: './assets/icons/github.png' 
    },
    { 
      name: 'Fork', 
      description: 'Git client for efficient version management.',
      icon: './assets/icons/fork.png' 
    },
    { 
      name: 'Sublime Merge', 
      description: 'A git client with powerful merge tools.',
      icon: './assets/icons/sublime-merge.png' 
    },
    { 
      name: 'VS Code', 
      description: 'Code editor with extensive features.',
      icon: './assets/icons/vscode.png' 
    },
    { 
      name: 'Visual Studio', 
      description: 'Integrated development environment by Microsoft.',
      icon: './assets/icons/visual-studio.png' 
    },
    { 
      name: 'Figma', 
      description: 'Collaborative interface design tool.', 
      icon: './assets/icons/figma.png' 
    },
    { 
      name: 'Android Studio', 
      description: 'IDE for Android app development.', 
      icon: './assets/icons/android-studio.png' 
    }
  ];
}
