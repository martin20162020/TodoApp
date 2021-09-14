import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./components/App";
import reduxThunk from "redux-thunk";
import reducers from './redux/reducers';
import { applyMiddleware, createStore, compose } from "redux";

const store = createStore(reducers,
    compose(applyMiddleware(reduxThunk)));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);