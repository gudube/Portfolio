import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullImageViewerComponent } from './full-image-viewer.component';

describe('FullImageViewerComponent', () => {
	let component: FullImageViewerComponent;
	let fixture: ComponentFixture<FullImageViewerComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ FullImageViewerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FullImageViewerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
