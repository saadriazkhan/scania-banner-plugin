export interface IBanner {
    type: string;
    enabled: boolean;
    label: string;
    content: string;
    imageUrl?: String;
    videoUrl?: String;
    action: String;
    actionUrl?: String;
    startTime?: String;
    endTime?: String;
    translateToLanguage?: String;
    isBannerHidden(): boolean;
}