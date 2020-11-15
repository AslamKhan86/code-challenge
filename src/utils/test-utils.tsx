import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import configureStore from "../store";

const uiTheme: DefaultTheme = {
  colors: {
    fg: "#000000",
    primary: "#3a4aef",
    secondary: "#8e97f1",
  }
};

const customRender = (ui: React.ReactElement<any>, initialState: {}) => {
  const store = configureStore(initialState);
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={uiTheme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";

export { customRender as render };
