import { device } from '@core/devices';
import { StatsInterface, StatsContainerInterface } from '@core/customTypes';
import styled from 'styled-components';
import { StatsTitleTag, CollectionNameTag } from '@components/Text/Tags'
import WAVAX from '@assets/images/wavax.svg';

/**
 * Stats
 * Category: Personalized Module
 * Purpose:
 *   a. Contain specific collection statistic
 * 
 * To Work:
 *   a. Apply to StatBox parent
 */
export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  color: black;
  position: relative;
  margin-bottom: 2%;

  @media ${device.mobile} {
    font-size: 0.9em;
    height: 20px;
    width: 100px;
  }
  @media ${device.mobileL} {
    font-size: 1em;
    height: 20px;
    width: 100px;
  }
  @media ${device.tablet} {
    font-size: 0.9em;
    height: 20px;
    width: 100px;
    background-image: linear-gradient(to right, rgba(95, 251, 241, 0.05) 0, rgba(95, 251, 241, 0.15) 33%, rgba(95, 251, 241, 0.15) 33%, rgba(95, 251, 241, 0.2) 66%, rgba(95, 251, 241, 0.15) 66%, rgba(95, 251, 241, 0.1) 100%);
    box-shadow: 15px 10px 65px hsl(120deg 0% 83%), 
    inset -2px -3px 4px hsl(120deg 5% 50% / 70%), 
    inset 0px 5px 28px hsl(120deg 20% 95%);
    border-radius: 10px;
  }
  @media ${device.laptopS} {
    font-size: 1em;
    height: 30px;
    width: 100px;
  }
  @media ${device.laptop} {
    font-size: 1em;
    height: 30px;
    width: 100px;
  }
`;

/**
 * Container
 * Category: Personalized Module
 * Purpose:
 *   a. Control flex direction and directions of StatsContainer
 * 
 * To Work:
 *   a. Render Stat Boxes within
 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .4em;
  @media ${device.mobile} {
    width: 33%;
    height: 30px;
    font-size: 13px;
  }
  @media ${device.mobileL} {
    width: 33%;
    height: 100%;
    font-size: 13px;
  }
  @media ${device.laptopS} {
    width: 100%;
    height: 40%;
    font-size: 16px;
  }
  @media ${device.laptop} {
    width: 100%;
    height: 40%;
    font-size: 16px;
  }
`;

/**
 * StatsBox
 * Category: Personalized Module
 * Purpose:
 *   a. Contains Stats component
 *   b. Receives props to set title and quantity of stat
 * 
 * To Work:
 *   a. Apply to StatContainer parent
 * @params props - StatsInterface {
 *  backgroundColor: string;
 *  title: string;
 *  quantity: string;
 * }
 * @returns StatsBox containing one statistic about collection
 */
export const StatsBox = (props: StatsInterface) => {
    return (
        <Stats>
            <StatsTitleTag>{props.title}</StatsTitleTag>
            <CollectionNameTag>
                {props.avax && (<img src={WAVAX} alt="Avax Logo" style={{height: '1em', display: 'inline'}}/>)}
                {props.quantity}
            </CollectionNameTag>
        </Stats>
    );
}

/**
 * StatsContainer
 * Category: Personalized Module
 * Purpose:
 *   a. Renders all stats within the Collection Stats Component
 *   b. Receives props to set title and quantity of stat

 * @returns StatsBox containing one statistic about collection
 */
export const StatsContainer = (props: StatsContainerInterface) => {
    return (
        <Container>
            <StatsBox 
                title="Volume"
                quantity={props.volAmount}
                avax={true}
            />
            <StatsBox 
                title="Owners"
                quantity={props.ownersAmount}
                avax={false}
            />
            <StatsBox 
                title="Floor"
                quantity={props.floorPrice}
                avax={true}
            />
            <StatsBox 
                title="Items"
                quantity={props.itemsAmount}
                avax={false}
            />
        </Container>
    );
}