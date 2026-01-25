export interface socialLink {
    label: string;
    url: string;
}

export interface profile {
    name: string;
    location: string;
    description: string;
    avatar: string;
    links: socialLink[];
}
