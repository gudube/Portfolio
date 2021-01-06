import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeMainComponent } from './about-me-main.component';

describe('AboutMeMainComponent', () => {
  let component: AboutMeMainComponent;
  let fixture: ComponentFixture<AboutMeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
