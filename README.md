# PortfolioWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## New stuff live on marianmannert.de

1. Save changes
2. Commit and Push
3. `npm run deploy` ausführen

`npm run deploy` rendert alle Seiten aus `prerender-routes.txt` als statisches HTML vor (wichtig für SEO: jede Seite hat eigenes HTML mit eigenem Titel und wird von GitHub Pages mit Status 200 ausgeliefert) und veröffentlicht `dist/portfolio-website/browser` inklusive Custom Domain auf GitHub Pages.

## Neue Seite hinzufügen (SEO)

1. Route mit `data.seo` (Titel und Beschreibung) in `src/app/app-routing.module.ts` anlegen
2. Pfad in `prerender-routes.txt` eintragen
3. URL in `src/sitemap.xml` eintragen
