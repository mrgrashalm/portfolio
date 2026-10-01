import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-punk-de',
  templateUrl: './punk-de.component.html',
  styleUrls: ['./punk-de.component.scss']
})
export class PunkDeComponent implements OnInit, OnDestroy {
    private document = inject(DOCUMENT);

    // lightgallery needs `window`, so the galleries are only rendered in the browser (not when prerendering)
    isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    settings = {
        counter: false,
        plugins: [lgZoom]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
    };


    constructor() { }

    ngOnInit(): void {
        this.document.documentElement.style.setProperty('--primary', '#B41B6D');
        this.document.documentElement.style.setProperty('--font-family', 'Jersey25, sans-serif');
    }

    // Add any additional methods or properties you need for this component

    ngOnDestroy(): void {
        this.document.documentElement.style.removeProperty('--primary');
        this.document.documentElement.style.removeProperty('--font-family');
    }
}
