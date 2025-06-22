import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from '../Loading';

// Mock the context to simulate loading state
jest.mock('../../../context/AppContext.jsx', () => ({
  useAppContext: () => ({
    isDataLoading: true,
  }),
}));

// Test if the loading indicator appears when data is loading
test('should display loading indicator when data is loading', () => {
  render(<Loading />);
  expect(screen.getByText(/loading data/i)).toBeInTheDocument();
});
