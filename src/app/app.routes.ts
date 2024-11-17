import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }, // Redirect any unknown paths to Home
    { path: 'contact', component: ContactComponent }, 
  ];

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent },
//     { path: 'about', component: AboutComponent },
//     { path: 'projects', component: ProjectsComponent },
//     { path: 'contact', component: ContactComponent },  
//     { path: 'experience', component: ExperienceComponent },  
// ];
