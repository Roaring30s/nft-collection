import { NftZoomContainer } from '@components/Lens';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('ZoomContainer Component', () => {

    const imageUrl: string = "https:// img.joepegs.com/cdn-cgi/image/width=800,height=800/https:// cdn.madskullz.io/madskullz/images/3602.png";
    const user = userEvent.setup();

    test('renders ZoomCont', () => {
        // setup
        render(<NftZoomContainer src={imageUrl} />);

        // verify - zoomed image rendered
        expect(screen.getByLabelText("Zoomed Image")).toBeTruthy();
        
    });

    test('performs zoom functionality on hover', async () => {
        // setup
        render(<NftZoomContainer src={imageUrl} />);

        //execution - hover around to zoom
        await user.hover(screen.getByLabelText('Zoomed Image'));

    })
});