// App.test.tsx

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };
    
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;
    
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    const MOCK_JOKE_2 = {
      id: '8s5bGtrOfxc',
      joke: 'Whats red and bad for your teeth? A Brick.',
    }

    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;

    const mockFetch2 = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE_2);

    const newJokeBtn = screen.getByRole('button', { name: "New joke" });
    expect(newJokeBtn).toBeInTheDocument();
    await userEvent.click(newJokeBtn);

    const renderedJoke2 = await screen.findByText('Whats red and bad for your teeth? A Brick.');
    expect(renderedJoke2).toBeInTheDocument();
    expect(mockFetch2).toHaveBeenCalledTimes(1);
    expect(mockFetch2).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  
  });
})

// App.test.tsx

// describe('Testando fetch', () => {
//   // ...
//   it('fetches a joke', async () => {
//     const joke = {
//       id: '7h3oGtrOfxc',
//       joke: 'Thanks for explaining the word "many" to me. It means a lot.',
//       status: 200,
//     };

//     global.fetch = vi.fn(() => Promise.resolve({
//       json: () => Promise.resolve(joke),
//     } as Response));

//     render(<App />);
//     const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
//     expect(renderedJoke).toBeInTheDocument();
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
//   });
// });