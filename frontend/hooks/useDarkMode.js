//import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
    const [mode, setMode] = useLocalStorage(false);

    const changeMode = () => {
        return setMode(!mode);
    };

    return [mode, changeMode];
}