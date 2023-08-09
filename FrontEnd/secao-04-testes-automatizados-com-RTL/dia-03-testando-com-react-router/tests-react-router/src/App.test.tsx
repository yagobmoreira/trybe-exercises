import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

it('Renderiza texto da página inicial', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // render(<App />, {wrapper: BrowserRouter}}); outra forma de usar o BrowserRouter
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})