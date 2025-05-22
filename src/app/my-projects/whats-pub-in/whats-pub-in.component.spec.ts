import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsPubInComponent } from './whats-pub-in.component';

describe('WhatsPubInComponent', () => {
  let component: WhatsPubInComponent;
  let fixture: ComponentFixture<WhatsPubInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsPubInComponent]
    });
    fixture = TestBed.createComponent(WhatsPubInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
