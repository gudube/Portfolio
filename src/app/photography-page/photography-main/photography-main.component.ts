import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from '../models/album.model';
import { PhotographyService } from '../photography.service';

@Component({
	selector: 'app-photography-main',
	templateUrl: './photography-main.component.html',
	styleUrls: ['./photography-main.component.scss']
})
export class PhotographyMainComponent implements OnInit {

	constructor(private route: ActivatedRoute, private service: PhotographyService) { }

	public album: IAlbum;

	ngOnInit(): void {
		this.route.url.subscribe(url => {
			const albumId: string = url[1].path;
			this.album = this.service.albums.find(x => x.id === albumId);
		});
	}

}
