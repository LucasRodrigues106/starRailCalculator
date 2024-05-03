import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakDamageCalculatorPage } from './break-damage-calculator.page';

describe('BreakDamageCalculatorPage', () => {
  let component: BreakDamageCalculatorPage;
  let fixture: ComponentFixture<BreakDamageCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDamageCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
