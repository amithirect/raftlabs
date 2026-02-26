import { useState, useCallback } from "react";

interface StorageState<T = any> {
  getValue: (key: string) => T | null;
  setValue: (key: string, value: T) => void;
  removeValue: (key: string) => void;
  clear: () => void;
  getAll: () => Record<string, T>;
}

const useStorage = <T = any,>(
  type: "local" | "session" = "local",
): StorageState<T> => {
  const [storage] = useState(() =>
    type === "local" ? localStorage : sessionStorage,
  );

  const getValue = useCallback(
    (key: string): T | null => {
      try {
        const item = storage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      } catch (error) {
        console.error(`Error getting item ${key}:`, error);
        return null;
      }
    },
    [storage],
  );

  const setValue = useCallback(
    (key: string, value: T): void => {
      try {
        const serializedValue = JSON.stringify(value);
        storage.setItem(key, serializedValue);
      } catch (error) {
        console.error(`Error setting item ${key}:`, error);
      }
    },
    [storage],
  );

  const removeValue = useCallback(
    (key: string): void => {
      try {
        storage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item ${key}:`, error);
      }
    },
    [storage],
  );

  const clear = useCallback((): void => {
    try {
      storage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }, [storage]);

  const getAll = useCallback((): Record<string, T> => {
    const all: Record<string, T> = {};
    try {
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        if (key) {
          const value = getValue(key);
          if (value !== null) {
            all[key] = value;
          }
        }
      }
    } catch (error) {
      console.error("Error getting all items:", error);
    }
    return all;
  }, [storage, getValue]);

  return {
    getValue,
    setValue,
    removeValue,
    clear,
    getAll,
  };
};

export default useStorage;
