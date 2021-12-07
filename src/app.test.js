import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import History from './components/history';
import '@testing-library/jest-dom/extend-expect';
//---------------------------------------------------------
it('Should render results', () => {
  const result = ['https://pokeapi.co/api/v2/pokemon','get']
  render(<History history={result} />);
  const items = screen.getByTestId(0);
  expect(items).toHaveTextContent('https://pokeapi.co/api/v2/pokemon');
  const _items = screen.getByTestId(1);
  expect(_items).toHaveTextContent('get');
});
//---------------------------------------------------------