import React from 'react';
import { DivRow } from '@components/Divs';
import { BuyTag } from '@components/Text';
import { WhiteShoppingCart } from '@components/Images';

/**
 * BuyInfo
 * Category: Personalized Module
 * Purpose:
 *   a. Render buy tag and shopping cart image in row-like fashion
 * 
 * To Work:
 *   a. Plug in buy and cart components
 * 
 * @returns row containing buy tag and shopping cart
 */
export const BuyInfo: React.FC = () => {
    return (
        <DivRow
            fontSize="16px"
            justifyContent="space-around"
            height="35%"
            margin="0 0 2% 0"
        >
            <BuyTag aria-label='Buy' aria-details='Buy button to purchase NFT'>Buy</BuyTag>
            <WhiteShoppingCart />
        </DivRow>
    );
}