import React from 'react';
import configureStore from "../redux/store";
import {Provider} from "react-redux";
import Layout from "./layout";
import {initialState} from "../redux/reducers";

const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default App;
