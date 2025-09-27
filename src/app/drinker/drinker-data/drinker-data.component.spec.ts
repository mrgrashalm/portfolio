import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerDataComponent } from './drinker-data.component';

describe('DrinkerDataComponent', () => {
  let component: DrinkerDataComponent;
  let fixture: ComponentFixture<DrinkerDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkerDataComponent]
    });
    fixture = TestBed.createComponent(DrinkerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
