import { Component, OnInit } from '@angular/core';
import { PhotographyService } from '../photography.service';

@Component({
	selector: 'app-photography-menu',
	templateUrl: './photography-menu.component.html',
	styleUrls: ['./photography-menu.component.scss'],
})
export class PhotographyMenuComponent implements OnInit {
	constructor(public service: PhotographyService) {}

	ngOnInit(): void {}
}
