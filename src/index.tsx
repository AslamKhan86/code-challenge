import React from "react";
import ReactDOM from "react-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";

const store = configureStore();
const uiTheme: DefaultTheme = {
  colors: {
    fg: "#000000",
    primary: "#3a4aef",
    secondary: "#8e97f1"
  }
};
ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={uiTheme}>
      <App />
    </ThemeProvider>
  </Provider>
), document.getElementById("root"));

serviceWorker.unregister();
