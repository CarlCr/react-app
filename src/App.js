import React, { Component } from 'react';
import Home from './Views/Home/Index';
import GitHub from "./Views/GitHub/Index";
import Contacto from "./Views/Contact/Index";
import About from "./Views/About/Index";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {

    render() {

        return (
            <div className="bg-white">
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact={true} component={Home}/>
                        <Route path={'/github'} exact={true} component={GitHub}/>
                        <Route path={'/contacto'} exact={true} component={Contacto}/>
                        <Route path={'/about'} exact={true} component={About}/>
                    </Switch>
                </BrowserRouter>
             </div>
        )
    }
}

export default App;