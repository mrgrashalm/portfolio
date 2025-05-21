import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ColorsComponent } from './colors/colors.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImprintAndDataComponent } from './imprint-and-data/imprint-and-data.component';
import { ContactComponent } from './contact/contact.component';
import { PunkDeComponent } from './my-projects/punk-de/punk-de.component';
import { DrinkersComponent } from './my-projects/drinkers/drinkers.component';

const routes: Routes = [
   {
    component: LandingComponent,
    path: "home"
  },
  {
    component: AboutComponent,
    path: "about"
  },
  {
    component: ProjectsComponent,
    path: "projects"
  },  
  {
    component: ImprintAndDataComponent,
    path: "imprint"
  },
  {
    component: ContactComponent,
    path: "contact"
  },
  {
    component: PunkDeComponent,
    path: "projects/punk-de"
  },
  {
    component: DrinkersComponent,
    path: "projects/drinkers"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: "/home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
