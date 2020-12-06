import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, dependence: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    fn();
  }, [fn, dependence]); //不可变数据
};
