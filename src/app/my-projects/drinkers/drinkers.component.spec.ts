import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersComponent } from './drinkers.component';

describe('DrinkersComponent', () => {
  let component: DrinkersComponent;
  let fixture: ComponentFixture<DrinkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkersComponent]
    });
    fixture = TestBed.createComponent(DrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
