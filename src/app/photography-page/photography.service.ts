import { Injectable } from '@angular/core';
import { IAlbum } from './models/album.model';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class PhotographyService {
	public albums: IAlbum[] = [];

	constructor(private _route: Router) { }

	public loadAlbums(): void {
		this.albums = this._route.config.filter(route => {
			const paths = route.path.split('/');
			return paths.length > 1 && paths[0] == 'photography';
		}).map(route => route.data.personal as IAlbum);
	}
}
