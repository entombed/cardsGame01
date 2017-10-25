import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area02Component } from './area02.component';

describe('Area02Component', () => {
  let component: Area02Component;
  let fixture: ComponentFixture<Area02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
