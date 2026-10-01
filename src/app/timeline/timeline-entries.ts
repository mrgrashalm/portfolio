export interface TimelineEntry {
  title: string;
  organisation: string;
  type: string;
  period: string;
  duration?: string;
  description?: string[];
  tags?: string[];
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    title: 'Auslandssemester am British Columbia Institute of Technology – Vancouver',
    organisation: 'British Columbia Institute of Technology',
    type: 'Vollzeit',
    period: 'Jan. 2025 – Mai 2025',
    description: [
      'Das British Columbia Institute of Technology (BCIT) ist eine Universität mit mehreren Standorten rund um Vancouver und einer starken Orientierung an Wirtschaft und Technik.',
      'Ich belegte hier 4 Kurse: Social Media Networking (95 %), UI / UX Strategy 1 (90 %), Online Store (89 %), App Development Strategy (97 %).',
    ],
  },
  {
    title: 'Software Entwickler Frontend',
    organisation: 'erkoware solutions GmbH',
    type: 'Werkstudent',
    period: 'Nov. 2024 – Feb. 2025',
    duration: '4 Monate',
    description: [
      'Erkoware Solutions ist ein Unternehmen für App-, Web- und Softwareentwicklung, das individuelle Softwarelösungen für produzierende mittelständische Unternehmen anbietet. Meine Aufgaben umfassten vor allem das Erstellen von Apps für Android und iOS mit Vue und Capacitor.',
    ],
    tags: ['Vue', 'TypeScript', 'Capacitor', 'Android Studio', 'WebStorm'],
  },
  {
    title: 'Auslandsprojekt an der Ulster University – Belfast',
    organisation: 'Ulster University',
    type: 'Vollzeit',
    period: 'Feb. 2024 – März 2024',
    description: [
      'Im Rahmen meines Informatik-Studiums verbrachte ich 5 Wochen in Belfast und arbeitete dort mit zwei Kommilitoninnen und dem Senior Lecturer, Dr. George Moore, an einem Informatik-Projekt.',
    ],
  },
  {
    title: 'Software Entwickler Frontend',
    organisation: 'Possehl Analytics GmbH',
    type: 'Werkstudent',
    period: 'Okt. 2022 – Dez. 2023',
    duration: '15 Monate',
    description: [
      'Possehl Analytics unterstützt kleine und mittelständische Industrie-Unternehmen dabei, profitable datengetriebene Geschäftsmodelle zu entwickeln und umzusetzen.',
      'Ich war verantwortlich für die Umsetzung von Frontend-Lösungen in enger Zusammenarbeit mit Design-, Produkt- und Entwicklerteams. Dabei übernahm ich technische Entscheidungen, unterstützte Kollegen fachlich, wirkte an Schnittstellenkonzepten mit und sorgte für stabile, wartbare Software bei agiler Arbeitsweise.',
    ],
    tags: ['Angular', 'TypeScript', 'SASS/SCSS', 'Visual Studio Code', 'PostgreSQL', 'PrimeFaces'],
  },
  {
    title: 'Studium Informatik B. Sc.',
    organisation: 'Technische Hochschule Augsburg',
    type: 'Vollzeit',
    period: 'Okt. 2022 – heute',
    description: [
      'Der Bachelorstudiengang Informatik vermittelt fundierte Kenntnisse über Aufbau und Arbeitsweise von IT-Systemen, Softwareentwicklungsmethoden, Rechnernetzen und Datenbanken.',
    ],
    tags: ['Java', 'Vue', 'Python', 'Software Engineering', 'Projektentwicklung', 'Führung', 'Höhere Mathematik'],
  },
  {
    title: 'Software Entwickler Frontend',
    organisation: 'Possehl Analytics GmbH',
    type: 'Vollzeit',
    period: 'Jan. 2021 – Sep. 2022',
    duration: '16 Monate',
    description: [
      'Possehl Analytics unterstützt kleine und mittelständische Industrie-Unternehmen dabei, profitable datengetriebene Geschäftsmodelle zu entwickeln und umzusetzen.',
      'Ich war verantwortlich für die Umsetzung von Frontend-Lösungen in enger Zusammenarbeit mit Design-, Produkt- und Entwicklerteams. Dabei übernahm ich technische Entscheidungen, unterstützte Kollegen fachlich, wirkte an Schnittstellenkonzepten mit und sorgte für stabile, wartbare Software bei agiler Arbeitsweise.',
    ],
    tags: ['Angular', 'TypeScript', 'SASS/SCSS', 'Visual Studio Code', 'PostgreSQL', 'PrimeFaces'],
  },
  {
    title: 'Software Entwickler Frontend',
    organisation: 'manroland Goss web systems GmbH',
    type: 'Vollzeit',
    period: 'Juni 2019 – Dez. 2020',
    duration: '19 Monate',
    description: [
      'manroland Goss web systems ist der führende Anbieter von Rollenoffsetdrucklösungen. Das Unternehmen bietet KI-gestützte Automatisierungs-, Retrofit- und E-Commerce-Lösungen für die Druckindustrie.',
      'Ich war Teil des Frontend-Teams zur Entwicklung der Software „Maintellisense“. Meine Aufgaben waren hauptsächlich das Umsetzen von Designvorschlägen.',
    ],
    tags: ['Angular', 'TypeScript', 'SASS/SCSS', 'Visual Studio Code', 'PrimeFaces'],
  },
  {
    title: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
    organisation: 'manroland Goss web systems GmbH',
    type: 'Vollzeit',
    period: 'Sep. 2016 – Juni 2019',
    duration: '34 Monate',
    description: [
      'Ausbildung beim führenden Anbieter von Rollenoffsetdrucklösungen. Neben den Grundlagen der Anwendungsentwicklung mit Java, ABAP und VB arbeitete ich bereits im Frontend-Team an der Software „Maintellisense“ mit.',
    ],
    tags: ['Angular', 'TypeScript', 'SASS/SCSS', 'Linux', 'Java', 'ABAP', 'VB'],
  },
  {
    title: 'Ausbildung zum Technischen Systemplaner',
    organisation: 'Engelhardt Heizung+Sanitär GmbH',
    type: 'Vollzeit',
    period: 'Sep. 2012 – Jan. 2016',
    duration: '41 Monate',
  },
];
