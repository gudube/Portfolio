import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from '../models/album.model';
import { PhotographyService } from '../photography.service';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements OnInit {
	//@ViewChild(FullImageViewerComponent) public imageViewer: FullImageViewerComponent;
	public album: IAlbum;

	public selectedHdImg: string;
	public selectedSdImg: string;
	public showingFullImage = false;

	constructor(private route: ActivatedRoute, private service: PhotographyService) {}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			//todo: Add guard to make sure the albumId is valid in the router itself and fo to 404 otherwise
			const albumId: string = params['albumId'];
			this.album = this.service.albums.find(x => x.id == albumId);
		});
	}

	public selectImage(fileName: string): void{
		this.selectedSdImg = 'assets/photography/' + this.album.id + '/sd/' + fileName;
		this.selectedHdImg = 'assets/photography/' + this.album.id + '/hd/' + fileName;
		this.showingFullImage = true;
		document.body.style.overflow = 'hidden';
	}

}
