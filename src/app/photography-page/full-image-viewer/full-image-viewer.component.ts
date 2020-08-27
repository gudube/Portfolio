import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss']
})
export class FullImageViewerComponent {
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Input() public imgSrc: string;
	@Output() imgSrcChange = new EventEmitter<string>();

	//@Output() public unselectedEvent = new EventEmitter();

	public zoomed = false;

	constructor() { }

	public zoom(e: Event): void {
		this.zoomed = !this.zoomed;
		e.stopPropagation();
	}

	public hide(): void {
		this.visible = !this.visible;
		this.visibleChange.emit(this.visible);
		document.body.style.overflow = 'auto';
	}

}
