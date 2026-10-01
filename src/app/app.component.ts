import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  // Pages with `data: { bare: true }` (e.g. the Drinker app legal pages) are shown without header and footer
  showChrome = true;

  constructor(router: Router, route: ActivatedRoute, seo: SeoService) {
    router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      let child = route.firstChild;
      while (child?.firstChild) {
        child = child.firstChild;
      }
      const data = child?.snapshot.data ?? {};
      this.showChrome = !data['bare'];
      seo.update(data['seo'], event.urlAfterRedirects);
    });
  }
}
