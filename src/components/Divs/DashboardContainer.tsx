

import styled from 'styled-components';
import { device } from '@core/devices';

/**
 * Dashboard Container
 * Category: Personalized Module
 * Purpose:
 *   a. Hold Collection Stats and Gallery Container Information
 *   b. Relies on media queries to determine if children are displayed in row or column format
 * 
 * To Work:
 *   a. Apply to Dashboard component and house Collection Stats and Gallery container within
 */
export const DashboardContainer = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    height: 100vh;
    @media ${device.mobile} {
        flex-direction: column;
      }
    @media ${device.laptopS} {
        flex-direction: row;
    }
`;