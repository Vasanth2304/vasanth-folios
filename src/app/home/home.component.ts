import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatIconModule, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {

  private lastScrollY: number = 0; 
  phrases = ['Web Application Developer', 'Frontend Developer', 'Angular Developer'];
  displayedText: string = '';
  phraseIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;
  pauseDuration: number = 1000;
  backgroundImage = `linear-gradient(#53565c61, #53565c61),url('assets/bg-img.jpg')`;
  maskImage = `url('assets/ink-overlay.gif')`



  images: string[] = [];
  currentImageIndex: number = 0;
  currentImageUrl: string = '';

  constructor(private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.initTypeEffect();
    this.calcScrollValue();

    window.onscroll = () => this.calcScrollValue();
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
  
  ngAfterViewInit(): void {
    this.observeSections();
  }
  

  private initTypeEffect(): void {
    const typeEffect = () => {
      const currentPhrase = this.phrases[this.phraseIndex];
      this.displayedText = this.isDeleting
        ? currentPhrase.slice(0, --this.charIndex)
        : currentPhrase.slice(0, ++this.charIndex);

      if (!this.isDeleting && this.charIndex === currentPhrase.length) {
        setTimeout(() => (this.isDeleting = true), 1000);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }

      setTimeout(typeEffect, this.isDeleting ? 50 : 100);
    };

    typeEffect();
  }

  openResume() {
    window.open('./assets/Vasanth_CV.pdf', '_blank');
  }

  goToLink(url: string) {
    window.location.href = url;
  }

  calcScrollValue() {
    const scrollProgress = document.getElementById('progress');
    const progressValue = document.getElementById('progress-value');
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      scrollProgress!.style.display = 'grid';
    } else {
      scrollProgress!.style.display = 'none';
    }

    scrollProgress!.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });

    scrollProgress!.style.background = `conic-gradient(#00AAB3 ${scrollValue}%, #393E46 ${scrollValue}%)`;
  }

  private observeSections(): void {
    const sections = document.querySelectorAll('div[id]');
    const options = {
      root: null, // viewport
      threshold: 0.3 // at least 50% of the section should be visible
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
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Find the corresponding link using the section's ID
    const activeLink = document.querySelector(`.nav-link[href="#${target.id}"]`);
  
    // Add 'active' class to the current link
    if (activeLink) {
      activeLink.classList.add('active');
    }
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
  }
  
  private navigateToPreviousSection(sections: NodeListOf<Element>): void {
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
