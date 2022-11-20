import styled, {keyframes} from 'styled-components';
import { EffectProps, PriceInfoInterface } from '@core/customTypes';
import { PriceLogo } from '@components/Images';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .9;
  }
`;

/**
 * Rarity tag
 * Category: Universal Module
 * Purpose:
 *   a. Show Rarity Tag for an NFT Collection Card
 * 
 * To Work:
 *   a. Create a keyframes fadeIn variable to dictate opacity change speed
 * @param EffectProps {
 *  onClick: () => void;
 * }
 */
export const RarityTag = styled.span<EffectProps>`
  animation: ${fadeIn} .4s ease-in-out;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.75rem;
  height: 100%;
  line-height: 1rem;
  margin-left: auto;
  margin-right: 0.125rem;
  padding: 0.25rem 0.75rem;
  width: 100%;
  white-space: nowrap;
`;

/**
 * Wallet tag
 * Category: Universal Module
 * Purpose:
 *   a. Hold collection contract address
 * 
 * To Work:
 *   a. Plug in wallet address as child
 */
export const WalletTag = styled.span`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 0.5em;
  color: white;
  font-size: 0.6em;
  line-height: 1em;
  padding: 0.25rem 0.75em;
  white-space: wrap;
`;

/**
 * Title Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show name of NFT Card
 * 
 * To Work:
 *   a. Wrap around designated text
 */
export const TitleTag = styled.p`
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  padding: 0;
  margin: 2%;
`;

/**
 * Stats Title Tag
 * Category: Personalized Module
 * Purpose:
 *   a. Display Stat Title in upper left corner of parent
 * 
 * To Work:
 *   a. Import into Stats parent component
 */
 export const StatsTitleTag = styled.p`
 color: #484848;
 font-size: .8em;
 font-weight: normal;
 padding-top: 4%;
 text-align: center;
 margin: 0;
`;

/**
 * Title Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show name of NFT Card
 * 
 * To Work:
 *   a. Wrap around designated text
 */
 export const CollectionNameTag = styled.p`
 color: black;
 font-size: 1em;
 font-weight: bold;
 width: 100%;
 padding: 0;
 margin: 2%;
`;

/**
 * Price Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show Price of NFT
 * 
 * To Work:
 *   a. Wrap around designated price text
 */
export const PriceTag = styled.p`
  bottom: 0;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: inline;
  vertical-align: bottom;
`;

/**
 * Top Bid Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show Top Bid of NFT
 * 
 * To Work:
 *   a. Wrap around designated bid price text
 */
export const TopBidTag = styled.span`
  bottom: 0;
  color: Gainsboro;
  font-size: 10px;
  margin: 0;
  display: inline;
  vertical-align: bottom;
  align-self: end;
`;

/**
 * Buy Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show Buy button for NFT card
 * 
 * To Work:
 *   a. Wrap around designated buy text
 */
export const BuyTag = styled.p`
  color: MediumSpringGreen;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
`;

/**
 * Buy Tag
 * Category: Universal Module
 * Purpose:
 *   a. Show Buy button for NFT card
 * 
 * To Work:
 *   a. Wrap around designated buy text
 * @params - PriceInfoInterface - {
 *  price: string;
 *  image: string;
 * }
 */
export const AvaxPriceTag = ({price, image}: PriceInfoInterface) => {
  return (
    <span>
      <PriceLogo src={image} alt="Avax Logo" aria-label='AVAX'/>
      <PriceTag aria-label='Price'>{price}</PriceTag>
    </span>
  );
}


