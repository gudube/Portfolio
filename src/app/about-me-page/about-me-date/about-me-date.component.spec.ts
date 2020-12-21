import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDateComponent } from './about-me-date.component';

describe('AboutMeDateComponent', () => {
	let component: AboutMeDateComponent;
	let fixture: ComponentFixture<AboutMeDateComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AboutMeDateComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutMeDateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
