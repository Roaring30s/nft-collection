import styled from 'styled-components';
import { device } from '@core/devices';

/**
 * Nft Card Container
 * Category: Personalized Module
 * Purpose:
 *   a. House all card info while defining predetermined size and heights
 * 
 * To Work:
 *   a. Plug in components in NFT Card component
 */
 export const NftCardContainer = styled.div`
    position: relative;
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
