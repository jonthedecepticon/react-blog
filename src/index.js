import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css?v=2.1.0';
import './assets/css/demo.css';
import './assets/css/nucleo-icons.css';
import './assets/css/font-awesome.min.css';

import App from './components/App';
import Home from './components/Home';
import Header from './components/Header';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
