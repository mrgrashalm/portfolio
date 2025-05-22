import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIFinderComponent } from './aifinder.component';

describe('AIFinderComponent', () => {
  let component: AIFinderComponent;
  let fixture: ComponentFixture<AIFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIFinderComponent]
    });
    fixture = TestBed.createComponent(AIFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
