import styled from 'styled-components';
import { ZoomCanvasInterface } from '@core/customTypes';

/**
 * Zoom Canvas
 * Category: Universal Module
 * Purpose:
 *   a. Serve as canvas to apply zoom effect
 *   b. Given width, height & other props, canvas can be customized for any size image
 * 
 * To Work:
 *   a. Apply to a personalized container that specifies dimensions for canvas
 *   b. Feed props to customized canvas to fit intended image for zooming
 *   c. NOTE: Make sure canvas size matches image for parent container for image and canvas
 * 
 * @param props - ZoomCanvasInterface - {
 *  src: string;
    width: string;
    height: string;
    borderRadius: string;
    padding: string;
    backgroundColor: string;
    boxShadow: string;
    mediaQuery: string;
 * }
 */
export const ZoomCanvas = styled.figure.attrs({ 'aria-label': 'Zoomed Image' })<ZoomCanvasInterface>`
  background-position: 50% 50%;
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  box-shadow: ${props => props.boxShadow};
  background-image: url(${props => props.src});
  margin: 0;
  ${props => props.mediaQuery}
`;

