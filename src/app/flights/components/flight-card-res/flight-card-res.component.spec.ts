import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardResComponent } from './flight-card-res.component';

describe('FlightCardResComponent', () => {
  let component: FlightCardResComponent;
  let fixture: ComponentFixture<FlightCardResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCardResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCardResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
