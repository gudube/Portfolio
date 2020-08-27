import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss'],
})
export class FullImageViewerComponent {
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Input() public sdImgSrc: string;
	//@Output() sdImgSrcChange = new EventEmitter<string>();
	@Input() public hdImgSrc: string; //todo: have some images only available in SD (like subway in russia)
	//@Output() hdImgSrcChange = new EventEmitter<string>();

	@Output() nextImage = new EventEmitter<boolean>();

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
		this.visible = false;
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

	//todo: add swipe vertically for mobile too
	//todo: add arrow that is either on the side or on the top/bottom depending on the calculation made in zoom()
	public swipe(nextImage: boolean): void{
		if(!this.zoomedWidthOverflow)
			this.changeImage(nextImage);
	}

	@HostListener('window:keydown.arrowright', ['true'])
	@HostListener('window:keydown.arrowleft', ['false'])
	public changeImage(nextImage: boolean): void{
		this.nextImage.emit(nextImage);
		//todo: load one image before
	}
}
