import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FootnotesComponent } from './footnotes.component';

describe('FootnotesComponent', () => {
  let component: FootnotesComponent;
  let fixture: ComponentFixture<FootnotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FootnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
