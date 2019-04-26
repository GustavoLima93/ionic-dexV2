import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenerationsPage } from './list-generations.page';

describe('ListGenerationsPage', () => {
  let component: ListGenerationsPage;
  let fixture: ComponentFixture<ListGenerationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGenerationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenerationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
