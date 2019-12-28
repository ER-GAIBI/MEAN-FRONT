import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeByComponent } from './de-by.component';

describe('DeByComponent', () => {
  let component: DeByComponent;
  let fixture: ComponentFixture<DeByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
