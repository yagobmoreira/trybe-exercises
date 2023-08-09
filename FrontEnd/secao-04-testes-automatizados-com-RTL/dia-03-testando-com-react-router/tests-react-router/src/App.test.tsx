import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';

import App from './App';

it('Renderiza texto da página inicial', () => {
  // render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // );
  // render(<App />, {wrapper: BrowserRouter}}); outra forma de usar o BrowserRouter
  renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

it('Navega para página About', async () => {
  // render(<App />, { wrapper: BrowserRouter });
  const {user} = renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

it('Navega da página About para a página inicial', async () => {
  const {user} = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

it('Navega para página NotFound', async () => {
  const {user} = renderWithRouter(<App />, { route: '/pagina-nao-existente' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /to-home/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

