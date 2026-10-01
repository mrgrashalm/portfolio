import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ColorsComponent } from './colors/colors.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintAndDataComponent } from './imprint-and-data/imprint-and-data.component';
import { ContactComponent } from './contact/contact.component';
import { PunkDeComponent } from './my-projects/punk-de/punk-de.component';
import { DrinkersComponent } from './my-projects/drinkers/drinkers.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { WhatsPubInComponent } from './my-projects/whats-pub-in/whats-pub-in.component';
import { AIFinderComponent } from './my-projects/aifinder/aifinder.component';
import { DrinkerImprintComponent } from './drinker/drinker-imprint/drinker-imprint.component';
import { DrinkerDataComponent } from './drinker/drinker-data/drinker-data.component';
import { CvComponent } from './cv/cv.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ColorsComponent,
    TimelineComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ImprintAndDataComponent,
    ContactComponent,
    PunkDeComponent,
    DrinkersComponent,
    WhatsPubInComponent,
    AIFinderComponent,
    DrinkerImprintComponent,
    DrinkerDataComponent,
    CvComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
