import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaComponent } from './fattura.component';

describe('FatturaComponent', () => {
  let component: FatturaComponent;
  let fixture: ComponentFixture<FatturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatturaComponent]
    });
    fixture = TestBed.createComponent(FatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
