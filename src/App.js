import { DarkTheme, LightTheme } from './styles';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { ThemeToggler } from './components/ThemeToggler';

function App() {
  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <ThemeToggler />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
