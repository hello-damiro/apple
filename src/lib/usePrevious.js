// a tuple is an ordered sequence of values
// Accessing the previous state value without using ref and effects
// https://youtu.be/aV2YJuxQ2vo?t=416
import { useState } from 'react';

export default function usePrevious(state) {
  let [tuple, setTuple] = useState([null, state]); // [previous, current]

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
