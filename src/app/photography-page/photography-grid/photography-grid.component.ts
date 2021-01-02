import { Component, OnInit, ViewChild } from '@angular/core';
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
	public showingFullImage = false;
	public hasPreviousImage = false;
	public hasNextImage = false;

	constructor(private route: ActivatedRoute, private service: PhotographyService) {}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			//TODO [2]: Add guard to make sure the albumId is valid in the router itself and fo to 404 otherwise
			const albumId: string = params['albumId'];
			this.album = this.service.albums.find(x => x.id == albumId);
		});
	}

	private selectedFileName: string;

	public selectImage(index: number): void{
		this.selectedFileName = this.album.photoFileNames[index];
		this.imageViewer.setImage(this.album.id, this.selectedFileName);

		this.hasPreviousImage = index > 0;
		this.hasNextImage = index < this.album.photoFileNames.length - 1;
		this.showingFullImage = true;
		document.body.style.overflow = 'hidden';
	}

	public nextImage(next: boolean): void{
		const currentId = this.album.photoFileNames.indexOf(this.selectedFileName);
		const newId = next ? currentId + 1 : currentId - 1;
		if(newId >=0 && newId < this.album.photoFileNames.length)
			this.selectImage(newId, );
	}
}
