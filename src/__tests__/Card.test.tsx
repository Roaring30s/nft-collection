import { NftCard } from '@components/NftCard';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('NFT Card', () => {

    const imageUrl: string = "https:// img.joepegs.com/cdn-cgi/image/width=800,height=800/https:// cdn.madskullz.io/madskullz/images/3602.png";
    const user = userEvent.setup();
    const title="MadSkullz";
    const rarity="#349";
    const price="12.99";
    jest.mock('@components/NftCard/Card');

    test('renders NFT image on load', () => {
        // setup
        render(<NftCard src={imageUrl} title={title} rarity={rarity} price={price} />);

        // verify
        screen.getByLabelText('Nonfungible Token Image');
    });

    test('renders magnifying glass on hover, and unhovers', async () => {
        // setup
        render(<NftCard src={imageUrl} title={title} rarity={rarity} price={price} />);
        
        // execution - hover over NFT
        await user.hover(screen.getByLabelText('Nonfungible Token Image'));

        // verify - renders components
        screen.getByLabelText('Magnify Button to Zoom into Image'); // container
        screen.getByLabelText('Magnifying Glass'); // img

        // execution - unhover over NFT
        await user.unhover(screen.getByLabelText('Nonfungible Token Image'));

        // verify - unrenders components
        expect(screen.queryByLabelText('Magnify Button to Zoom into Image')).toBeFalsy();
        expect(screen.queryByLabelText('Magnifying Glass')).toBeFalsy();
    });

    test('renders price and purchase information on hover, and unhovers', async () => {
        // setup
        render(<NftCard src={imageUrl} title={title} rarity={rarity} price={price} />);
        
        // execution - hover over NFT
        await user.hover(screen.getByLabelText('Nonfungible Token Image'));

        // verify - renders components
        screen.getByLabelText('Price');
        screen.getByLabelText('Buy');
        screen.getByLabelText('Cart');

        // execution - unhover over NFT
        await user.unhover(screen.getByLabelText('Nonfungible Token Image'));

        // verify - unrenders components
        expect(screen.queryByLabelText("Price")).toBeFalsy();
        expect(screen.queryByLabelText("Buy")).toBeFalsy();
        expect(screen.queryByLabelText("Cart")).toBeFalsy();
    });

    test('clicks the magnifying glass to render zoom mode and disable it', async () => {
        // setup
        render(<NftCard src={imageUrl} title={title} rarity={rarity} price={price} />);

        // execution - hover & click
        await user.hover(screen.getByLabelText('Nonfungible Token Image'));
        fireEvent.click(screen.getByLabelText("Magnify Button to Zoom into Image"));

        // verify - check for zoomed image and re-click to go back
        expect(screen.getByLabelText("Zoomed Image")).toBeTruthy();
        fireEvent.click(screen.getByLabelText("Magnify Button to Zoom into Image"));
        expect(screen.queryByLabelText("Zoomed Image")).toBeFalsy();

    });
});
