import React from "react";

import "./App.css";
import { Provider } from "react-redux";
// import store from "./redux/rootreducer";
import store from "./store";
import Ball from "./Component/Ball";
import Bat from "./Component/Bat";

import Tudo from "./Component/Tudo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        <Bat></Bat>
        <Tudo></Tudo>
      </div>
      ;
    </Provider>
  );
}

export default App;
