export interface IBanner {
    isEnabled: boolean;
    type: 'greeting' | 'information' | 'warning' | 'danger';
    label: string;
    content: string;
    imageUrls?: string[];
    maxImagesToShow?: number;
    videoUrls?: string[];
    maxVideosToShow?: number;
    action: {
        text: string;
        url?: string;
    };
    startDateTime?: string;
    endDateTime?: string;
}