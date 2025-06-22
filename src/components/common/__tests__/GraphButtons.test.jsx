import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GraphButtons } from '../GraphButtons';

/// Mock context
jest.mock('../../../context/AppContext.jsx', () => ({
  useAppContext: () => ({
    updateQuery: jest.fn(),
    clearQuery: jest.fn(),
  }),
}));

// Mock mapTypes for map view buttons
jest.mock('../../pages/DataVisualizations/getMapView.jsx', () => ({
  mapTypes: {
    ScatterPlot: 'scatter',
    ChoroplethMap: 'choropleth',
    HeatMap: 'heat',
  },
}));

describe('GraphButtons', () => {
  // Checks if setMapView is called with correct arguments when graph buttons are clicked
  test('should call setMapView when graph buttons are clicked', () => {
    const setMapView = jest.fn();
    render(<GraphButtons mapView={null} setMapView={setMapView} />);
    fireEvent.click(screen.getByRole('button', { name: /Time Series/i }));
    fireEvent.click(screen.getByRole('button', { name: /USCIS Asylum Offices Heat Map/i }));
    fireEvent.click(screen.getByRole('button', { name: /Citizenship of Asylum Seeker/i }));

    expect(setMapView).toHaveBeenCalledTimes(3);
    expect(setMapView).toHaveBeenCalledWith('scatter');
    expect(setMapView).toHaveBeenCalledWith('heat');
    expect(setMapView).toHaveBeenCalledWith('choropleth');
  });

  // Verifies that "Update Query" and "Clear Query" buttons are rendered
  test('should render "Update Query" and "Clear Query" buttons', () => {
    render(<GraphButtons mapView={'scatter'} setMapView={jest.fn()} />);
    expect(screen.getByRole('button', { name: /Update Query/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear Query/i })).toBeInTheDocument();
  });
});
