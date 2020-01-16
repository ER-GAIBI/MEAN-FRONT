import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementUkComponent } from './requirement-uk.component';

describe('RequirementUkComponent', () => {
  let component: RequirementUkComponent;
  let fixture: ComponentFixture<RequirementUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
