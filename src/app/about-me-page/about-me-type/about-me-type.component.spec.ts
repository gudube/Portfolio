import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutMeTypeComponent } from './about-me-type.component';

describe('AboutMeTypeComponent', () => {
	let component: AboutMeTypeComponent;
	let fixture: ComponentFixture<AboutMeTypeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ AboutMeTypeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutMeTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
