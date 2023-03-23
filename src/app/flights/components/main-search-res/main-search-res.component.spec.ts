import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchResComponent } from './main-search-res.component';

describe('MainSearchResComponent', () => {
  let component: MainSearchResComponent;
  let fixture: ComponentFixture<MainSearchResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSearchResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSearchResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
