import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Ball from "./Component/Ball";
import bat from "./Component/bat";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        {/* <bat></bat> */}
      </div>
      ;
    </Provider>
  );
}

export default App;
