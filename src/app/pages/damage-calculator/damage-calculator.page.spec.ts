import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DamageCalculatorPage } from './damage-calculator.page';

describe('DamageCalculatorPage', () => {
  let component: DamageCalculatorPage;
  let fixture: ComponentFixture<DamageCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
