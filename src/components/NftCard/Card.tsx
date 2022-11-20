import React, { useState } from 'react';
import { NftCardContainer } from './NftCardContainer';
import { MagnifyButton }  from '@components/Buttons/MagnifyButton';
import { RarityTag, TitleTag } from '@components/Text';
import { NftImageContainer } from '@components/Images';
import { PriceInfo } from './PriceInfo'; 
import { NftCardInterface } from '@core/customTypes';
import { DescriptionContainer } from './DescriptionContainer';
import { NftZoomContainer } from '@components/Lens';
import { BuyInfo } from './BuyInfo';

/**
 * Nft Card
 * Category: Personalized Module
 * Purpose:
 *   a. Renders nft, buy, & price data, and zooming capability (everything to be seen on card)
 *   b. Applies inline styling to move components to correct place of card
 *   b. Serves as traffic controller of state events, i.e. hover and click events
 * 
 * To Work:
 *   a. Apply all card components
 *   b. Create local state variables to listen for hover and click events of specific cards
 * 
 * @param props - NftCardInterface - {
 *  src: string;
 * }
 * @returns Nft Card to sit in Gallery feature
 */
export const NftCard: React.FC<NftCardInterface> = ({ src, title, rarity, price, bid  }: NftCardInterface) => {

    const [enteredCard, setenteredCard] = useState<boolean>(false);
    const [magnified, setMagnified] = useState<boolean>(false);

    return (
        <NftCardContainer
            aria-label='Nonfungible Token Image' 
            onMouseEnter={() => setenteredCard(true)}
            onMouseLeave={() => { 
                setenteredCard(false);
                setMagnified(false); 
            }}
        >
            {magnified && enteredCard ? <NftZoomContainer src={src} aria-label='Image of Magnifying Glass' /> : <NftImageContainer src={src} />}
            {/*Mouse Enters Card State Change*/}
            {enteredCard && (
                    <MagnifyButton fade={enteredCard} onClick={() => setMagnified(prev => !prev)} />
                )
            }
            {/*Card Price & Buy Info & Rarity Tag*/}
            {enteredCard && !magnified &&
                (
                    <span>
                        <span style={{
                            position: 'absolute',
                            top: '2.5%',
                            right: '5%'
                        }}>
                            <RarityTag 
                                fade={enteredCard}
                                aria-label='Rarity'
                                aria-details='Rarity Tag Number'
                            >
                                {rarity}
                            </RarityTag>
                        </span>
                        <DescriptionContainer>
                            <TitleTag
                                aria-label='Title'
                                aria-details='Title for NFT'
                            >
                                {title}
                            </TitleTag>
                            <PriceInfo 
                                price={price}
                                topBid={undefined}
                            />
                            <BuyInfo />
                        </DescriptionContainer>
                    </span>
                )
            }
        </NftCardContainer>
    );
}
