import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebandComponent } from './createband.component';

describe('CreatebandComponent', () => {
  let component: CreatebandComponent;
  let fixture: ComponentFixture<CreatebandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
