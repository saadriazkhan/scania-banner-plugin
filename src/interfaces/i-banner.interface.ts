export interface IBanner {
    isEnabled: boolean;
    type: string;
    label: string;
    content: string;
    imageUrl?: string;
    videoUrl?: string;
    action: {
        text:string;
        url?:string;
    };
    startDateTime?: string;
    endDateTime?: string;
    translateToLanguage?: string;
}