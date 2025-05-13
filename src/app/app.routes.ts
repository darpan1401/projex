import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,pathMatch: 'full'},
    {path:"about",component:AboutComponent,pathMatch: 'full'},
    {path:"project",component:ProjectsComponent,pathMatch: 'full'},
    {path:"developers",component:DevelopersComponent,pathMatch: 'full'},
    {path:"contact",component:ContactComponent,pathMatch: 'full'},
    { path: '**', component: NotFoundComponent },
    
];
