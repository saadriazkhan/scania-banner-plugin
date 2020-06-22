export interface IBannerType {
    background: string;
    icon: string;
    iconUrl?: string;
}

export const BannerTypes: Record<string, IBannerType> = {
    greeting: {
        background: 'success',
        icon: 'fa-tasks',
    },
    warning: {
        background: 'warning',
        icon: 'fa-home',
    },
    action: {
        background: 'info',
        icon: 'fa-home',
    },
    danger: {
        background: 'danger',
        icon: 'fa-times',
    }
}