import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css?v=2.1.0';
import './assets/css/demo.css';
import './assets/css/nucleo-icons.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
