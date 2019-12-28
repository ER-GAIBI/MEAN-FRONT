import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbComponent } from './gb.component';

describe('GbComponent', () => {
  let component: GbComponent;
  let fixture: ComponentFixture<GbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
