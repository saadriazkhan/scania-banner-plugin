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
	public showBanner: boolean = false;
	public modalOpened: boolean = false;
	public itemSource: string;
	public displayCount: number = 0;

	public startTimeOut: number;
	public endTimeOut: number;

	public constructor() { }

	public ngOnChanges(): void {
		try {
			this.banner = JSON.parse(this.bannerconfiguration);
			this.calculateAdditionalCountForImagesNavigation();

			if (this.banner && this.banner.startDateTime && this.banner.endDateTime) {
				this.showBanner = !this.isBannerHidden();

				clearTimeout(this.startTimeOut);
				clearTimeout(this.endTimeOut);

				this.timeWatcher(); // not a good approach but okay for now
			}

		}
		catch (e) {
			this.banner = undefined;
		}
	}

	private timeWatcher(): void {
		let currentDateTime = new Date();

		if (this.getTimeFromString(this.banner.startDateTime) > currentDateTime.getTime())
			this.startTimeOut = setTimeout(
				() => this.showBanner = true,
				this.getTimeFromString(this.banner.startDateTime) - currentDateTime.getTime()
			);

		if (this.getTimeFromString(this.banner.endDateTime) > currentDateTime.getTime())
			this.endTimeOut = setTimeout(
				() => this.showBanner = false,
				this.getTimeFromString(this.banner.endDateTime) - currentDateTime.getTime()
			);
	}

	private getTimeFromString(stringTime: string): number {
		return new Date(parseInt(stringTime)).getTime();
	}

	private calculateAdditionalCountForImagesNavigation(): void {
		if (this.banner.imageUrls)
			this.displayCount = this.banner.imageUrls.length;

		if (this.banner.videoUrls)
			this.displayCount += this.banner.videoUrls.length;

		if (this.banner.maxImagesToShow)
			this.displayCount -= this.banner.maxImagesToShow;

		if (this.banner.maxVideosToShow)
			this.displayCount -= this.banner.maxVideosToShow;
	}

	private isBannerHidden(): boolean {
		const currentTime: Date = new Date();

		if (currentTime.getTime() < this.getTimeFromString(this.banner.startDateTime) || currentTime.getTime() > this.getTimeFromString(this.banner.endDateTime))
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
