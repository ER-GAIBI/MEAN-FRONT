import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalUkComponent } from './technical-uk.component';

describe('TechnicalUkComponent', () => {
  let component: TechnicalUkComponent;
  let fixture: ComponentFixture<TechnicalUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
