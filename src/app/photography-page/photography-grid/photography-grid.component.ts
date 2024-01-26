import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FullImageViewerComponent } from '../full-image-viewer/full-image-viewer.component';
import { IAlbum } from '../models/album.model';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements AfterViewInit, OnDestroy {
	public readonly VideoPlayerComponent: typeof VideoPlayerComponent = VideoPlayerComponent;

	@Input()
	public album: IAlbum;

	public get showingFullImage(): boolean {
		return this._showingFullImage;
	}

	@Input()
	public set showingFullImage(newValue: boolean) {
		if (newValue) {
			document.body.style.overflow = 'hidden';
			this.gridVideos.forEach(x => x.nativeElement.pause());
			if (location.hash != '#selected')
				history.pushState(null, null, location.pathname + '#selected');
		}
		else {
			document.body.style.overflow = 'auto';
			this.gridVideos.forEach(x => x.nativeElement.play());
			if (location.hash == '#selected')
				history.pushState(null, null, location.pathname);
		}
		this._showingFullImage = newValue;
	}

	constructor() {}

	@ViewChild(FullImageViewerComponent) public imageViewer: FullImageViewerComponent;

	@ViewChildren('gridVideo') private gridVideos: QueryList<ElementRef<HTMLVideoElement>>;

	private _showingFullImage = false;
	public hasPreviousImage = false;
	public hasNextImage = false;
	public gridView = true;

	private selectedIndex: number;

	ngAfterViewInit(): void {
		this.onHashChange();
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}

	@HostListener('window:hashchange')
	private onHashChange() {
		if(location.hash == '')
			this.showingFullImage = false;
		else if(location.hash == '#selected') {
			if(this.selectedIndex) {
				this.selectImage(this.selectedIndex);
			} else {
				history.replaceState(null, null, location.pathname);
				this.showingFullImage = false;
			}
		}
	}

	public selectImage(index: number): void {
		if(this.selectedIndex < 0 || this.selectedIndex >= this.album.photoFileNames.length)
			return;
		this.selectedIndex = index;
		this.imageViewer.setImage(this.album.id, this.album.photoFileNames[index]);

		this.hasPreviousImage = index > 0;
		this.hasNextImage = index < this.album.photoFileNames.length - 1;
		this.showingFullImage = true;
	}

	public nextImage(next: boolean): void{
		const newId = next ? this.selectedIndex + 1 : this.selectedIndex - 1;
		this.selectImage(newId);
	}
}
