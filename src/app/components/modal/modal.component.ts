import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'scania-plugin-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	@Input()
	public videoUrls: string[] = [];

	@Input()
	public imageUrls: string[] = [];

	@Input()
	public displayItemSource: string;

	@Output()
	public closeModalEventEmitter = new EventEmitter<void>();

	public displayList: { src: string, type: string }[] = [];
	public displayItemIndex: number = 0;

	constructor() { }

	public ngOnInit(): void {
		this.displayList = [
			...this.imageUrls.map(imageUrl => (
				{ src: imageUrl, type: 'image' })
			),
			...this.videoUrls.map(videoUrl => (
				{ src: videoUrl, type: 'video' })
			)
		];

		if (this.displayItemSource)
			this.displayList.forEach((element, index) => {
				if (element.src === this.displayItemSource)
					this.displayItemIndex = index;
			});

	}

	public closeModal(): void {
		this.closeModalEventEmitter.emit();
	}

	public next(): void {
		if (this.displayItemIndex < this.displayList.length - 1)
			this.displayItemIndex++;
	}

	public previous(): void {
		if (this.displayItemIndex > 0)
			this.displayItemIndex--;
	}

	public ngOnDestroy(): void { }
}
