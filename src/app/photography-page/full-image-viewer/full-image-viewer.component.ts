import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, HostListener, } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { VideoPlayerComponent } from '../video-player/video-player.component';

enum Resolution { UHD = 'uhd', HD = 'hd', SD = 'sd' }

@Component({
	selector: 'app-full-image-viewer',
	templateUrl: './full-image-viewer.component.html',
	styleUrls: ['./full-image-viewer.component.scss'],
})
export class FullImageViewerComponent {
	@Input() public visible = false;
	@Output() visibleChange = new EventEmitter<boolean>();

	public resolutions = Resolution;
	public shownRes: Resolution = Resolution.SD;
	public defaultRes: Resolution = Resolution.HD;

	@Input() public hasPreviousImage: boolean;
	@Input() public hasNextImage: boolean;

	@Output() nextImage = new EventEmitter<boolean>();

	public zoomedWidthOverflow = false;
	public zoomedHeightOverflow = false;
	public loaded = false;
	public showImage = false;
	public isVideo = false;
	public imgSrc: string;
	public uhdAvailable = false;
	public hdAvailable = false;
	public showSwipeMessage = false;
	public imgName: string;
	private albumName: string;

	@ViewChild('fullImgContainer') public imageContainer: ElementRef;

	constructor(private httpClient: HttpClient) { }

	public setImage(albumName: string, imgName: string): void {
		this.loaded = false;
		this.imgName = imgName;
		this.albumName = albumName;
		// this.shownRes = this.defaultRes;

		// We wait to see which resolutions are available before changing the image
		Promise.all([
			this.fileExists(this.getImgSrc(Resolution.HD)).then((exists) => this.hdAvailable = exists),
			this.fileExists(this.getImgSrc(Resolution.UHD)).then((exists) => this.uhdAvailable = exists),
			// we suppose SD image always exist
		]).then(() => {
			if (	this.defaultRes === Resolution.UHD && this.uhdAvailable ||
					this.defaultRes === Resolution.HD && this.hdAvailable ||
					this.defaultRes === Resolution.SD) {
				this.shownRes = this.defaultRes;
			}
			else {
				this.shownRes =  this.hdAvailable ? Resolution.HD : Resolution.SD;
			}

			this.zoomedHeightOverflow = false;
			this.zoomedWidthOverflow = false;
			this.imgSrc = this.getImgSrc();
			this.isVideo = VideoPlayerComponent.isVideo(imgName);
			if(this.isVideo) {
				this.loaded = true;
			}
			this.showImage = true;
			if (sessionStorage.getItem('imageOpenedBefore')) {
				// doesn't need to show the message again
				this.showSwipeMessage = false;
			} else {
				sessionStorage.setItem('imageOpenedBefore', 'yes');
				// show navigation message
				if (matchMedia('(hover: none), (pointer: coarse)').matches) {
					this.showSwipeMessage = true;
				}
			}
		});
	}

	public getImgSrc(resolution?: string): string {
		if (!resolution) {
			resolution = this.shownRes;
		}
		return `assets/photography/${this.albumName}/${resolution}/${this.imgName}`;
	}

	public imageNotFound(): void {
		// if(this.shownRes == Resolution.UHD){
		// 	this.uhdAvailable = false;
		// 	if(this.hdAvailable)
		// 		this.shownRes = Resolution.HD;
		// 	else
		// 		this.shownRes = Resolution.SD;
		// }else if(this.shownRes == Resolution.HD){
		// 	this.hdAvailable = false;
		// 	this.shownRes = Resolution.SD;
		// }else if(this.shownRes == Resolution.SD){
		console.error(`Image not found: ${this.imgSrc}`);
		// return;
		// }

		// this.imgSrc = `assets/photography/${this.albumName}/${this.shownRes}/${this.imgName}`;
	}

	public fileExists(url: string): Promise<boolean> {
		return this.httpClient.head(url).pipe(map(() => true), catchError(() => of(false))).toPromise();
		// return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
	}

	@HostListener('window:resize')
	private onResize(): void {
		this.zoomedHeightOverflow = false;
		this.zoomedWidthOverflow = false;
	}

	public zoom(e: MouseEvent): void {
		if (this.zoomedHeightOverflow) {
			this.zoomedHeightOverflow = false;
		} else if (this.zoomedWidthOverflow) {
			this.zoomedWidthOverflow = false;
		} else {
			const nativeContainer = this.imageContainer.nativeElement;
			const image = nativeContainer.querySelector('img') as HTMLImageElement;
			const bounds: DOMRect = image.getBoundingClientRect();

			// size of the real image (image file itself)
			const naturalRatio = image.naturalWidth / image.naturalHeight;
			// size of the img Element (filling the space)
			const visibleRatio = image.clientWidth / image.clientHeight;
			if (naturalRatio > visibleRatio) // width is 100% unzoomed
			{
				if (e.target === image){ // if clicked in image, make sure it was actually the image
					const clickY = e.clientY - bounds.top;
					const actualHeight = image.clientWidth * image.naturalHeight / image.naturalWidth;
					const emptyBorder = (image.clientHeight - actualHeight) / 2;
					if (clickY < emptyBorder || clickY > emptyBorder + actualHeight) {
						return;
					} // clicking outside the image
				}
				if (this.shownRes !== Resolution.SD) {
					this.zoomedWidthOverflow = true; // cant zoom on SD pictures
				}
			}else{ // height is 100% unzoomed
				if (e.target === image){
					const clickX = e.clientX - bounds.left;
					const actualWidth = image.clientHeight * image.naturalWidth / image.naturalHeight;
					const emptyBorder = (image.clientWidth - actualWidth) / 2;
					if (clickX < emptyBorder || clickX > emptyBorder + actualWidth) {
						return;
					}
				}
				if (this.shownRes !== Resolution.SD) {
					this.zoomedHeightOverflow = true;
				}
			}
		}
		e.stopPropagation();
	}

	public hide(): void {
		this.visible = false;
		this.showImage = false;
		this.showSwipeMessage = false;
		this.visibleChange.emit(this.visible);
	}

	public switchHd(resolution: Resolution): void {
		if (resolution === Resolution.SD) {
			this.zoomedHeightOverflow = false;
			this.zoomedWidthOverflow = false;
		}
		this.shownRes = resolution;
		this.defaultRes = resolution;
		const newImgSrc = this.getImgSrc();
		if (newImgSrc !== this.imgSrc){
			this.loaded = false;
			this.imgSrc = newImgSrc;
		}
	}

	public swipe(nextImage: boolean, horizontally: boolean): void{
		if (!this.zoomedWidthOverflow && !this.zoomedHeightOverflow) {
			this.changeImage(nextImage);
		}
	}

	@HostListener('window:keydown.arrowright', ['true'])
	@HostListener('window:keydown.arrowleft', ['false'])
	public changeImage(nextImage: boolean): void{
		this.showSwipeMessage = false;
		// this.showImage = false;
		this.nextImage.emit(nextImage);
	}
}
