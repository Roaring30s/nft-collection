import { ImageUrl } from '@core/customTypes'; 
import { ZoomCanvas } from './ZoomCanvas';
import { zoom } from '@utils/Lens';
import { device } from '@core/devices';

/**
 * NFT Zoom Container Component
 * Category: Personalized Module
 * Purpose:
 *   a. Render ZoomCanvas, provide props & media query to make Canvas serve specific NFT card needs
 *   b. NftZoomContainer is meant to tailor ZoomCanvas for this use case while keeping the Canvas modularly agnostic
 * 
 * To Work:
 *   a. Import zoom function
 *   b. Import ZoomCanvas and feed necessary props
 *   c. Plug zoom onMouseMove hook and feed it event
 * 
 * @param props - ImageUrl - { src - string } - url of image
 * @returns Component w zoom capability for NFT Card
 */
export const NftZoomContainer = (props: ImageUrl) => {
    //Custom props for ZoomCanvas
    const borderRadius = '20px';
    const padding = '8px';
    const backgroundColor = 'hsl(120deg 20% 95%)';
    const boxShadow = '40px 40px 85px hsl(120deg 0% 40%)';
    const width = '200px';
    const height = '220px';
    const mediaQuery = `
    @media ${device.mobile} {
        width: 200px;
        height: 220px;
      }
      @media ${device.tablet} {
        width: 180px;
        height: 200px;
      }
      @media ${device.laptop} {
        width: 200px;
        height: 220px;
      }
      @media ${device.desktop} {
        width: 216px;
        height: 240px;
      }
    `;

    return (
        <ZoomCanvas 
            src={props.src} 
            width={width}
            height={height}
            borderRadius={borderRadius}
            padding={padding}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            mediaQuery={mediaQuery}
            onMouseMove={(e) => zoom(e)} 
        />
    );
}