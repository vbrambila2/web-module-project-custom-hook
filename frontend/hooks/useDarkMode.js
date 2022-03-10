import { useState } from 'react';

export function useDarkMode() {
    const [mode, setMode] = useState(false);

    const changeMode = () => {
        return setMode(!mode);
    };

    return [mode, changeMode];
}