import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImprintAndDataComponent } from './imprint-and-data/imprint-and-data.component';
import { ContactComponent } from './contact/contact.component';
import { PunkDeComponent } from './my-projects/punk-de/punk-de.component';
import { DrinkersComponent } from './my-projects/drinkers/drinkers.component';
import { WhatsPubInComponent } from './my-projects/whats-pub-in/whats-pub-in.component';
import { AIFinderComponent } from './my-projects/aifinder/aifinder.component';
import { DrinkerImprintComponent } from './drinker/drinker-imprint/drinker-imprint.component';
import { DrinkerDataComponent } from './drinker/drinker-data/drinker-data.component';
import { CvComponent } from './cv/cv.component';
import { SeoData } from './seo.service';

// Every page gets its own title and description for search engines and link previews (see SeoService).
// When adding a page, also add it to src/sitemap.xml and to prerender-routes.txt.
const routes: Routes = [
  {
    component: LandingComponent,
    path: "",
    pathMatch: "full",
    data: {
      seo: {
        title: 'Marian J. Mannert – Projektleitung, Frontend & UI/UX aus Augsburg',
        description: 'Selbstständiger Projektleiter und Frontend-Entwickler aus Augsburg. Websites und Web-Apps mit Angular, React und Laravel – testfokussiert entwickelt, gemeinsam mit einem Netzwerk aus selbstständigen Spezialisten.',
      } as SeoData
    }
  },
  {
    component: AboutComponent,
    path: "about",
    data: {
      seo: {
        title: 'Über mich',
        description: 'Marian J. Mannert – selbstständiger Projektleiter, Frontend-Entwickler und UI/UX-Designer aus Augsburg. Steckbrief, Philosophie und mein Netzwerk aus selbstständigen Spezialisten.',
      } as SeoData
    }
  },
  {
    component: ProjectsComponent,
    path: "projects",
    data: {
      seo: {
        title: 'Projekte',
        description: 'Ausgewählte Projekte von Marian J. Mannert: das Redesign von punk.de, eine Vergleichsplattform für KI-Tools, eine Party-App für Android & iOS und ein KI-gestütztes Pub-Quiz.',
      } as SeoData
    }
  },
  {
    component: CvComponent,
    path: "lebenslauf",
    data: {
      seo: {
        title: 'Lebenslauf',
        description: 'Werdegang von Marian J. Mannert: Ausbildung zum Fachinformatiker, mehrere Jahre Frontend-Entwicklung mit Angular und TypeScript, Informatik-Studium mit Stationen in Vancouver und Belfast.',
      } as SeoData
    }
  },
  {
    component: ContactComponent,
    path: "contact",
    data: {
      seo: {
        title: 'Kontakt',
        description: 'Projekt anfragen bei Marian J. Mannert – Projektleitung, Frontend-Entwicklung und UI/UX aus Augsburg. Schreib mir direkt per E-Mail.',
      } as SeoData
    }
  },
  {
    component: ImprintAndDataComponent,
    path: "imprint",
    data: {
      seo: {
        title: 'Impressum & Datenschutz',
        description: 'Impressum und Datenschutzerklärung von marianmannert.de.',
      } as SeoData
    }
  },
  {
    component: PunkDeComponent,
    path: "projects/punk-de",
    data: {
      seo: {
        title: 'Punk.de – Redesign eines Onlineshops',
        description: 'UI/UX-Redesign des Onlineshops punk.de: von User Research, Personas und Figma-Prototyp bis zur fertigen Website, umgesetzt mit einem Team aus selbstständigen Spezialisten.',
      } as SeoData
    }
  },
  {
    component: DrinkersComponent,
    path: "projects/drinkers",
    data: {
      seo: {
        title: 'Drinkers – Party-App für Android & iOS',
        description: 'Drinkers vereint kurzweilige Partyspiele in einer mobilen App für Android und iOS – entwickelt mit React Native und Expo.',
      } as SeoData
    }
  },
  {
    component: WhatsPubInComponent,
    path: "projects/whats-pub-in",
    data: {
      seo: {
        title: "What's Pub in – KI-gestütztes Pub-Quiz",
        description: "What's Pub in ist eine Web-App für Pub-Quiz-Abende, deren Fragen per KI aus frei wählbaren Themen generiert werden – entwickelt mit Angular und Flask an der Ulster University in Belfast.",
      } as SeoData
    }
  },
  {
    component: AIFinderComponent,
    path: "projects/aifinder",
    data: {
      seo: {
        title: 'AI-Finder – Vergleichsplattform für KI-Tools',
        description: 'UI/UX-Prototyp einer Plattform, die Nutzer mit einem geführten Wizard zu passenden KI-Tools führt – auf Basis von User Research, Interviews und Umfragen.',
      } as SeoData
    }
  },
  {
    component: DrinkerImprintComponent,
    path: "drinker/imprint",
    data: {
      bare: true,
      seo: {
        title: 'Impressum – Drinker App',
        description: 'Impressum der App Drinker.',
      } as SeoData
    }
  },
  {
    component: DrinkerDataComponent,
    path: "drinker/data",
    data: {
      bare: true,
      seo: {
        title: 'Datenschutzerklärung – Drinker App',
        description: 'Datenschutzerklärung der App Drinker.',
      } as SeoData
    }
  },
  // old start page URL
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
