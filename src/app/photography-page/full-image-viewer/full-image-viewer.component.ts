import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss']
})
export class FullImageViewerComponent {
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Input() public sdImgSrc: string;
	@Output() sdImgSrcChange = new EventEmitter<string>();
	@Input() public hdImgSrc: string;
	@Output() hdImgSrcChange = new EventEmitter<string>();

	//@Output() public unselectedEvent = new EventEmitter();

	public zoomed = false;
	public hd = true;

	constructor() { }

	public zoom(e: Event): void {
		this.zoomed = !this.zoomed;
		//set a zoomedY or zoomedZ depending on screen and adjust overflow and width/height accordingly
		e.stopPropagation();
	}

	public hide(): void {
		this.visible = !this.visible;
		this.visibleChange.emit(this.visible);
		document.body.style.overflow = 'auto';
	}

	public switchHd(): void {
		if(this.hd){
			this.zoomed = false;
		}
		this.hd = !this.hd;
	}

}
