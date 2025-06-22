import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProvideAppContext, AppContext } from '../AppContext';

// Simple component that checks if context is available
const Consumer = () => {
  const context = React.useContext(AppContext);
  return <span>{context ? 'context loaded' : 'no context'}</span>;
};

// Test to verify if ProvideAppContext supplies context to its children
it('provides context', () => {
  render(
    <ProvideAppContext>
      <Consumer />
    </ProvideAppContext>
  );
  // The test passes if the text "context loaded" appears, meaning context was provided
  expect(screen.getByText(/context loaded/i)).toBeInTheDocument();
});
