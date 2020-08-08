import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-photography-grid',
	templateUrl: './photography-grid.component.html',
	styleUrls: ['./photography-grid.component.scss'],
})
export class PhotographyGridComponent implements OnInit {
	@Input() public folderName: string;

	constructor() {}

	ngOnInit(): void {}
}
