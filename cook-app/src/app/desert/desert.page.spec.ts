import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertPage } from './desert.page';

describe('DesertPage', () => {
  let component: DesertPage;
  let fixture: ComponentFixture<DesertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
