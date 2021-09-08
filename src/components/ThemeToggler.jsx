import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button } from '../styles';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
        Click Me
      </Button>
    </div>
  );
};
