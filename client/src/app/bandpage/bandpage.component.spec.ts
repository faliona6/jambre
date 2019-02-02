import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandpageComponent } from './bandpage.component';

describe('BandpageComponent', () => {
  let component: BandpageComponent;
  let fixture: ComponentFixture<BandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
