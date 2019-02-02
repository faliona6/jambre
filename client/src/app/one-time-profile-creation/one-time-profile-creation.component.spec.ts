import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeProfileCreationComponent } from './one-time-profile-creation.component';

describe('OneTimeProfileCreationComponent', () => {
  let component: OneTimeProfileCreationComponent;
  let fixture: ComponentFixture<OneTimeProfileCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTimeProfileCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimeProfileCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
