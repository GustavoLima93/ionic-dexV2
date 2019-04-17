import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsGenerationPage } from './pokemons-generation.page';

describe('PokemonsGenerationPage', () => {
  let component: PokemonsGenerationPage;
  let fixture: ComponentFixture<PokemonsGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsGenerationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
