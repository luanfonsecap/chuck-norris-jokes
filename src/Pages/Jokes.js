import React from "react";
import { Provider } from "react-redux";

import store from "../store";
import List from "../Components/Joke/Index";

export default function Jokes() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}
