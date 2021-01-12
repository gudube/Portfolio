import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotographyMenuComponent } from './photography-menu.component';

describe('PhotographyMenuComponent', () => {
	let component: PhotographyMenuComponent;
	let fixture: ComponentFixture<PhotographyMenuComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [PhotographyMenuComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotographyMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
