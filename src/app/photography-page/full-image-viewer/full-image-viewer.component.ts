import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss']
})
export class FullImageViewerComponent { //todo: check out virtual scrolling for performance
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Input() public sdImgSrc: string;
	@Output() sdImgSrcChange = new EventEmitter<string>();
	@Input() public hdImgSrc: string;
	@Output() hdImgSrcChange = new EventEmitter<string>();

	//@Output() public unselectedEvent = new EventEmitter();

	public zoomedWidthOverflow = false;
	public zoomedHeightOverflow = false;
	public hd = true;

	@ViewChild('fullImgContainer') public imageContainer: ElementRef;

	constructor() { }

	public zoom(e: Event): void {
		if (this.zoomedHeightOverflow) {
			this.zoomedHeightOverflow = false;
		} else if (this.zoomedWidthOverflow) {
			this.zoomedWidthOverflow = false;
		} else {
			const nativeContainer = this.imageContainer.nativeElement;
			const image = nativeContainer.querySelector('img');
			const computedStyle = getComputedStyle(nativeContainer);
			const heightContainer = nativeContainer.clientHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
			//const widthContainer = nativeContainer.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
			if (heightContainer == image.height) {
				this.zoomedHeightOverflow = true;
			} else {
				this.zoomedWidthOverflow = true;
			}
		}
		e.stopPropagation();
	}

	public hide(): void {
		this.visible = !this.visible;
		this.visibleChange.emit(this.visible);
		document.body.style.overflow = 'auto';
	}

	public switchHd(): void {
		if(this.hd){
			this.zoomedHeightOverflow = false;
			this.zoomedWidthOverflow = false;
		}
		this.hd = !this.hd;
	}
}
