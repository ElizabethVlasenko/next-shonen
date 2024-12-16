// "use client";

// import { useState, useEffect, useRef } from "react";

// export function useLocalStorageState<T>(
//   initialState: T,
//   key: string,
// ): [T, React.Dispatch<React.SetStateAction<T>>] {
//   const isMounted = useRef(false);
//   const [value, setValue] = useState<T>(initialState);

//   useEffect(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       if (item) {
//         setValue(JSON.parse(item));
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     return () => {
//       isMounted.current = false;
//     };
//   }, [key]);

//   useEffect(() => {
//     if (isMounted.current) {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     } else {
//       isMounted.current = true;
//     }
//   }, [key, value]);

//   return [value, setValue];
// }
"use client";

import React, { useDebugValue, useEffect, useState } from "react";

const useLocalStorageState = <S>(
  key: string,
  initialState?: S | (() => S),
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState as S);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export default useLocalStorageState;
