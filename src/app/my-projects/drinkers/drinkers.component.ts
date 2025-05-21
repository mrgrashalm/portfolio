import { Component, OnDestroy, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.scss']
})
export class DrinkersComponent implements OnInit, OnDestroy {

    settings = {
        counter: false,
        plugins: [lgZoom]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };


    constructor() { }

    ngOnInit(): void {
        document.documentElement.style.setProperty('--primary', '#c38622');
        document.documentElement.style.setProperty('--font-family', 'Roboto, sans-serif');
    }

    // Add any additional methods or properties you need for this component

    ngOnDestroy(): void {
        document.documentElement.style.setProperty('--primary', '#FF8C3A');
        document.documentElement.style.setProperty('--font-family', 'Arial, Helvetica, sans-serif');
    }
}
