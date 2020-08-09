import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { IAlbum } from '../models/album.model';

@Component({
	selector: 'app-photography-menu',
	templateUrl: './photography-menu.component.html',
	styleUrls: ['./photography-menu.component.scss'],
})
export class PhotographyMenuComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	get albums(): IAlbum[]{
		return ConfigService.albums;
	}
}
