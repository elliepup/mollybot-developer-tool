import React from 'react';
import './App.css';
import { ColorSchemeProvider, ColorScheme, MantineProvider, Paper } from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import AppShellLoader from './Components/AppShell';

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <div className="App">
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }}>
                    <Paper>
                        <AppShellLoader />
                    </Paper>


                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    );
}

export default App;