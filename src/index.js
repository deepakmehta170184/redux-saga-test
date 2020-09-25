import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import getArticleData from "./component/Landing.reducer";
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(getArticleData, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}><App />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
