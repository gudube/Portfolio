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
	public album: IAlbum;

	constructor(private route: ActivatedRoute, private service: PhotographyService) {}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			//todo: Add guard to make sure the albumId is valid in the router itself and fo to 404 otherwise
			const albumId: string = params['albumId'];
			this.album = this.service.albums.find(x => x.id == albumId);
		});
	}
}
