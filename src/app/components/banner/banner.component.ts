import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';
import { IBanner } from '../../../interfaces/i-banner.interface';

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
	public iconType: Record<string, string> = {
		'greeting': 'information-greeting',
		'information': 'information-info',
		'warning': 'warning-warning',
		'danger': 'warning-danger'
	};

	public constructor() { }

	public ngOnChanges(): void {
		try {
			this.banner = JSON.parse(this.bannerconfiguration);
		}
		catch (e) {
			this.banner = undefined;
		}
	}

	public isBannerHidden(): boolean {
		if (!this.banner.startDateTime && this.banner.endDateTime)
			return false;

		let currentTime: Date = new Date();
		
		if (currentTime.getTime() < new Date(parseInt(this.banner.startDateTime)).getTime())
			return true;

		if (currentTime.getTime() > new Date(parseInt(this.banner.endDateTime)).getTime())
			return true;

		return false;
	}

	public onCloseButtonClick() {
		this.banner.isEnabled = false;
	}

	public onActionButtonClick(): void {
		this.actionclickevent.emit();
	}
}
