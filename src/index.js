import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css?v=2.1.0';
import './assets/css/demo.css';
import './assets/css/nucleo-icons.css';
import './assets/css/font-awesome.min.css';

import App from './components/App';
import Home from './components/Home';
import Header from './components/Header';
import reducers from './reducers';
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

import $ from "jquery";

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

window.onload=function(){
  $(function(){
    if(window.location.protocol==="https:")
    window.location.protocol="http";
  });
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
