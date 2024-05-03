import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCharactersPage } from './list-characters.page';

describe('ListCharactersPage', () => {
  let component: ListCharactersPage;
  let fixture: ComponentFixture<ListCharactersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
