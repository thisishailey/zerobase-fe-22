import { useContext } from 'react';
import { ThemeContext } from '../store/theme';

export default function ModeViewer() {
    const theme = useContext(ThemeContext);

    return theme.mode === 'light' ? (
        <div
            style={{ display: 'flex', alignItems: 'flex-end', margin: '40px' }}
        >
            <div className="lightMode">Light Mode</div>
            <button
                className="changeMode"
                onClick={() => theme.changeMode('dark')}
            >
                Change Mode
            </button>
        </div>
    ) : (
        <div
            style={{ display: 'flex', alignItems: 'flex-end', margin: '40px' }}
        >
            <div className="darkMode">Dark Mode</div>
            <button
                className="changeMode"
                onClick={() => theme.changeMode('light')}
            >
                Change Mode
            </button>
        </div>
    );
}
