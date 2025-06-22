import { renderHook } from '@testing-library/react';
import { useDownloadData } from '../useDownloadData';

describe('useDownloadData', () => {
  test('should provide a download function', () => {
    const { result } = renderHook(() => useDownloadData());
    expect(typeof result.current.downloadCSV).toBe('function');
  });
});
