import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunkDeComponent } from './punk-de.component';

describe('PunkDeComponent', () => {
  let component: PunkDeComponent;
  let fixture: ComponentFixture<PunkDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PunkDeComponent]
    });
    fixture = TestBed.createComponent(PunkDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
