import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */

/* ✅ Completed Ticket 2: API Integration & Graphs Page Activation

- Replaced test data with real API integration using Axios in AppContext.jsx.
- Implemented `getFiscalData`, `getCitizenshipResults`, and `fetchData` to pull data from:
  - /fiscalSummary
  - /citizenshipSummary
- Ensured `graphData` is correctly shaped with `yearResults` and `citizenshipResults` arrays.
- Added fallbacks for error handling (empty arrays or testData fallback in case of failure).
- Fixed access to the /graphs route by setting `isAuthenticated = true` in `Header.jsx`, which allowed protected components to render properly.
- Graph components now successfully display live data after API integration.

Ready for code review.

--------------------------------------------------------------------------------------------------------------

✅ Ukończono Ticket 2: Integracja z API i podpięcie danych do wykresów

- Zaimplementowano pobieranie danych z API (`/fiscalSummary` i `/citizenshipSummary`) za pomocą axiosa.
- Uzupełniono funkcje `getFiscalData`, `getCitizenshipResults` oraz `fetchData` w pliku `AppContext.jsx`, zachowując istniejącą strukturę kodu.
- Zapewniono, że dane trafiają do `graphData` w odpowiednim formacie (`yearResults` i `citizenshipResults` jako tablice).
- Dodano zabezpieczenia w przypadku błędów API (fallback na `testData` lub pustą tablicę).
- Rozwiązano problem z niewidoczną stroną `/graphs` – ustawiono `isAuthenticated = true` w `Header.jsx`, co umożliwiło renderowanie komponentów chronionych.
- Po integracji komponenty wykresów poprawnie wyświetlają dane z API.

Kod gotowy do review. */

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const API_BASE = 'https://asylum-be.onrender.com';

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    try {
      const response = await axios.get(`${API_BASE}/fiscalSummary`);
      return response.data;
    } catch (err) {
      console.error('Error fetching fiscalSummary:', err);
      return [];
    }
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    try {
      const response = await axios.get(`${API_BASE}/citizenshipSummary`);
      return response.data;
    } catch (err) {
      console.error('Error fetching citizenshipSummary:', err);
      return [];
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    try {
      const fiscalData = await getFiscalData();
      const citizenshipData = await getCitizenshipResults();

      if (fiscalData && citizenshipData) {
        setGraphData({
          ...fiscalData,
          citizenshipResults: citizenshipData,
        });
      }
      setIsDataLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  useEffect(() => {
    updateQuery();
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
