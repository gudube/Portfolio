import { Injectable } from '@angular/core';
import photosJson from '../assets/photography/photos.json';
import { IAlbum } from './photography-page/models/album.model';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	public static albums: IAlbum[];

	constructor() { }

	public loadPhotography(): void {
		ConfigService.albums = photosJson.albums;
	}
}
