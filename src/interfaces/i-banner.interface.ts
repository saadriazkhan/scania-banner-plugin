export interface IBanner {
    isEnabled: boolean;
    type: 'greeting' | 'information' | 'warning' | 'danger';
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
}