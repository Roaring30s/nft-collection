import styled  from 'styled-components';
import { ErrorInterface, Click } from '@core/customTypes';

/**
 * ErrorContainer
 * Category: Personalized Module
 * Purpose:
 *   a. Container to hold error output
 * 
 * To Work:
 *   a. Apply as parent for button and error text
 */
const ErrorContainer = styled.div<ErrorInterface>`
    font-size: 16px;
    position: ${props => props.overlap};
    margin: auto;
`;

/**
 * ErrorButton
 * Category: Universal Module
 * Purpose:
 *   a. Button to execute error recovery action
 * 
 * To Work:
 *   a. Apply within respective Error Container
 * 
 * @params props - onclick: () => void
 */
const ErrorButton = styled.button<Click>`
    border-radius: 15px;
    padding: 4px;
    background-color: white;
    border 1px solid Gainsboro;
    cursor: pointer;
`;

/**
 * Error
 * Category: Personalized Module
 * Purpose:
 *   a. Container to hold button and text
 *   b. Apply an onclick capability
 * 
 * To Work:
 *   a. Apply and onClick function on component
 * 
 * @param props - Click - { onclick - void } - apply fade effect
 * @returns A clickable button with a magnifying glass
 */
export const Error = (props: ErrorInterface) => {
    return (
        <ErrorContainer aria-label='Error Message Shown' overlap={props.overlap}>
            <p style={{color: 'black', fontSize: '1em'}}>There was an error.</p>
            <ErrorButton onClick={props.onClick}>
                Try Again
            </ErrorButton>
        </ErrorContainer>
    );
}
