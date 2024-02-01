import { useEffect, useState } from "react";

export const useDebounce = (value, debounceUpdater, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    debounceUpdater(true);
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
      debounceUpdater(false);
    }, [delay]);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
