import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LandingComponent } from './landing/landing.component';
import { ColorsComponent } from './colors/colors.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LandingComponent,
    ColorsComponent,
    TimelineComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
