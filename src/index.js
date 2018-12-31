import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-4.1.1/dist/css/bootstrap.css';
import 'bootstrap-4.1.1/dist/css/img.css';
import App from './App';
import NavBar from './UI/NavBar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();