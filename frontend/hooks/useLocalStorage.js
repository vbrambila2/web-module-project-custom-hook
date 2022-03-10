import { useState} from "react";

export function useLocalStorage(key, initialValue) {
    const [valueLS, setValueLS] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });

      const setStoredValue = initialValue => {
        const stringifiedValue = JSON.stringify(initialValue);
        window.localStorage.setItem(key, stringifiedValue);
        setValueLS(initialValue);
      };
      
      return [valueLS, setStoredValue];
}