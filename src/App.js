import { ThemeProvider } from "styled-components";

import { theme } from "./customTheme";
import GlobalStyle from "./styles/GlobalStyle";
import Home1 from "./containers/home1";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home1 />
      </>
    </ThemeProvider>
  );
};

export default App;
