import React from "react";

import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import List from "./Components/List";

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
