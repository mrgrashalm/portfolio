import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintAndDataComponent } from './imprint-and-data.component';

describe('ImprintAndDataComponent', () => {
  let component: ImprintAndDataComponent;
  let fixture: ComponentFixture<ImprintAndDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintAndDataComponent]
    });
    fixture = TestBed.createComponent(ImprintAndDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
