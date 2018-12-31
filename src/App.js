import React, { Component } from 'react';
import NavBar from './UI/NavBar.js';
import Home from './container/home.js';

class App extends Component {

    render() {
        const logo = 'CarlCr'
        return (
            <div className="container bg-white">
                <NavBar logo = {logo}/>
                <Home/>
            </div>
        )
    }
}

export default App;