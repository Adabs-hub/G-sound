import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
 * Test suite for App component
 * Tests core app functionality and rendering
 */

describe('App Component', () => {
  beforeEach(() => {
    // Wrap App in Router since it contains routes
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('renders main navigation', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('renders header component', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('renders main content area', () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  test('renders footer', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});