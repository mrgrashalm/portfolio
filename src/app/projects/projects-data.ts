export interface Project {
  title: string;
  route: string;
  category: string;
  summary: string;
  tags: string[];
  /** Accent color of the project – also used on its detail page */
  color: string;
  /** 'portrait' for phone screenshots, 'landscape' for desktop screenshots */
  format: 'portrait' | 'landscape';
  images: { src: string; alt: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Punk.de',
    route: '/projects/punk-de',
    category: 'UI/UX-Redesign · Onlineshop · Live',
    summary: 'Redesign des Onlineshops punk.de – von User Research und Figma-Prototyp bis zur fertigen Website, umgesetzt mit meinem Team aus Spezialisten.',
    tags: ['User Research', 'Figma', 'Prototyping', 'Umsetzung im Team'],
    color: '#B41B6D',
    format: 'portrait',
    images: [
      { src: 'assets/projects/punk_de/cards/Landing-Clothing.webp', alt: 'Startseite Bekleidung' },
      { src: 'assets/projects/punk_de/cards/Product Detail.webp', alt: 'Produktdetailseite' },
      { src: 'assets/projects/punk_de/cards/Band Merch.webp', alt: 'Band Merch' },
    ],
  },
  {
    title: 'AI-Finder',
    route: '/projects/aifinder',
    category: 'UI/UX · Vergleichsplattform',
    summary: 'Prototyp einer Plattform, die Nutzer:innen mit einem geführten Wizard zu passenden KI-Tools für ihre Anforderungen führt.',
    tags: ['User Research', 'Wizard-UX', 'Prototyping'],
    color: '#ffaa33',
    format: 'landscape',
    images: [
      { src: 'assets/projects/ai_finder/cards/Wizard-Role.webp', alt: 'Wizard: Rolle wählen' },
      { src: 'assets/projects/ai_finder/cards/How it works.webp', alt: 'So funktioniert es' },
      { src: 'assets/projects/ai_finder/cards/Wizard-Task.webp', alt: 'Wizard: Aufgabe wählen' },
    ],
  },
  {
    title: 'Drinkers',
    route: '/projects/drinkers',
    category: 'Mobile App · Android & iOS',
    summary: 'Eine App, die viele kurzweilige Partyspiele vereint – mit Fokus auf einfacher Bedienung, schnellem Einstieg und verspieltem Design.',
    tags: ['React Native', 'Expo', 'App-Design'],
    color: '#c38622',
    format: 'portrait',
    images: [
      { src: 'assets/projects/drinkers/cards/splash.webp', alt: 'Splash-Screen' },
      { src: 'assets/projects/drinkers/cards/Menu.webp', alt: 'Menü' },
      { src: 'assets/projects/drinkers/cards/Imprint.webp', alt: 'Impressum' },
    ],
  },
  {
    title: "What's Pub in",
    route: '/projects/whats-pub-in',
    category: 'Web-App · KI-gestützt',
    summary: 'Ein digitales Pub-Quiz, dessen Fragen per KI aus frei wählbaren Themen generiert werden – entstanden an der Ulster University in Belfast.',
    tags: ['Angular', 'Flask', 'ChatGPT'],
    color: '#f09107',
    format: 'portrait',
    images: [
      { src: 'assets/projects/whats_pub_in/cards/landing.webp', alt: 'Startseite' },
      { src: 'assets/projects/whats_pub_in/cards/questions.webp', alt: 'Fragen' },
      { src: 'assets/projects/whats_pub_in/cards/ranking.webp', alt: 'Rangliste' },
    ],
  },
];
