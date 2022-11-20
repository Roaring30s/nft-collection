import { device } from '@core/devices';
import { CollectionHeaderInterface } from "@core/customTypes";
import { CollectionNameTag, WalletTag } from '@components/Text';
import { Pfp } from '@components/Images';
import styled from 'styled-components';

/**
 * Header Container
 * Category: Personalized Module
 * Purpose:
 *   a. Holds pfp, title and address data
 *   b. Responsible for media queries
 * 
 * To Work:
 *   a. Apply to children of CollectionHeader
 */
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobile} {
        padding: 5px;
        height: 100%;
        width: 33%;
        font-size: 12px;
        justify-content: center;
      }
      @media ${device.mobileL} {
        padding: 5px;
        height: 100%;
        width: 33%;
        font-size: 14px;
        justify-content: center;
      }
      @media ${device.laptopS} {
        padding: 2%;
        height: 40%;
        width: 100%;
        font-size: 18px;
      }
      @media ${device.laptop} {
        padding: 2%;
        height: 40%;
        width: 100%;
        font-size: 20px;
      }
`;

/**
 * CollectionHeader
 * Category: Personalized Module
 * Purpose:
 *   a. Render props of header info
 * 
 * To Work:
 *   a. Apply to Dashboard parent
 * 
 * @param props - CollectionHeaderInterface - {
 *  pfp: string;
 *  contractAddress: string;
 *  name: string;
 * }
 * @returns HeaderContainer with props within
 */
export const CollectionHeader = (props: CollectionHeaderInterface) => {
    return (
        <HeaderContainer>
            <Pfp src={props.pfp} alt="Collection profile picture" />
            <CollectionNameTag>
                {props.name}
            </CollectionNameTag>
            <WalletTag>
                {props.contractAddress}
            </WalletTag>
        </HeaderContainer>
    );

}
