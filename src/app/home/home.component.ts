import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  openResume() {
    window.open('./assets/Vasanth_CV.pdf', '_blank');
  }

  goToLink(url: string) {
    window.location.href = url;
  }
}
