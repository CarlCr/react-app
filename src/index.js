import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.css';
import './assets/css/img.css';
import './index.css';
import Home from './Views/Home/Index';
import GitHub from './Views/GitHub/Index';
import Contacto from './Views/Contact/Index';
import About from './Views/About/Index';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={'/'} exact={true} component={Home}/>
            <Route path={'/github'} exact={true} component={GitHub}/>
            <Route path={'/contacto'} exact={true} component={Contacto}/>
            <Route path={'/about'} exact={true} component={About}/>
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();