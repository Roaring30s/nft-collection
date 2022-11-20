import { PriceInfo } from '@components/NftCard';
import { render, screen } from '@testing-library/react';

describe('Price Info Component', () => {
    test("shows best offer price", () => {
        // setup
        const price = "12.99";
        const bid = "10.99";
        render(<PriceInfo price={price} topBid={bid} />);

        // verify - Renders Bid Component
        screen.getByLabelText('Bid');
    });
});