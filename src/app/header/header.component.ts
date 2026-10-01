import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links = [
    { path: '/about', label: 'Über mich' },
    { path: '/projects', label: 'Projekte' },
    { path: '/lebenslauf', label: 'Lebenslauf' },
  ];

  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }
}
