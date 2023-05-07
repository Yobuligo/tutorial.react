import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [data: T, updateData: (data: T) => void] => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setData(JSON.parse(item));
    }
  }, [key]);

  const updateData = (data: T) => {
    setData(data);
    localStorage.setItem(key, JSON.stringify(data));
  };
  return [data, updateData];
};