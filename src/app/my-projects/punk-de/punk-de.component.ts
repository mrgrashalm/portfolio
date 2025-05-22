import { Component, OnDestroy, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-punk-de',
  templateUrl: './punk-de.component.html',
  styleUrls: ['./punk-de.component.scss']
})
export class PunkDeComponent implements OnInit, OnDestroy {

    settings = {
        counter: false,
        plugins: [lgZoom]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
    };


    constructor() { }

    ngOnInit(): void {
        document.documentElement.style.setProperty('--primary', '#B41B6D');
        document.documentElement.style.setProperty('--font-family', 'Jersey25, sans-serif');
    }

    // Add any additional methods or properties you need for this component

    ngOnDestroy(): void {
        document.documentElement.style.setProperty('--primary', '#FF8C3A');
        document.documentElement.style.setProperty('--font-family', 'Arial, Helvetica, sans-serif');
    }
}
