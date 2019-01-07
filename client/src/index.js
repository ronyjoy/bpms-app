import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import ActuallyMainApp  from './ActuallyMainApp';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

  

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ActuallyMainApp />
      </BrowserRouter>
    </Provider>,
     document.querySelector("#root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
