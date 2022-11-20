import { DescriptionContainer } from '@components/NftCard';
import { render } from '@testing-library/react';

describe('Description Containers', () => {
    test("renders correctly on import", () => {
        // setup
        render(<DescriptionContainer />);
    });
});