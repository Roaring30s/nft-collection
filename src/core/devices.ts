import { MediaQueryProps } from '@core/customTypes';

const size: MediaQueryProps = {
    mobile: '0px',
    mobileL: '550px',
    tablet: '768px',
    laptopS: '950px',
    laptop: '1024px',
    laptopL: '1200px',
    laptopXL: '1300px',
    desktop: '2560px'
}

export const device: MediaQueryProps = {
    mobile: `(min-width: ${size.mobile})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    laptopXL: `(min-width: ${size.laptopXL})`,
    desktop: `(min-width: ${size.desktop})`
};
