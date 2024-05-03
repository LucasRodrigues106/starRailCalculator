import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDamageCalculatorPage } from './character-damage-calculator.page';

describe('CharacterDamageCalculatorPage', () => {
  let component: CharacterDamageCalculatorPage;
  let fixture: ComponentFixture<CharacterDamageCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDamageCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
