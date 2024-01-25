import { Component, Input } from '@angular/core';
// import { IMediaElement } from '@videogular/ngx-videogular/core';

@Component({
	selector: 'app-video-player',
	templateUrl: './video-player.component.html',
	styleUrl: './video-player.component.scss'
})

export class VideoPlayerComponent {
	@Input() public vidSrc: string;
	// private vidUrl = (vidSrc: string): boolean => { return URL.createObjectURL(vidSrc); }

	// public videoElement: IMediaElement;

	static isVideo = (fileName: string): boolean => { return fileName.toLowerCase().endsWith('.mp4'); }

	static getThumbnail = (fileName: string): string => {
		if(VideoPlayerComponent.isVideo(fileName)) {
			return fileName.substring(0, fileName.lastIndexOf('.')) + '.jpg';
		} else {
			return fileName;
		}
	}

}

