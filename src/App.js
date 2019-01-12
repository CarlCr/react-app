import React, { Component } from 'react';
import Navbar from './ui/Navbar.js';
import Home from './container/home.js';

class App extends Component {

    render() {
        const logo = 'CarlCr'
        return (
            <div className="container bg-white">
                <Navbar logo = {logo}/>
                <Home/>
            </div>
        )
    }
}

export default App;