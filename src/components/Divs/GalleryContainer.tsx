import styled from 'styled-components';
import { device } from '@core/devices';

/**
 * Gallery Container
 * Category: Personalized Module
 * Purpose:
 *   a. Holds NFT Cards & manages columns and rows
 * 
 * To Work:
 *   a. Apply props to dictate children size and alignment
 */
export const GalleryContainer = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2vh;
  -ms-overflow-style: none;  
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${device.mobile} {
    grid-template: repeat(2, 220px) / repeat(1, 220px);
    gap: 4% 5px;
    width: 95%;
    height: 70%;
    border-radius: 1%;
    box-shadow: 15px 10px 65px hsl(0deg 0% 65%), 
    inset 1px -1px 4px hsl(0deg 0% 90% / 70%), 
    inset 1px 4px 28px hsl(120deg 20% 95%);
  }
  @media ${device.mobileL} {
    grid-template: repeat(2, 220px) / repeat(2, 220px);
    gap: 4% 5px;
    width: 95%;
    height: 62%;
    box-shadow: 15px 10px 65px hsl(0deg 0% 60%), 
    inset 1px -1px 4px hsl(0deg 0% 90% / 70%), 
    inset 1px 4px 28px hsl(120deg 20% 95%);
  }
  @media ${device.tablet} {
    grid-template: repeat(2, 220px) / repeat(3, 220px);
    gap: 4% 5px;
    width: 95%;
    border-radius: 1%;
    height: 60%;
    box-shadow: 15px 10px 65px hsl(120deg 0% 60%), 
    inset 1px -1px 4px hsl(120deg 5% 50% / 70%), 
    inset -1px 0px 28px hsl(120deg 20% 95%);
  }
  @media ${device.laptopS} {
    border-radius: 0% 2% 2% 0%;
    box-shadow: 15px 10px 65px hsl(120deg 0% 40%), 
    inset -2px -1px 4px hsl(120deg 5% 50% / 70%), 
    inset -1px 0px 28px hsl(120deg 20% 95%);
    height: 86%;
  }
  @media ${device.laptop} {
    border-radius: 0% 2% 2% 0%;
    grid-template: repeat(2, 220px) / repeat(3, 220px);
    gap: 4% 5px;
    width: 80%;
  }
  @media ${device.laptopL} {
    grid-template: repeat(2, 220px) / repeat(3, 220px);
    gap: 4% 5px;
    width: 80%;
  }
  @media ${device.laptopXL} {
    grid-template: repeat(2, 220px) / repeat(4, 220px);
    gap: 4% 5px;
    width: 80%;
  }
  @media ${device.desktop} {
    grid-template: repeat(2, 220px) / repeat(4, 220px);
    gap: 4% 5px;
    width: 80%;
  }
`;