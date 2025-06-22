import React, { useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  // Helper component for testing the hook
  function TestComponent() {
    const [graphData, setGraphData] = useState('default');
    useLocalStorage({ graphData, setGraphData });

    return (
      <div>
        <span data-testid='data'>{graphData}</span>
        <button onClick={() => setGraphData('changed')}>Change</button>
      </div>
    );
  }

  // Clear localStorage before each test to ensure a clean environment
  beforeEach(() => {
    localStorage.clear();
  });

  // Should get value from localStorage on initial render
  test('should get value from localStorage on initial render', () => {
    localStorage.setItem('myAppState', JSON.stringify('z localstorage'));
    render(<TestComponent />);
    expect(screen.getByTestId('data').textContent).toBe('z localstorage');
  });

  // Should save value to localStorage when state changes
  test('should save value to localStorage when state changes', () => {
    render(<TestComponent />);
    act(() => {
      screen.getByText('Change').click();
    });
    expect(localStorage.getItem('myAppState')).toBe(JSON.stringify('changed'));
    expect(screen.getByTestId('data').textContent).toBe('changed');
  });
});
