import './assets/vendors/perfect-scrollbar/perfect-scrollbar.css';
import './assets/vendors/flag-icon/css/flag-icon.min.css';
import './assets/css/style.css';
import './assets/css/materialize.css'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./components/App.js";

import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root")
);
