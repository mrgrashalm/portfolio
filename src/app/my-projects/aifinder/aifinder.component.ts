import { Component, OnDestroy, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';


@Component({
  selector: 'app-aifinder',
  templateUrl: './aifinder.component.html',
  styleUrls: ['./aifinder.component.scss']
})
export class AIFinderComponent implements OnInit, OnDestroy {
    settings = {
        counter: false,
        plugins: [lgZoom]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
    };


    constructor() { }

    ngOnInit(): void {
        document.documentElement.style.setProperty('--primary', '#ffaa33');
        document.documentElement.style.setProperty('--font-family', 'Inter_24, sans-serif');
    }

    // Add any additional methods or properties you need for this component

    ngOnDestroy(): void {
        document.documentElement.style.setProperty('--primary', '#FF8C3A');
        document.documentElement.style.setProperty('--font-family', 'Arial, Helvetica, sans-serif');
    }
}
