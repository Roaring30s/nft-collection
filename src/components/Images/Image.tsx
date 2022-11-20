import styled from 'styled-components';
import { NftImageInterface, ImageUrl, MediaLinkInterface } from '@core/customTypes';
import whiteCart from "@assets/images/cartWhite.svg";

/**
 * NFT Image
 * Category: Universal Module
 * Purpose:
 *   a. Hold image for NFT
 *   b. Given box shadow, background-color & other props, image can be customized
 * 
 * To Work:
 *   a. Apply to a personalized container that specifies props for NftImage
 *   b. NOTE: Make sure canvas size matches image for parent container for image and canvas
 *   c. NOTE: Remember, the width and height match parent, if padding is desired, must be deducted from 
 *            width and height percentages. Example. 4% padding is on each side so width must be 92%.
 * 
 * @param props - NftImageInterface - {
    src: string;
    width: string;
    height: string;
    borderRadius: string;
    boxShadow: string;
    backgroundColor: string;
    padding: string;
 * }
 */
export const NftImage = styled.img<NftImageInterface>`
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  box-shadow: ${props => props.boxShadow};
  width: ${props => props.width};
  height: ${props => props.height};
  backdrop-filter: blur(15px);
  background: rgba(255,255,255, 0.4);
`;

/**
 * Price Logo
 * Category: Universal Module
 * Holds pricing symbol, currently AVAX 
 */
export const PriceLogo = styled.img`
  bottom: 0;
  height: 15px;
  vertical-align: bottom;
  display: inline;
`;

/**
 * Price Logo
 * Category: Universal Module
 * Holds pricing symbol, currently AVAX 
 */
 export const Pfp = styled.img`
 border-radius: 1em;
 width: 7em;
 height: 7em;
 padding: 7px;
 background-color: rgba(255,255,255, 0.4);
 box-shadow: 30px 5px 70px hsl(0deg 0% 90%), 
 inset -3px -3px 16px hsl(120deg 5% 50% / 70%), 
 inset 0px 14px 28px hsl(120deg 20% 95%);
`;

/**
 * White Cart Logo
 * Category: Universal Module
 * Holds shopping cart 
 */
export const Cart = styled.img`
  height: 17px;
  cursor: pointer;
`;

/**
 * Media Link
 * Category: Universal Module
 * Holds Social Media Icon With Link
 */
 export const MediaLink = styled.div`
  height: .8em;
  width: .8em;
  background-color: #E8E8E8;
  border: 1px solid gainsboro;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: rgba(178, 141, 255 0.9);
  box-shadow: 15px 10px 65px hsl(120deg 0% 90%), 
  inset -2px -3px 4px hsl(120deg 5% 50% / 70%), 
  inset 0px 5px 28px hsl(120deg 20% 95%);
`;

/**
 * Media Link Container
 * Category: Universal Module
 * Purpose:
 *   a. Purpose Hold Media Link Icon, anchor link
 * 
 * To Work:
 *   a. Add Cart module and provide src
 * @returns Clickable White Shopping Cart image
 */
 export const MediaLinkContainer = (props: MediaLinkInterface) => {
  return (
    <a href={props.link}>
      <MediaLink>
        <img src={props.src} style={{width: '.5em', height: '.5em' }} alt="Social Media Link"/>
      </MediaLink>
    </a>
  );
}

/**
 * White Shopping Cart Component
 * Category: Personalized Module
 * Purpose:
 *   a. Hold cart image
 * 
 * To Work:
 *   a. Add Cart module and provide src
 * @returns Clickable White Shopping Cart image
 */
export const WhiteShoppingCart = () => {
  return (
    <Cart src={whiteCart} alt="Add to Cart" aria-label='Cart' aria-details='Shopping cart button to add to cart' />
  );
}


/**
 * NFT Image Container
 * Category: Personalized Module
 * Purpose:
 *   a. Hold NFT Image & apply personalized props
 * 
 * To Work:
 *   a. Create required props and apply in return
 *   b. If zooming to be applied, assure dimension props match the ZoomCanvas component
 * 
 * @param props - ImageUrl - {
 *  src: string;
 * @returns personalized NFTImage component
 * }
 */
export const NftImageContainer = (props: ImageUrl) => {
  //Custom props for Nft Image Component
  const borderRadius = '20px';
  const backgroundColor = 'hsl(120deg 20% 95%)';
  const width = "92%";
  const height = "92%";
  const padding = "4%";
  const boxShadow = `
  25px 25px 95px hsl(0deg 0% 66%), 
  inset -8px -8px 16px hsl(120deg 5% 50% / 70%), 
  inset 0px 14px 28px hsl(120deg 20% 95%)`;

  return (
    <NftImage 
      src={props.src}
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      width={width}
      height={height}
    />
  );
}
