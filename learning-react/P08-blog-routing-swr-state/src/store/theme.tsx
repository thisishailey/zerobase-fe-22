import { createContext, useState } from 'react';

type ModeType = 'light' | 'dark';

interface Theme {
    mode: ModeType;
    changeMode: (mode: ModeType) => void;
}

export const ThemeContext = createContext<Theme>({
    mode: 'light',
    changeMode: (mode: ModeType) => mode,
});

export function ThemeStore<T>(props: { children: T }) {
    const [mode, setMode] = useState<ModeType>('light');

    const theme: Theme = {
        mode: mode,
        changeMode: (newMode: ModeType) => setMode(newMode),
    };

    return (
        <ThemeContext.Provider value={theme}>
            {props.children as React.ReactNode}
        </ThemeContext.Provider>
    );
}
