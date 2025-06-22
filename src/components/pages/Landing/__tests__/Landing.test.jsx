import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LandingPage } from '../index';

// Test suite for the Landing Page component
describe('Landing Page', () => {
  // This test checks if the main heading is visible on the page
  test('renders main heading', () => {
    // Render the LandingPage component inside MemoryRouter to support routing
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    // Look for a heading level 1 with specific text and check if it exists in the document
    expect(screen.getByRole('heading', { level: 1, name: /Asylum Office Grant Rate Tracker/i })).toBeInTheDocument();
  });

  // This test checks if all important chart icons and one document icon are displayed
  test('renders chart icons and buttons', () => {
    // Render the LandingPage component again inside MemoryRouter
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(screen.getByAltText(/Bar Graph/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Pie Chart/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Line Graph/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Paper Stack/i)).toBeInTheDocument();
  });
});
