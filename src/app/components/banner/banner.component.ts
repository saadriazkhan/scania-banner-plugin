import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBanner } from '../../../interfaces/i-banner.interface';
import { IBannerType, BannerTypes } from 'src/interfaces/i-banner-type.interface';

@Component({
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

	@Input()
	public bannerconfiguration: string;

	@Output()
	public actionclickevent = new EventEmitter<string>();

	public banner: IBanner;
	public bannerType: IBannerType;

	public constructor() { }

	public ngOnInit(): void {;
		
		this.banner = JSON.parse(this.bannerconfiguration);
		this.bannerType = BannerTypes[this.banner.type];
	}

	public isBannerHidden(): boolean {
		if (!this.banner.startDateTime && this.banner.endDateTime)
			return false;

		let currentTime: Date = new Date();
		if (currentTime.getTime() < new Date(this.banner.startDateTime).getTime())
			return true;

		if (currentTime.getTime() > new Date(this.banner.endDateTime).getTime())
			return true;

		return false;
	}

	public onCrossButtonClick() {
		this.banner.isEnabled = false;
	}

	public onActionButtonClick(): void {
		this.actionclickevent.emit();
	}

}
