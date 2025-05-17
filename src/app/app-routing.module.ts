import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ColorsComponent } from './colors/colors.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

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
    component: ColorsComponent,
    path: "colors"
  },
  {
    component: ProjectsComponent,
    path: "projects"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
