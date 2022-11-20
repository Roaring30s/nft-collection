import styled,{ keyframes } from 'styled-components';
import { FadeInput, MagnifyClick } from '@core/customTypes';
import { device } from '@core/devices';
import MagnifyGlass from '@assets/images/magnifyGlass.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/**
 * MagnifyContainer
 * Category: Universal Module
 * Purpose:
 *   a. Container to hold a magnifying glass image
 * 
 * To Work:
 *   a. Apply bool for fade effect
 * 
 * @param props - FadeInput - { fade - boolean } - apply fade effect
 */

const MagnifyContainer = styled.div<FadeInput>`
  width: 30px;
  cursor: pointer;
  height: 30px;
  display: inline-block;
  border-radius: 10px;
  border: none;
  background-color: hsl(120deg 20% 95%);
  background-color: rgba(0, 0, 0, 0.60);
  position: absolute;
  top: 0px;
  left: 0px;
  animation: ${fadeIn} .4s ease-in-out;
  white-space: nowrap;
  z-index: 5;

  @media ${device.mobile} {
    visibility: hidden;
  }
  @media ${device.laptopS} {
    visibility: visible;
  }


`;

/**
 * Magnify Button
 * Category: Personalized Module
 * Purpose:
 *   a. Container to hold a magnifying container and image
 *   b. Apply an onclick capability
 * 
 * To Work:
 *   a. Apply and onClick function on component
 * 
 * @param props - MagnifyClick - { onclick - void } - apply fade effect
 * @returns A clickable button with a magnifying glass
 */

export const MagnifyButton = (props: MagnifyClick) => {
    return (
        <MagnifyContainer fade={props.fade} aria-label='Magnify Button to Zoom into Image' onClick={props.onClick}>
            <img 
              src={MagnifyGlass} 
              alt="Magnifying glass logo" 
              aria-label="Magnifying Glass" 
              style={{width: '15px', height: '15px', display: 'block', margin: 'auto', marginTop: '7px'}}
            />
        </MagnifyContainer>
    );
}
