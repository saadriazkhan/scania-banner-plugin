import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBanner } from '../../../interfaces/i-banner.interface';
import { IBannerType, BannerTypes } from 'src/interfaces/i-banner-type.interface';

@Component({
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, IBanner {

	@Input()
	public type: string = 'greeting';

	@Input()
	public enabled: boolean = true;

	@Input()
	public label: string = 'label comes here';

	@Input()
	public content: string = 'Dummy banner text';

	@Input()
	public imageUrl: string = 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png';

	@Input()
	public videoUrl: string;

	@Input()
	public action: string = 'Action';

	@Input()
	public actionUrl: string;

	@Input()
	public startTime: string;

	@Input()
	public endTime: string;

	@Input()
	public translateToLanguage: string;

	@Output()
	public onActionButtonClickEvent = new EventEmitter<string>();

	public bannerType: IBannerType;

	public constructor() { }

	public ngOnInit(): void {
		this.bannerType = BannerTypes[this.type];

		console.log(this.imageUrl);

	}

	public isBannerHidden(): boolean {
		if (!this.startTime && this.endTime)
			return false;

		let currentTime: Date = new Date();
		if (currentTime.getTime() < new Date(this.startTime).getTime())
			return true;

		if (currentTime.getTime() > new Date(this.endTime).getTime())
			return true;

		return false;
	}

	public onActionButtonClick(): void {
		this.onActionButtonClickEvent.emit();
	}

}
