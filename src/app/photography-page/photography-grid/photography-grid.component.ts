import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements OnInit {

	public album: string;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.album = params['album'];
		});
	}
}
