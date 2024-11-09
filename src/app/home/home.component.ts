import { Component, Renderer2 } from '@angular/core';
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
  phrases: string[] = [
    'Web Application Developer',
    'Frontend Developer',
    'Angular Developer',
  ];
  displayedText: string = '';
  phraseIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 150;
  deletingSpeed: number = 100;
  pauseDuration: number = 2000;

  constructor(private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.typeEffect();
    window.addEventListener('scroll', this.onScroll.bind(this));
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNavDropdown');

    navLinks.forEach(link => {
      this.renderer.listen(link, 'click', () => {
        // Check if the navbar is expanded (visible in mobile view)
        const isExpanded = navbarCollapse?.classList.contains('show');
        if (isExpanded) {
          // Collapse the navbar using Bootstrap's Collapse API
          const collapse = new (window as any).bootstrap.Collapse(navbarCollapse);
          collapse.toggle();
        }
      });
    });
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

  typeEffect(): void {
    const currentPhrase = this.phrases[this.phraseIndex];

    // Update displayed text based on typing or deleting state
    this.displayedText = this.isDeleting
      ? currentPhrase.slice(0, this.charIndex--)
      : currentPhrase.slice(0, this.charIndex++);

    // Check if we finished typing the current phrase
    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      // Start deleting after a pause
      setTimeout(() => (this.isDeleting = true), this.pauseDuration);
    }

    // Check if we finished deleting the current phrase
    if (this.isDeleting && this.charIndex === 0) {
      // Move to the next phrase and reset
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
    }

    // Recursively call typeEffect with a delay
    const delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    setTimeout(() => this.typeEffect(), delay);
  }
  
}
