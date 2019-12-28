import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeNwComponent } from './de-nw.component';

describe('DeNwComponent', () => {
  let component: DeNwComponent;
  let fixture: ComponentFixture<DeNwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeNwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
