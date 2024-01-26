import { Component, Input, ViewChild } from '@angular/core';
import { VgControlsComponent } from '@videogular/ngx-videogular/controls';
// import { IMediaElement } from '@videogular/ngx-videogular/core';

@Component({
	selector: 'app-video-player',
	templateUrl: './video-player.component.html',
	styleUrl: './video-player.component.scss'
})

export class VideoPlayerComponent {
	@Input() public vidSrc: string;
	static isVideo = (fileName: string): boolean => { return fileName.toLowerCase().endsWith('.mp4'); }

	// static getThumbnail = (fileName: string): string => {
	// 	if(VideoPlayerComponent.isVideo(fileName)) {
	// 		return fileName.substring(0, fileName.lastIndexOf('.')) + '.jpg';
	// 	} else {
	// 		return fileName;
	// 	}
	// }

	@ViewChild('controls') public controls: VgControlsComponent;


	public isInControls(event: HammerInput): boolean {
		const pointer = event.changedPointers[0] as PointerEvent;
		const controlsBox = this.controls.elem.getBoundingClientRect();
		if(!pointer) return false;
		// const target = event.target as HTMLElement;
		// target == this.controls.elem || this.controls.elem.contains(target)
		// would be when mouse up. but here we care more about when mouse down
		return (pointer.clientX - event.deltaX) > controlsBox.left
		&& (pointer.clientX - event.deltaX) < controlsBox.right
		&& (pointer.clientY - event.deltaY) > controlsBox.top
		&& (pointer.clientY - event.deltaY) < controlsBox.bottom;
	}

}

