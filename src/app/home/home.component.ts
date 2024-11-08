import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private lastScrollY: number = 0; // Declare lastScrollY to track the last scroll position

  
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  openResume() {
    window.open('./assets/Vasanth_CV.pdf', '_blank');
  }

  goToLink(url: string) {
    window.location.href = url;
  }

  ngAfterViewInit(): void {
    this.observeSections();
  }

  private observeSections(): void {
    const sections = document.querySelectorAll('div[id]');
    const options = {
      root: null, // viewport
      threshold: 0.5 // at least 50% of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Logic to highlight the current section
          this.highlightSection(entry.target);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
  }

  private highlightSection(target: Element): void {
    // Add a highlight or active class to the section, or use any other way to show active sections.
    console.log(target);
  }

  private onScroll(): void {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('div[id]');
  
    // Detect scroll direction and trigger section transitions
    if (scrollY > this.lastScrollY) {
      // Scrolling down
      this.navigateToNextSection(sections);
    } else {
      // Scrolling up
      this.navigateToPreviousSection(sections);
    }
  
    this.lastScrollY = scrollY;
  }
  
  private navigateToNextSection(sections: NodeListOf<Element>): void {
    // Logic to move to the next section
  }
  
  private navigateToPreviousSection(sections: NodeListOf<Element>): void {
    // Logic to move to the previous section
  }
  
}
