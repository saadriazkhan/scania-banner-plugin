import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
	public modalOpened: boolean = false;
	public itemSource: string;
	public displayCount: number = 0;

	public constructor() { }

	public ngOnChanges(): void {
		try {
			this.banner = JSON.parse(this.bannerconfiguration);
			this.calculateAdditionalCount();
		}
		catch (e) {
			this.banner = undefined;
		}
	}

	private calculateAdditionalCount(): void {
		if (this.banner.imageUrls)
			this.displayCount = this.banner.imageUrls.length;
		if (this.banner.videoUrls)
			this.displayCount += this.banner.videoUrls.length;
		if (this.banner.maxImagesToShow)
			this.displayCount -= this.banner.maxImagesToShow;
		if (this.banner.maxVideosToShow)
			this.displayCount -= this.banner.maxVideosToShow;
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

	public onCloseButtonClick(): void {
		this.banner.isEnabled = false;
	}

	public onActionButtonClick(): void {
		this.actionclickevent.emit();
	}

	public openModal(itemSource?: string): void {
		if (itemSource)
			this.itemSource = itemSource;
		else
			this.itemSource = undefined;

		this.modalOpened = true;
	}

	public closeModal(): void {
		this.modalOpened = false;
	}
}
