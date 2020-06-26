import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('the header has stuff', () => {
    test('a main header tag exists', () => {
        render(<Header />);

        // the <header> tag has the banner aria role by default
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
});
