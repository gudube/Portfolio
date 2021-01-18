import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullImageViewerComponent } from '../full-image-viewer/full-image-viewer.component';
import { IAlbum } from '../models/album.model';
import { PhotographyService } from '../photography.service';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements OnInit { //TODO [2]: add lazy loading or at least loading from start
	@ViewChild(FullImageViewerComponent) public imageViewer: FullImageViewerComponent;

	public album: IAlbum;
	private _showingFullImage = false;
	public get showingFullImage(): boolean {
		return this._showingFullImage;
	}

	@Input()
	public set showingFullImage(newValue: boolean) {
		if(newValue)
			document.body.style.overflow = 'hidden';
		else
			document.body.style.overflow = 'auto';
		this._showingFullImage = newValue;
	}
	public hasPreviousImage = false;
	public hasNextImage = false;
	public gridView = true;

	constructor(private route: ActivatedRoute, private service: PhotographyService) {}

	ngOnInit(): void {
		this.route.url.subscribe(url => {
			const albumId: string = url[1].path;
			this.album = this.service.albums.find(x => x.id == albumId);
		});
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'auto';
	}

	private selectedFileName: string;

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
		if(newId >=0 && newId < this.album.photoFileNames.length)
			this.selectImage(newId, );
	}
}
