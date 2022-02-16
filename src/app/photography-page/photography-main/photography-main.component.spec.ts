import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyMainComponent } from './photography-main.component';

describe('PhotographyMainComponent', () => {
  let component: PhotographyMainComponent;
  let fixture: ComponentFixture<PhotographyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
