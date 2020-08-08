import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyGridComponent } from './photography-grid.component';

describe('PhotographyGridComponent', () => {
	let component: PhotographyGridComponent;
	let fixture: ComponentFixture<PhotographyGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PhotographyGridComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotographyGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
