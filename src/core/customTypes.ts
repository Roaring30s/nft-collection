export interface PriceInfoInterface {
    price?: string;
    topBid?: string;
    image?: string;
}

export interface FadeInput {
    fade: boolean;
}

export interface StatsInterface {
    title: string;
    quantity: string;
    avax: boolean;
}

export interface StatsContainerInterface {
    volAmount: string;
    ownersAmount: string;
    floorPrice: string;
    itemsAmount: string;
    
}

export interface NftCardInterface {
    src: string;
    title: string;
    rarity?: string;
    price: string;
    bid?: string;
}

export interface DivControls {
    fontSize: string;
    height: string;
    justifyContent: string;
    margin?: string;
}

export interface ImageUrl {
    src: string;
}

export interface MediaLinkInterface {
    src: string;
    link: string;
}

export interface SocialsInterface {
    twitterLink?: string;
    twitterSrc: string;
    discordLink?: string;
    discordSrc: string; 
    wwwLink?: string;
    wwwSrc: string;  
}

export interface CollectionHeaderInterface {
    pfp: string;
    name: string;
    contractAddress: string;
}

export interface TwoDimensionsInterface {
    width: string;
    height: string;
}

export interface ZoomCanvasInterface {
    src: string;
    width: string;
    height: string;
    borderRadius: string;
    padding: string;
    backgroundColor: string;
    boxShadow: string;
    mediaQuery: string;
}

export interface NftImageInterface {
    src: string;
    width: string;
    height: string;
    borderRadius: string;
    boxShadow: string;
    backgroundColor: string;
    padding: string;
}

export interface NftImageProps {
    imageUrl: Url,
    rarity?: boolean,
    magnify?: boolean
}

export interface MagnifyClick extends EffectProps {
    onClick: () => void;
}

export interface Click {
    onClick: () => void;
}

export interface MediaQueryProps {
    mobile: string,
    mobileL: string,
    tablet: string,
    laptopS: string,
    laptop: string,
    laptopL: string,
    laptopXL: string,
    desktop: string
}

export interface EffectProps {
    fade: boolean;
}

export interface Url {
    href: string,
};

export interface Wallet {
    address: string,
};

export interface ErrorInterface {
    overlap: string,
    onClick?: () => void;
}
