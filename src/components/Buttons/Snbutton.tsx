import styled from 'styled-components';
import { FadeInput } from '@core/customTypes';

/**
 * SN Button
 * Category: Universal Module
 * Purpose:
 *   a. Render button for submissions 
 * 
 * To Work:
 *   a. Apply bool for fade effect
 * 
 * @param props - FadeInput - { fade - boolean } - apply fade effect
 */

export const Snbutton = styled.button<FadeInput>`
  background: ${props => props.fade ? "palevioletred" : "white"};
  color: ${props => props.fade ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;