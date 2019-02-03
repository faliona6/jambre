import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbandsComponent } from './findbands.component';

describe('FindbandsComponent', () => {
  let component: FindbandsComponent;
  let fixture: ComponentFixture<FindbandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

