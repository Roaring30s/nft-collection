import React from 'react';
import { DivRow } from '@components/Divs';
import { PriceInfoInterface } from '@core/customTypes';
import { AvaxPriceTag, TopBidTag } from '@components/Text';
import WAVAX from "@assets/images/wavaxWhite.svg";

/**
 * Price Info
 * Category: Personalized Module
 * Purpose:
 *   a. Render row for price and bid information
 * 
 * To Work:
 *   a. Feed price and topBid prop info from parent
 *   b. Insert price logo
 * @param props - PriceInfoInterface {
 * price: string
 * topBid: string
 * }
 * @returns row containing price and bid info 
 */
export const PriceInfo: React.FC<PriceInfoInterface> = ({ price, topBid }: PriceInfoInterface) => {
    return (
        <DivRow
            fontSize="16px"
            justifyContent="space-evenly"
            height="20%"
        >
            <AvaxPriceTag 
                price={price} 
                image={WAVAX}
                aria-details='Asking price for NFT' 
            />
            {topBid ? <TopBidTag aria-label='Bid' aria-details='Highest bidding price'>Best Bid: {topBid}</TopBidTag> : ""}
        </DivRow>
    );
}
