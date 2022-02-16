import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FullImageViewerComponent } from '../full-image-viewer/full-image-viewer.component';
import { IAlbum } from '../models/album.model';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements OnInit, OnDestroy {
	@Input()
	public album: IAlbum;

	public get showingFullImage(): boolean {
		return this._showingFullImage;
	}

	@Input()
	public set showingFullImage(newValue: boolean) {
		if (newValue) {
			document.body.style.overflow = 'hidden';
		}
		else {
			document.body.style.overflow = 'auto';
		}
		this._showingFullImage = newValue;
	}

	constructor() {}

	@ViewChild(FullImageViewerComponent) public imageViewer: FullImageViewerComponent;

	private _showingFullImage = false;
	public hasPreviousImage = false;
	public hasNextImage = false;
	public gridView = true;

	private selectedFileName: string;

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}

	public selectImage(index: number): void{
		this.selectedFileName = this.album.photoFileNames[index];
		this.imageViewer.setImage(this.album.id, this.selectedFileName);

		this.hasPreviousImage = index > 0;
		this.hasNextImage = index < this.album.photoFileNames.length - 1;
		this.showingFullImage = true;
	}

	public nextImage(next: boolean): void{
		const currentId = this.album.photoFileNames.indexOf(this.selectedFileName);
		const newId = next ? currentId + 1 : currentId - 1;
		if (newId >= 0 && newId < this.album.photoFileNames.length) {
			this.selectImage(newId, );
		}
	}
}
