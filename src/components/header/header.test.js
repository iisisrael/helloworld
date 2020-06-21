import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

test('renders header stuff', () => {
    const { getByText } = render(<Header />);
    const mainHeader = getByText(/Israel J\. Carberry/i);
    expect(mainHeader).toBeInTheDocument();
});
