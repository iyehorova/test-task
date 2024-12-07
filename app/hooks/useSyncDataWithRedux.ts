import { useEffect, useState } from 'react';
import { useAppSelector } from '../lib/hooks';
import { RootState } from '../lib/store';

export const useSyncDataWithRedux = <T extends object>(
  data: T[],
  selector: (state: RootState) => T[] | null,
) => {
  const [visibleData, setVisibleData] = useState(data);

  const savedData = useAppSelector(selector);

  useEffect(() => {
    if (savedData) {
      setVisibleData(savedData);
    }
  }, [savedData]);

  return visibleData;
};
