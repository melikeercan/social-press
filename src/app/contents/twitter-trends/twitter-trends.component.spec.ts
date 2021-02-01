import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTrendsComponent } from './twitter-trends.component';

describe('TrendsComponent', () => {
  let component: TwitterTrendsComponent;
  let fixture: ComponentFixture<TwitterTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
