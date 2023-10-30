import { useState, Dispatch, SetStateAction } from 'react';

export const useCounterHook = (initialCount = 0): [number, Dispatch<SetStateAction<number>>] => {
  const [counter, setCounter] = useState<number>(initialCount);

  return [counter, setCounter];
}
