import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerImprintComponent } from './drinker-imprint.component';

describe('DrinkerImprintComponent', () => {
  let component: DrinkerImprintComponent;
  let fixture: ComponentFixture<DrinkerImprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkerImprintComponent]
    });
    fixture = TestBed.createComponent(DrinkerImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
