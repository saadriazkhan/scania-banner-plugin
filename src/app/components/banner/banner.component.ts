import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';
import { IBanner } from '../../../interfaces/i-banner.interface';
import { IBannerType, BannerTypes } from 'src/interfaces/i-banner-type.interface';

@Component({
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class BannerComponent implements OnChanges {

	@Input()
	public bannerconfiguration: string;

	@Output()
	public actionclickevent = new EventEmitter<string>();

	public banner: IBanner;
	public bannerType: IBannerType;

	public constructor() { }

	public ngOnChanges(): void {
		try {
			this.banner = JSON.parse(this.bannerconfiguration);
			this.bannerType = BannerTypes[this.banner.type];
		}
		catch (e) {
			this.banner = undefined;
		}
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
