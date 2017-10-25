import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area01Component } from './area01.component';

describe('Area01Component', () => {
  let component: Area01Component;
  let fixture: ComponentFixture<Area01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
