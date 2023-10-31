import { useState, Dispatch, SetStateAction } from 'react';

export const useCounterHook = (initialCount = 0) => {
  const [counter, setCounter] = useState<number>(initialCount);

  return {counter, setCounter};
}
