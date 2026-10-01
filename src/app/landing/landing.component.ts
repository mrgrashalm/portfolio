import { Component } from '@angular/core';
import { PROJECTS } from '../projects/projects-data';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  projects = PROJECTS.slice(0, 3);

  projectLeadItems = [
    'Anforderungsanalyse und Projektplanung',
    'Zusammenstellung und Koordination des Teams',
    'Transparente Kommunikation und regelmäßige Abstimmung',
    'Qualitätssicherung durch testfokussierte Entwicklung',
  ];

  services = [
    {
      icon: 'fa-code',
      title: 'Frontend-Entwicklung',
      text: 'Moderne Web-Apps und Websites mit Angular, React und TypeScript und mit Laravel im Backend. Testfokussiert entwickelt, damit dein Produkt stabil und wartbar bleibt.',
    },
    {
      icon: 'fa-pen-ruler',
      title: 'UI/UX-Design',
      text: 'User Research, Wireframes und klickbare Prototypen in Figma, getestet mit echten Nutzer:innen.',
    },
    {
      icon: 'fa-comments',
      title: 'Beratung',
      text: 'Gemeinsam finden wir die eigentlichen Pain Points und den passenden Weg zur Lösung.',
    },
  ];

  networkBenefits = [
    {
      icon: 'fa-layer-group',
      title: 'Alles aus einer Hand',
      text: 'Design, Frontend, Backend und mehr, ohne dass du selbst mehrere Dienstleister koordinieren musst.',
    },
    {
      icon: 'fa-user-check',
      title: 'Ein fester Ansprechpartner',
      text: 'Ich leite das Projekt, halte alle Fäden zusammen und bin deine direkte Verbindung zum Team.',
    },
    {
      icon: 'fa-star',
      title: 'Spezialist:innen statt Generalisten',
      text: 'Jede Aufgabe übernimmt, wer darin wirklich zu Hause ist, das sorgt für Qualität in jedem Bereich.',
    },
    {
      icon: 'fa-up-right-and-down-left-from-center',
      title: 'Flexibel skalierbar',
      text: 'Das Team wächst mit deinem Projekt, schlanke Strukturen ohne den Overhead einer klassischen Agentur.',
    },
  ];

  steps = [
    {
      title: 'Analyse',
      text: 'Wir schauen uns deine Herausforderungen genau an und identifizieren die tatsächlichen Pain Points, oft liegen sie unter der Oberfläche.',
    },
    {
      title: 'Konzept',
      text: 'Mit gezielten Umfragen, vorhandenen Erfahrungswerten und bewährten Methoden entwickeln wir gemeinsam die passende Lösung.',
    },
    {
      title: 'Umsetzung',
      text: 'Ich entwickle testfokussiert: Automatisierte Tests sichern jede Funktion ab. Durch regelmäßigen Austausch bleibt alles transparent und Anpassungen sind jederzeit schnell möglich.',
    },
    {
      title: 'Ergebnis',
      text: 'Keine bloßen Konzepte, sondern praxistaugliche Lösungen, die in deinem Alltag einen spürbaren Unterschied machen.',
    },
  ];
}
