export interface IBannerType {
    background: string;
    icon: string;
    iconUrl?: string;
}

export const BannerTypes: Record<string, IBannerType> = {
    greeting: {
        background: 'primary',
        icon: 'fa-tasks',
    },
    warning: {
        background: '',
        icon: '',
    },
    action: {
        background: '',
        icon: '',
    },
    danger: {
        background: '',
        icon: '',
    }
}