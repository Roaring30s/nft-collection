import { device } from '@core/devices';
import { SocialsInterface } from "@core/customTypes";
import { MediaLinkContainer } from '@components/Images';
import styled from 'styled-components';

/**
 * Scoials Container
 * Category: Personalized Module
 * Purpose:
 *   a. Container for MediaLinks
 *   b. Host media queries for flex direction and media link sizes
 * 
 * To Work:
 *   a. Apply within Social parent component
 */
export const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.mobile} {
    width: 33%;
    flex-direction: column;
    height: 100%;
    font-size: 28px;
  }
  @media ${device.mobileL} {
    width: 33%;
    flex-direction: column;
    height: 100%;
    font-size: 38px;
  }
  @media ${device.laptopS} {
    width: 100%;
    height: 15%;
    flex-direction: row;
    font-size: 30px;
  }
  @media ${device.laptop} {
    width: 100%;
    height: 15%;
    flex-direction: row;
    font-size: 32px;
  }
`;

/**
 * Socials
 * Category: Personalized Module
 * Purpose:
 *   a. Hold Media Link Containers for Twitter, Discord, WWW
 *   b. Host media queries that will shift flex direction and container sizes
 * 
 * To Work:
 *   a. Import Medialink containers
 * 
 * @param props - SocialsInterface - {
 *  twitterSrc: string;
    twitterLink?: string;
    discordSrc: string;
    discordLink?: string
    wwwSrc: string;
    wwwLink?: string
 */
export const Socials = (props: SocialsInterface) => {
    return (
        <SocialsContainer>
            {props.twitterLink && (
                <MediaLinkContainer
                    link={props.twitterLink}
                    src={props.twitterSrc}
                />
                )
            }
            {props.discordLink && (
                <MediaLinkContainer
                    link={props.discordLink}
                    src={props.discordSrc}
                />
                )
            }
            {props.wwwLink && (
                <MediaLinkContainer
                    link={props.wwwLink}
                    src={props.wwwSrc}
                />
                )
            }
        </SocialsContainer>
    );
}