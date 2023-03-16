import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>App</div>
      <GlobalStyle />
    </ThemeProvider>
  );
};
