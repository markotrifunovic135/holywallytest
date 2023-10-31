import { useState } from 'react';

const INITIAL_COUNT = 0;

export const useCounterHook = (initialCount = INITIAL_COUNT) => {
  const [counter, setCounter] = useState<number>(initialCount);

  return { counter, setCounter };
};
