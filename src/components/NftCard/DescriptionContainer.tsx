import styled, {keyframes} from 'styled-components';
import { device } from '@core/devices';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/**
 * Description Container
 * Category: Universal Module
 * Purpose:
 *   a. Render card title, price row and buy row in a column-like fashion
 *   b. Fades in once user hovers over nft card
 * 
 * To Work:
 *   a. Create a keyframes fadeIn variable to dictate opacity change speed
 *   b. NOTE: assure z-index is higher than parent 
 */
export const DescriptionContainer = styled.div`
  animation: ${fadeIn} .8s ease-in-out;
  background-color: rgba(0, 0, 0, 0.75);
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 2;
  border-radius: 10px;
  @media ${device.mobile} {
    font-size: 14px;
  }
  @media ${device.tablet} {
      font-size: 15px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;