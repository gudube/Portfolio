import { Injectable } from '@angular/core';
import { IAlbum } from './models/album.model';
import photosJson from '../../assets/photography/photos.json';

@Injectable({
	providedIn: 'root'
})
export class PhotographyService {
	public albums: IAlbum[] = [];

	constructor() { }

	public loadAlbums(): void {
		this.albums = photosJson.albums;
	}
}
