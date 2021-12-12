import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app';
//------------------------------------------------------------------
it('loads and displays the starting app', async () => {
    render(<App />);
    const URL = screen.getByTestId('URL');
    expect(URL).toHaveTextContent('URL');
});
//------------------------------------------------------------------
