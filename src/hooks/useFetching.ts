import { useState } from 'react';

export const useFetching = (cb: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (...args: any[]) => {
    try {
      setIsLoading(true);
      await cb(...args);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Произошла ошибка при получении данных');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { fetching, isLoading, error };
};
