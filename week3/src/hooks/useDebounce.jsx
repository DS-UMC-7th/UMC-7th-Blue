import { useEffect, useState } from "react"

const useDebounce = ( value, delay ) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return query;
}

export default useDebounce