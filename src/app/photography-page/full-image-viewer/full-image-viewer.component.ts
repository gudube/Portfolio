import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss'],
})
export class FullImageViewerComponent { //TODO [3]: Add video support
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();
	@Input() public sdImgSrc: string;
	//@Output() sdImgSrcChange = new EventEmitter<string>();
	@Input() public hdImgSrc: string; //TODO [2]: have some images only available in SD (like subway in russia)
	//@Output() hdImgSrcChange = new EventEmitter<string>();

	@Output() nextImage = new EventEmitter<boolean>();

	public zoomedWidthOverflow = false;
	public zoomedHeightOverflow = false;
	public hd = true;

	@ViewChild('fullImgContainer') public imageContainer: ElementRef;

	constructor() { }

	//TODO [2]: disable chrome back feature when image is zoomed with width overflow
	public zoom(e: MouseEvent): void {
		if (this.zoomedHeightOverflow) {
			this.zoomedHeightOverflow = false;
		} else if (this.zoomedWidthOverflow) {
			this.zoomedWidthOverflow = false;
		} else {
			const nativeContainer = this.imageContainer.nativeElement;
			const image = nativeContainer.querySelector('img') as HTMLImageElement;
			const bounds = image.getBoundingClientRect();

			//size of the real image (image file itself)
			const naturalRatio = image.naturalWidth / image.naturalHeight;
			//size of the img Element (filling the space)
			const visibleRatio = image.clientWidth / image.clientHeight;
			if (naturalRatio > visibleRatio) //width is 100% unzoomed
			{
				const clickY = e.clientY - bounds.top;
				const actualHeight = image.clientWidth * image.naturalHeight / image.naturalWidth;
				const emptyBorder = (image.clientHeight - actualHeight) / 2;
				if(clickY < emptyBorder || clickY > emptyBorder + actualHeight)
					return; //clicking outside the image
				this.zoomedWidthOverflow = true;
			}else{ //height is 100% unzoomed
				const clickX = e.clientX - bounds.left;
				const actualWidth = image.clientHeight * image.naturalWidth / image.naturalHeight;
				const emptyBorder = (image.clientWidth - actualWidth) / 2;
				if(clickX < emptyBorder || clickX > emptyBorder + actualWidth)
					return;
				this.zoomedHeightOverflow = true;
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

	//TODO [1]: add swipe vertically for mobile too
	//TODO [1]: add arrow that is either on the side or on the top/bottom depending on the calculation made in zoom()
	public swipe(nextImage: boolean): void{
		if(!this.zoomedWidthOverflow)
			this.changeImage(nextImage);
	}

	@HostListener('window:keydown.arrowright', ['true'])
	@HostListener('window:keydown.arrowleft', ['false'])
	public changeImage(nextImage: boolean): void{
		this.nextImage.emit(nextImage);
		//TODO [2]: load one image before
	}
}
