import styled from 'styled-components';
import { DivControls } from '@core/customTypes';

/**
 * Div Row
 * Category: Universal Module
 * Purpose:
 *   a. Hold children in row-like fashion
 * 
 * To Work:
 *   a. Apply props to dictate children size and alignment
 * 
 * @param props - DivControl - {
 *  fontSize: string;
    height: string;
    justifyContent: string;
    margin?: string
 */
export const DivRow = styled.div<DivControls>`
  display: flex;
  flex-flow: row no-wrap;
  font-size: ${props => props.fontSize};
  justify-content: ${props => props.justifyContent};
  height: ${props => props.height};
  margin: ${props => props.margin};
  align-items: center;
  position: relative;
`;